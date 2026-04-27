// =============================================
// ブランドボード ヒアリングフォーム 自動生成スクリプト（完全版）
// 使い方：
//   1. https://script.google.com にアクセス
//   2. 「新しいプロジェクト」を作成
//   3. このコードを全てコピー＆ペースト（myFunctionは削除）
//   4. 関数を createHearingForm に切り替えて「実行」
//   5. 権限を許可する
//   6. 実行ログにフォームのURLが表示される
// =============================================

function createHearingForm() {
  var form = FormApp.create('ブランドボード ヒアリングシート');
  form.setDescription(
    'ブランドボード制作に必要な情報をお聞かせください。\n' +
    'まだ決まっていない項目は「未定」「なし」でも構いません。\n' +
    'ご回答は設計・デザインの参考にのみ使用します。'
  );
  form.setProgressBar(true);
  form.setIsQuiz(false);

  // =============================================
  // セクション 01：基本情報
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('01 基本情報');

  form.addTextItem()
    .setTitle('会社名・屋号')
    .setRequired(true);

  form.addTextItem()
    .setTitle('担当者名')
    .setRequired(true);

  form.addTextItem()
    .setTitle('メールアドレス')
    .setRequired(false);

  form.addTextItem()
    .setTitle('ブランド名（日本語）')
    .setHelpText('まだ決まっていない場合は「未定」とご記入ください。')
    .setRequired(true);

  form.addTextItem()
    .setTitle('ブランド名（英語）')
    .setHelpText('ある場合のみ')
    .setRequired(false);

  form.addTextItem()
    .setTitle('読み方・ルビ')
    .setRequired(false);

  form.addTextItem()
    .setTitle('業種・カテゴリ')
    .setHelpText('例：健康食品、アパレル、飲食、BtoB、コンサルティング など')
    .setRequired(true);

  form.addTextItem()
    .setTitle('会社・ブランドのWebサイトURL')
    .setHelpText('既存サイトがあればご記入ください')
    .setRequired(false);

  form.addTextItem()
    .setTitle('SNSアカウント')
    .setHelpText('Instagram・X・FacebookなどのURLやID')
    .setRequired(false);

  // =============================================
  // セクション 02：事業・サービス概要
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('02 事業・サービス概要')
    .setHelpText('何をしている会社・ブランドかを教えてください。');

  form.addParagraphTextItem()
    .setTitle('提供しているサービス・製品の概要')
    .setHelpText('何を・誰に・どのように提供しているか。')
    .setRequired(true);

  form.addTextItem()
    .setTitle('主力商品・サービス名')
    .setRequired(false);

  form.addTextItem()
    .setTitle('価格帯')
    .setHelpText('例：3,000〜5,000円、月額9,800円、50万円〜 など')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('販売・提供チャネル（複数選択可）')
    .setChoiceValues([
      '自社ECサイト',
      'Amazon・楽天などモール',
      '実店舗',
      'BtoB直販・法人向け',
      'SNS販売',
      '越境EC（海外向け）',
      'その他'
    ])
    .setRequired(false);

  form.addTextItem()
    .setTitle('事業の規模感・現在のフェーズ')
    .setHelpText('例：創業1年・従業員5名、全国展開中、スタートアップ など')
    .setRequired(false);

  // =============================================
  // セクション 03：既存の理念・哲学
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('03 既存の理念・哲学')
    .setHelpText('すでに定義しているものがあればそのままご記入ください。なければ「なし」でOKです。');

  form.addParagraphTextItem()
    .setTitle('ミッション（使命・存在意義）')
    .setHelpText('例：〇〇を通じて、社会に△△を届ける。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('ビジョン（目指す姿・未来像）')
    .setHelpText('例：10年後に〇〇な世界をつくる。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('バリュー（大切にしている価値観・行動指針）')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('既存のブランドコンセプト・スローガン・キャッチコピー')
    .setHelpText('すでに使っているものがあればそのままご記入ください。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('創業・立ち上げの原体験・想い')
    .setHelpText('なぜこの事業を始めたのか。')
    .setRequired(false);

  // =============================================
  // セクション 04：ブランドの背景・目的
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('04 ブランドの背景・目的')
    .setHelpText('今回ブランディングをする理由を教えてください。');

  form.addCheckboxItem()
    .setTitle('今回のブランディングの目的（複数選択可）')
    .setChoiceValues([
      '新規ブランドの立ち上げ',
      '既存ブランドのリニューアル',
      '認知拡大・集客',
      '採用強化',
      '価格帯の引き上げ',
      '海外展開',
      'ギフト・プレゼント需要の獲得',
      'その他'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('なぜ今、このブランディングをするのか？')
    .setHelpText('背景・きっかけ・経緯をお聞かせください。')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('今、何が課題・問題になっているか？')
    .setHelpText('既存ブランドの問題点、業界課題など。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('このブランディングで最終的に何を実現したいか？')
    .setRequired(true);

  // =============================================
  // セクション 05：ターゲット
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('05 ターゲット');

  form.addParagraphTextItem()
    .setTitle('メインターゲット')
    .setHelpText('年齢・性別・職業・ライフスタイル・価値観など、できるだけ具体的に。')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('サブターゲット・将来的に狙いたい層')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('ターゲットはどんな状況・文脈でこのブランドに出会うか？')
    .setHelpText('例：ECサイト、ギフトとして、SNS広告、口コミ など')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('ターゲットが今、何に困っているか・何を求めているか？')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('ターゲットが「このブランドを選ぶ理由」は何か？')
    .setRequired(false);

  // =============================================
  // セクション 06：競合・ポジション
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('06 競合・ポジション');

  form.addParagraphTextItem()
    .setTitle('主な競合・似たブランド')
    .setHelpText('会社名・ブランド名・URLなど')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('競合と比べて、何が一番違うか？')
    .setHelpText('素材・産地・製法・哲学・人物など、独自の強みをご記入ください。')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('このブランドが勝てる土俵は？')
    .setHelpText('どの切り口で戦うか。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('業界の中でどのポジションを目指したいか？')
    .setHelpText('例：高単価・高品質路線、親しみやすい大衆路線、ニッチ専門特化 など')
    .setRequired(false);

  // =============================================
  // セクション 07：コアコード（独自資産）
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('07 コアコード（独自資産）')
    .setHelpText('このブランドだけが持っている「記号」を特定します。');

  form.addParagraphTextItem()
    .setTitle('このブランドだけが持っている、絶対に外せない特徴')
    .setHelpText('素材・産地・製法・人物・技術・歴史など、替えの効かないもの。')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('なぜそれは他にはないのか？')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('それを失ったら、このブランドでなくなるものは？')
    .setRequired(false);

  // =============================================
  // セクション 08：コアメッセージ
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('08 コアメッセージ');

  form.addTextItem()
    .setTitle('このブランドを一言で言うと？')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('ユーザーにどんな感情・印象を持ってほしいか？')
    .setHelpText('例：上質・信頼・前向き・安心・ワクワク など')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('このブランドを使った後、ユーザーにどうなってほしいか？')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('このブランドが社会に対して果たしたい役割')
    .setRequired(false);

  // =============================================
  // セクション 09：ブランドの個性・トーン
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('09 ブランドの個性・トーン');

  form.addParagraphTextItem()
    .setTitle('このブランドが「人」だったら？')
    .setHelpText('例：落ち着いた品のある60代、快活な30代の女性 など')
    .setRequired(false);

  form.addTextItem()
    .setTitle('どんな話し方・文体？')
    .setHelpText('例：主張しすぎない・丁寧・力強い・フランク など')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('絶対に言わないこと・やらないこと')
    .setHelpText('禁止ワード・禁止表現・NGな方向性など')
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('ブランドの雰囲気（近いものを選んでください・複数可）')
    .setChoiceValues([
      'ラグジュアリー・高級',
      'ナチュラル・オーガニック',
      'モダン・スタイリッシュ',
      'クラシック・伝統的',
      'ポップ・カジュアル',
      'ミニマル・シンプル',
      'エネルギッシュ・力強い',
      'やさしい・温かい',
      'プロフェッショナル・信頼感',
      'クリエイティブ・個性的'
    ])
    .setRequired(false);

  // =============================================
  // セクション 10：ビジュアルイメージ
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('10 ビジュアルイメージ');

  form.addParagraphTextItem()
    .setTitle('色のイメージ')
    .setHelpText('例：ゴールド×オフホワイト、深い紺×白、アースカラー など')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('雰囲気キーワード')
    .setHelpText('例：静謐・伝統・輝き・準備・自然・力強さ など')
    .setRequired(false);

  form.addTextItem()
    .setTitle('参考ブランド・参考URL')
    .setHelpText('「こういう雰囲気に近い」というブランドやWebサイトがあれば。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('避けたいビジュアル・デザイン')
    .setRequired(false);

  // =============================================
  // セクション 11：既存の制作物・資産
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('11 既存の制作物・資産')
    .setHelpText('すでにあるものを教えてください。ないものは空欄でOKです。');

  form.addCheckboxItem()
    .setTitle('すでにあるもの（複数選択可）')
    .setChoiceValues([
      'ロゴ',
      'ブランドカラー・カラーパレット',
      'フォント・タイポグラフィ',
      'Webサイト',
      'パッケージデザイン',
      'カタログ・パンフレット',
      'ブランドガイドライン',
      'SNSアカウント・投稿素材',
      'なし（全て新規）'
    ])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('既存制作物で残したいもの・変えたくないもの')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('既存制作物で変えたいもの・課題に感じているもの')
    .setRequired(false);

  // =============================================
  // セクション 12：納期・予算・その他
  // =============================================
  form.addSectionHeaderItem()
    .setTitle('12 納期・予算・その他');

  form.addTextItem()
    .setTitle('希望納期・スケジュール')
    .setHelpText('例：2ヶ月以内、○月末まで、急ぎではない など')
    .setRequired(false);

  form.addTextItem()
    .setTitle('予算感')
    .setHelpText('おおよそで構いません。例：30万〜50万円程度 など')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('特記事項・制約条件')
    .setHelpText('例：薬機法の制約、海外展開前提、既存ガイドラインあり など')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('まだ決まっていないこと')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('その他、自由にお書きください')
    .setRequired(false);

  // ---- 完了メッセージ ----
  form.setConfirmationMessage(
    'ご回答ありがとうございます。\n内容を確認の上、ご連絡いたします。\n\n株式会社クレーター'
  );

  // ---- URLをログに出力 ----
  Logger.log('✅ フォーム作成完了！');
  Logger.log('📝 編集URL：' + form.getEditUrl());
  Logger.log('🔗 回答URL（クライアントに送るURL）：' + form.getPublishedUrl());
}
