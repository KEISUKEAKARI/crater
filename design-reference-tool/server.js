const express = require('express');
const session = require('express-session');
const cors = require('cors');
const axios = require('axios');
const { OpenAI } = require('openai');
const puppeteer = require('puppeteer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// OpenAI API設定
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ミドルウェア
app.use(express.static('.')); // 静的ファイルを提供
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Base64画像対応
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// セッション設定
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

// Pinterest API の設定
const PINTEREST_CLIENT_ID = process.env.PINTEREST_CLIENT_ID || '';
const PINTEREST_CLIENT_SECRET = process.env.PINTEREST_CLIENT_SECRET || '';
const PINTEREST_REDIRECT_URI = process.env.PINTEREST_REDIRECT_URI || 'http://localhost:3000/auth/callback';
const PINTEREST_API_BASE = 'https://api.pinterest.com/v1';

// =====================
// ルート
// =====================

// ホームページ
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Pinterest 認証開始
app.get('/auth/start', (req, res) => {
  const scopes = ['read_public', 'read_user', 'read_boards'];
  const authUrl = `https://api.pinterest.com/oauth/?client_id=${PINTEREST_CLIENT_ID}&redirect_uri=${PINTEREST_REDIRECT_URI}&response_type=code&scope=${scopes.join(',')}`;
  res.json({ authUrl });
});

// Pinterest 認証コールバック
app.get('/auth/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: '認可コードが見つかりません' });
  }

  try {
    // アクセストークンを取得
    const tokenResponse = await axios.post(`${PINTEREST_API_BASE}/oauth/token`, {
      grant_type: 'authorization_code',
      code,
      client_id: PINTEREST_CLIENT_ID,
      client_secret: PINTEREST_CLIENT_SECRET,
      redirect_uri: PINTEREST_REDIRECT_URI
    });

    const { access_token } = tokenResponse.data;

    // セッションにトークンを保存
    req.session.pinterestToken = access_token;

    // フロントにリダイレクト
    res.redirect('/');
  } catch (error) {
    console.error('Pinterest 認証エラー:', error.message);
    res.status(500).json({ error: 'Pinterest 認証に失敗しました' });
  }
});

// ボード/ピン取得
app.get('/api/pinterest/boards', async (req, res) => {
  const token = req.session.pinterestToken;

  if (!token) {
    return res.status(401).json({ error: 'Pinterest 認証が必要です' });
  }

  try {
    const response = await axios.get(`${PINTEREST_API_BASE}/me/boards`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    res.json(response.data);
  } catch (error) {
    console.error('ボード取得エラー:', error.message);
    res.status(500).json({ error: 'ボードの取得に失敗しました' });
  }
});

// ボードのピンを取得
app.get('/api/pinterest/boards/:boardId/pins', async (req, res) => {
  const token = req.session.pinterestToken;
  const { boardId } = req.params;

  if (!token) {
    return res.status(401).json({ error: 'Pinterest 認証が必要です' });
  }

  try {
    const response = await axios.get(`${PINTEREST_API_BASE}/boards/${boardId}/pins`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    res.json(response.data);
  } catch (error) {
    console.error('ピン取得エラー:', error.message);
    res.status(500).json({ error: 'ピンの取得に失敗しました' });
  }
});

// プロンプト生成
app.post('/api/generate-prompt', async (req, res) => {
  const { images, designTasteUrls, urls, additionalNotes } = req.body;

  // 入力チェック：画像、URL、テキストのいずれかが必要
  const hasImages = images && images.length > 0;
  const hasDesignUrls = designTasteUrls && designTasteUrls.some(url => url.trim() !== '');
  const hasLayoutUrls = urls && urls.some(url => url.trim() !== '');
  const hasNotes = additionalNotes && additionalNotes.trim() !== '';

  if (!hasImages && !hasDesignUrls && !hasLayoutUrls && !hasNotes) {
    return res.status(400).json({ error: '参考画像、URL、または追加の指示を入力してください' });
  }

  // AI分析関数
  async function analyzeImageWithAI(imageBase64) {
    try {
      if (!imageBase64) {
        return '画像データが利用できません';
      }
      const base64Data = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        max_tokens: 500,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/png;base64,${base64Data}`
                }
              },
              {
                type: 'text',
                text: `このデザイン画像を詳細に分析してください。以下の項目を含めてください：

【配色】
- 使用されているメインカラー（HEXコードで）、サブカラー、アクセントカラー
- 配色バランス（どの色が何%使用されているか）
- デザインスタイル分類（フラットデザイン、グラデーション、ネオモルフィズム、ミニマリズムなど）

【タイポグラフィ】
- 使用されているフォント（推測）、フォントサイズの階層
- テキストのウェイト（bold、regular、lightなど）
- 行間・文字間の特徴

【余白・間隔】
- パディング・マージンの比率（広い/狭い）
- 要素間の距離感
- ホワイトスペース（空白の使い方）

【全体的な雰囲気】
- 高級感、親しみやすさ、モダンさなど感覚的な特徴`
              }
            ]
          }
        ]
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error('画像分析エラー:', error.message);
      return '画像分析に失敗しました';
    }
  }

  async function analyzeUrlWithAI(url) {
    try {
      let browser;
      const originalConsoleLog = console.log;
      const originalConsoleError = console.error;
      console.log = () => {};
      console.error = () => {};

      browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });
      const screenshot = await page.screenshot({ encoding: 'base64' });
      await browser.close();

      console.log = originalConsoleLog;
      console.error = originalConsoleError;

      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        max_tokens: 500,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/png;base64,${screenshot}`
                }
              },
              {
                type: 'text',
                text: `このWebサイト（${url}）のレイアウト・デザイン特徴を詳細に分析してください。以下の項目を含めてください：

【レイアウト構造】
- グリッドシステム（12列、8列など）の有無
- 主要セクション配置（Hero/ヘッダー、フィーチャー、CTA、フッターなど）
- セクションの順序と流れ

【セクション要素】
- 各セクションのスタイル分類（カード型、リスト型、グリッド型、バナー型など参考: component.gallery の例のような）
- セクション内の要素配置（左右、上下、グリッド）
- セクション間の間隔（余白の大きさ）

【配色とタイポグラフィ】
- メインカラー、サブカラー、背景色（HEXコード）
- 本文フォント、見出しフォント（推測）
- テキストの階層構造

【視覚的な流れ】
- ユーザーの視線の動き
- CTA（行動喚起）ボタンの配置と目立たせ方
- ホワイトスペースの使い方`
              }
            ]
          }
        ]
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error('URL分析エラー:', error.message);
      return `${url} の分析に失敗しました（APIエラーまたはアクセス不可）`;
    }
  }

  // プロンプト生成ロジック（AIで分析）
  let prompt = `# デザイン指示書\n\n`;

  // 参考資料セクション（何か1つでも入力があったら表示）
  if (hasImages || hasDesignUrls || hasLayoutUrls) {
    prompt += `## 参考資料\n\n`;

    // 参考画像
    if (hasImages) {
      prompt += `**参考画像:** ${images.length}点\n\n`;
    }

    // デザイン雰囲気のURL記録
    if (hasDesignUrls) {
      const validDesignUrls = designTasteUrls.filter(item => {
        const url = typeof item === 'string' ? item : item.url;
        return url && url.trim() !== '';
      });
      prompt += `**デザイン雰囲気の参考URL:**\n`;
      validDesignUrls.forEach((item) => {
        const url = typeof item === 'string' ? item : item.url;
        const comment = typeof item === 'string' ? '' : item.comment;
        prompt += `- ${url}`;
        if (comment && comment.trim()) {
          prompt += `（${comment}）`;
        }
        prompt += `\n`;
      });
      prompt += `\n`;
    }

    // レイアウト参考URL記録
    if (hasLayoutUrls) {
      const validUrls = urls.filter(item => {
        const url = typeof item === 'string' ? item : item.url;
        return url && url.trim() !== '';
      });
      prompt += `**レイアウト参考URL:**\n`;
      validUrls.forEach((item) => {
        const url = typeof item === 'string' ? item : item.url;
        const comment = typeof item === 'string' ? '' : item.comment;
        prompt += `- ${url}`;
        if (comment && comment.trim()) {
          prompt += `（${comment}）`;
        }
        prompt += `\n`;
      });
      prompt += `\n`;
    }
  }

  // デザイン分析セクション：参考資料（画像、URL、テキスト）をAIで分析
  const analysisPoints = [];

  // 画像分析（AIを使用）
  if (hasImages && images.length > 0) {
    for (let i = 0; i < images.length; i++) {
      const imageBase64 = images[i].src;
      const imageComment = images[i].comment || '';
      const imageAnalysis = await analyzeImageWithAI(imageBase64);
      const imageLabel = images.length > 1 ? `参考画像${i + 1}` : '参考画像';
      let analysisText = `**${imageLabel}から学ぶこと（AI分析）:**\n`;
      if (imageComment && imageComment.trim()) {
        analysisText += `【ユーザーのコメント】\n${imageComment}\n\n`;
      }
      analysisText += imageAnalysis;
      analysisPoints.push(analysisText);
    }
  }

  // URL分析（AIを使用）
  if (hasDesignUrls) {
    const validDesignUrls = designTasteUrls.filter(item => {
      const url = typeof item === 'string' ? item : item.url;
      return url && url.trim() !== '';
    });
    for (const item of validDesignUrls) {
      const url = typeof item === 'string' ? item : item.url;
      const urlComment = typeof item === 'string' ? '' : item.comment;
      const urlAnalysis = await analyzeUrlWithAI(url);
      let analysisText = `**参考サイト「${url}」から学ぶこと（AI分析）:**\n`;
      if (urlComment && urlComment.trim()) {
        analysisText += `【ユーザーのコメント】\n${urlComment}\n\n`;
      }
      analysisText += urlAnalysis;
      analysisPoints.push(analysisText);
    }
  }

  if (hasLayoutUrls) {
    const validUrls = urls.filter(url => url.trim() !== '');
    analysisPoints.push(`**レイアウト構成から学ぶこと:**\n以下のURLのレイアウト・ページ構成を分析してください:\n${validUrls.map(url => `- ${url}`).join('\n')}\n\nセクション配置、情報階層、ユーザーフローを参考にしてください。`);
  }

  if (hasNotes) {
    analysisPoints.push(`**ユーザーの要件:**\n「${additionalNotes}」\n\nこの要件が具体的に何を求めているのかを理解し、上記の参考資料の中から要件を満たす要素を抽出してください。`);
  }

  // 複数入力時は統合的なデザイン指示を生成
  let finalPrompt = prompt;
  if (analysisPoints.length > 1) {
    // 複数の分析結果から統合的なデザイン指示を生成
    const synthesisPrompt = `以下は複数の参考資料から得られた分析結果です。これらから、Claude（AI）がWebサイトやUIをHTMLとCSSで実装するときに使える、具体的で実装可能なデザイン指示を生成してください。

迷わず実装できるよう、以下の情報を具体的に含めてください：
- HEXコード付きの色指定
- フォント名と具体的なサイズ・ウェイト
- 具体的なpx値やrem値の余白指定
- 実装可能な具体的なパターン名

## 分析結果
${analysisPoints.join('\n\n---\n\n')}

## Claude向けの実装指示を以下の形式で作成してください：

### デザイン実装指定

#### 配色指定（HEXコード付き）
- 背景色：#XXXXXX（用途：背景）
- メインテキスト色：#XXXXXX
- アクセント色：#XXXXXX（用途：ボタン、強調など）
- その他必要な色：（全て具体的なHEXコード）

#### レイアウト指定
- ページ最大幅：XXXX px、中央寄せor全幅
- 主要なセクションの構成：（例：ヒーロー + グリッド、カード型など具体的に）
- グリッド列数：何列、ギャップはXXpx

#### 余白・スペーシング（具体的な値）
- セクション間の余白：XXrem or XXpx
- カード内パディング：XXpx
- 行間：XXの倍率

#### タイポグラフィ指定（実装用）
**見出し（h1）**：
- フォント：[serif/sans-serif系の具体的な推奨]
- サイズ：XXpx / XXrem
- ウェイト：XXX（400/700/900など）
- 行間：XX

**本文（body）**：
- フォント：[serif/sans-serif系の具体的な推奨]
- サイズ：XXpx / XXrem
- ウェイト：XXX
- 行間：XX

#### UI要素の仕様
**ボタン**：色、パディング、角丸、ホバー時の変化
**カード**：背景色、シャドウ、パディング、境界線
**その他必要なUI要素**

#### 実装時の重点
- このデザインで最も重視すべき要素は何か
- 注意点・避けるべきパターン`;

    try {
      const synthesisResponse = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: synthesisPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      });

      const synthesisResult = synthesisResponse.choices[0].message.content;

      // 最終的なプロンプトを構成：統合指示のみ（分析結果は非表示）
      finalPrompt += `## デザイン方向\n\n${synthesisResult}`;
    } catch (error) {
      console.error('統合化処理エラー:', error.message);
      // エラー時は個別の分析結果をそのまま表示
      finalPrompt += `## 参考資料から学べること\n\n`;
      analysisPoints.forEach(point => {
        finalPrompt += `${point}\n\n`;
      });
    }
  } else if (analysisPoints.length === 1) {
    // 単一入力の場合は分析結果をそのまま表示
    finalPrompt += `## 分析結果\n\n${analysisPoints[0]}`;
  }

  res.json({ prompt: finalPrompt });
});

// 認証ステータス確認
app.get('/api/auth-status', (req, res) => {
  const isAuthenticated = !!req.session.pinterestToken;
  res.json({ isAuthenticated });
});

// =====================
// サーバー起動
// =====================
app.listen(PORT, () => {
  console.log(`Design Reference Tool サーバーが起動しました: http://localhost:${PORT}`);
  console.log('Pinterest API の統合準備完了！');
});
