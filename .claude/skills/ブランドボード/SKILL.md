# スキル定義：ブランドボード

## スキル名
**ブランドボード** - ヒアリングシートを読み込んでブランドボードHTMLを生成するスキル

## 目的
`hearing.md`（ヒアリングシート）を渡すだけで、OVERVIEWタブを持つブランドボードHTMLを自動生成する。
クライアント提案・社内共有・VI資料として使う。

---

## 起動時の動作

```
/ブランドボード [ヒアリングシートパス or ブランド名]

例：/ブランドボード CL/JHL/金の時/brief/hearing_kinnotoki.md
例：/ブランドボード ミヤマグラフィックス
```

ヒアリングシートがある場合 → それを読んでボードを生成。
ない場合 → AI側で仮値を生成してボードを作り、後から修正。

---

## ベースファイル（最新確定版）

- **ベースファイル：** `01_CRATER/_SERVICE/a curry/output/brand-board.html`（2026-04-28 確定版）
- 新しいブランドボードはこのファイルを元に、カラー・フォント・テキストをそのブランド用に作り直す
- ※ 旧ベース（金の時）は `CL/JHL/金の時/output/brand-board.html` に保存されている

---

## ブランドボードの構造（確定フォーマット）

### タブ構成（4タブ標準）
- **OVERVIEW** — ブランド全体サマリー（必須）
- **DESIGN SYSTEM** — カラー・タイポ・UI・Web（必須）
- **LOGO** — ロゴ規定・バリエーション（必須。ロゴ画像がなければSAMPLEオーバーレイで作る）
- **VISUAL** — KV・ビジュアルコンセプト・ビジュアルグリッド（必須。画像なければSAMPLEで作る）
- **PACKAGE** — パッケージがある案件のみ追加
- ※ LOGOとVISUALは素材がなくてもSAMPLEオーバーレイで必ず作る（後から画像差し替え）

### OVERVIEWタブの構成（セクション順）

```
BRAND NAME | ブランドネーム
  └─ ブランド名大表示 + GOLDEN MOMENTS等
  └─ [折りたたみ] NAMING STORY | ネーミングの由来

TAGLINE · CONCEPT COPY | タグライン・コンセプトコピー
  └─ タグライン大表示 + 解説文
  └─ [折りたたみ] BRAND STORY | ブランドストーリー

BRAND ATTRIBUTES | ブランドらしさ
  └─ 4つの特性カード（アイコン付き）

BRAND CODES | ブランドコード（独自資産）
  └─ Core Code 大カード（2カラム）
  └─ [折りたたみ] Other Codes | その他のブランドコード

Color System + Brand Voice（ミニカード）
```

---

## デザイン仕様（固定）

### カラー変数（案件ごとに上書き）
```css
--bg: #F5F2EC;        /* ベース背景 */
--bg2: #EDEAE2;       /* セカンダリ背景 */
--white: #FFFFFF;
--gold: #C9A84C;      /* プライマリ */
--gold-lt: #E8D5A3;
--gold-dk: #9A7B2E;
--pt: #B8B3A8;        /* プラチナ */
--pt-lt: #E4E0D8;
--ch: #2C2C2C;        /* チャコール */
--gray: #5C5956;
--gap: 20px;
```

### フォント
- 日本語：Noto Serif JP（weight: 400/500/600）
- 英語：EB Garamond
- サブ：Noto Sans JP（weight: 300/400）

### レスポンシブ
- max-width: 1440px、中央寄せ
- @media (max-width: 768px) で1カラム化
- タブナビは横スクロール対応

### 見出し（セクション外）
```html
<div class="section-heading">
  <span class="section-heading-text">BRAND NAME</span>
  <span class="section-heading-sep">|</span>
  <span class="section-heading-jp">ブランドネーム</span>
</div>
```

### 折りたたみ（アコーディオン）
```html
<details class="accordion accordion-light">
  <summary>
    <span class="accordion-label">NAMING STORY　|　ネーミングの由来</span>
    <span class="accordion-arrow">▾</span>
  </summary>
  <div class="accordion-body">...</div>
</details>
```

---

## ヒアリングシート

`brief/hearing.md`（空欄版）を案件フォルダのbriefに配置する。
記入済みは `brief/hearing_[ブランド名].md` として保存。

ヒアリングシートの構成：
1. 基本情報
2. ブランドの背景
3. ターゲット
4. 競合・ポジション
5. コアメッセージ
6. コアコード
7. ブランドの個性・トーン
8. ビジュアルイメージ
9. 補足
10. AI記入欄（自動生成）

---

## フロー

1. `hearing.md` を読み込む（or ブランド名だけ渡された場合はAIで仮生成）
2. AI記入欄を埋める（タグライン3案・ストーリー草案・アトリビュート・カラー提案）
3. OVERVIEWタブを生成・保存
4. スクリーンショットで確認 → 修正ループ
5. DESIGN SYSTEM・PACAGEタブは別途追加

---

## 出力先
`output/brand-board.html`（単一ファイル、CSS/JSインライン）

---

## 禁止事項
- 素材がなくても止まらない（仮値で作って後から修正）
- テキストだけで終わらない（必ずHTMLを出力）
- ヒアリングシートを無視して作らない
- max-widthなしで全画面幅にしない
- スマホ対応を省かない

---

---

## ブランドボード 修正ブリーフ

完成後に方向性がずれている場合、以下のフォーマットで一括修正指示を出す。
ユーザーが「修正ブリーフ」と言ったら、このテンプレートを提示してコピーして使ってもらう。

```
【修正ブリーフ】
- 全体トーン：（例：いまより重厚に / もっと軽やかに / 3割暗く）
- カラー：（例：背景をオフブラック#1a1a1aに / アクセントを青系に変更）
- フォント：（例：Cormorantをもっと大きく / 見出しをゴシックに）
- 参考URL：（例：https://clend.jp/ の雰囲気に近づけて）
- OVERVIEW：（例：Brand Voiceのテキストを「〇〇」に変更）
- DESIGN SYSTEM：（例：UIコンポーネントを減らしてシンプルに）
- LOGO：（例：バリエーションを白抜きのみにして）
- VISUAL：（例：ビジュアルコンセプトのToneを書き直して）
- その他：（自由記述）
```

**参考URLが渡された場合の動作：**
1. WebFetchでURLを取得し、デザインの雰囲気・カラー・タイポグラフィを分析する
2. 分析結果をもとにCSS変数・フォント・カード背景を一気に更新する
3. 「〇〇の雰囲気を参考に、以下を変更しました」と報告する

---

## 実績・改良記録
- 初版作成日：2026年4月27日
- v2（2026年4月27日）：金の時ブランドボードを元に構造確定。タブ・アコーディオン・セクション見出しパターンを定義。
- v3（2026年4月28日）：タブを4タブ標準化（OVERVIEW/DESIGN SYSTEM/LOGO/VISUAL）。ベースファイルをA CURRYに更新。修正ブリーフ方式を追加。
