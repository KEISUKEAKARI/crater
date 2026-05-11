// 玉手箱 ブランド提案スライド

// SLIDE 01: 表紙 | F5 | cover
function slide01Cover() {
  return `<section class="slide bg-black" data-section="cover" data-notes="本日は玉手箱のブランドコンセプトをご提案させていただきます。お重という日本の伝統的な器に、選び抜いた逸品を入れてお届けするというコンセプトです。ブランドの世界観から、デザインの方向性まで順番にご覧いただきます。">
    <div class="cover-wrap">
      <img src="../../brief/logo/logoshiro.svg" class="cover-logo" alt="玉手箱">
      <div class="cover-divider"></div>
      <div class="cover-subtitle">Brand Concept Proposal</div>
      <div class="cover-date">2026</div>
    </div>
  </section>`;
}

// SLIDE 02: 問い | F1 | question
function slide02Question() {
  return `<section class="slide bg-white" data-section="question" data-notes="まず最初に、一つ問いかけさせてください。特別なものを贈りたいとき、あなたはどう届けますか。花束でも、高級品でも、気持ちは込めている。でも、受け取った瞬間の『感動』が設計されているものは、意外と少ない。次のスライドで、その答えをお伝えします。">
    <div class="accent-line-top"></div>
    <div class="statement-wrap">
      <div class="statement-kicker">A Question</div>
      <div class="statement-main">特別を、<br>どう届けますか。</div>
    </div>
  </section>`;
}

// SLIDE 03: タグライン | F1 | tagline
function slide03Tagline() {
  return `<section class="slide bg-black" data-section="tagline" data-notes="玉手箱の答えはシンプルです。重は、特別を宿す。お重という器には、日本の時間が重なっています。ハレの日に使われ、記憶を封じ込めてきた形。その器に逸品を入れることで、ただの『もの』が特別な体験になる。">
    <div class="statement-wrap">
      <div class="statement-kicker c-gold">Tagline</div>
      <div class="statement-main light">重は、<br>特別を宿す。</div>
      <div class="statement-sub">The vessel holds the extraordinary.</div>
    </div>
  </section>`;
}

// SLIDE 04: ブランドストーリー | F7 | story
function slide04Story() {
  return `<section class="slide bg-white" data-section="story" data-notes="お重の器には、幾重もの時間が重なっています。開けるたびに記憶が宿り、重ねるたびに歴史が刻まれる。玉手箱は、そんな器に選び抜いた逸品を入れてお届けするブランドです。この重から始まる物語を、ともに作っていきたいと考えています。">
    <div class="accent-line-top"></div>
    <div class="story-wrap">
      <div class="story-tagline">Brand Story</div>
      <div class="story-body">
        お重の器には、幾重の時間が重なっている。<br>
        開けるたびに記憶が宿り、重ねるたびに歴史が刻まれる。<br>
        玉手箱は、そんな器に選び抜いた逸品を入れてお届けしています。<br>
        この重から始まる物語を、感じてください。
      </div>
    </div>
  </section>`;
}

// SLIDE 05: Core Code | F1 | corecode
function slide05CoreCode() {
  return `<section class="slide bg-black" data-section="corecode" data-notes="玉手箱のブランドコアを一言で表すとすれば、これです。逸品を、伝統で。お重という伝統の形が、中の逸品をさらに格上げする。器の品格と逸品の価値が重なったとき、はじめて玉手箱になる。伝統は装飾ではなく、逸品に意味を与える文脈そのものです。">
    <div class="statement-wrap">
      <div class="statement-kicker c-gold">Core Code</div>
      <div class="statement-main light">逸品を、<br>伝統で。</div>
    </div>
  </section>`;
}

// SLIDE 06: Do's & Don'ts | F3 | dos
function slide06Dos() {
  return `<section class="slide bg-white" data-section="dos" data-notes="玉手箱のブランドが守るべき世界観の境界線です。左が大切にすること、右がやらないこと。特に大事なのは『お重の格を下げない』こと。賑やかすぎるビジュアルや安売り感は、このブランドが最も避けるべき表現です。">
    <div class="accent-line-top"></div>
    <div class="slide-content" style="padding-top:4cqh;">
      <div class="slide-label c-pt" style="margin-bottom:2cqh;">Brand Direction</div>
      <div class="dos-wrap" style="padding:0;">
        <div class="dos-col">
          <div class="dos-col-title c-gold">
            <div class="dos-dot" style="background:var(--c-gold);"></div>
            Do's <span style="font-family:'Noto Sans JP',sans-serif;font-size:0.7cqw;opacity:0.5;margin-left:0.5cqw;">やること</span>
          </div>
          <ul class="dos-list">
            <li>開ける瞬間の体験を最優先に設計する</li>
            <li>器（お重）の品格を常に保つ</li>
            <li>選び抜いたという文脈を伝える</li>
            <li>余白・静けさをデザインに活かす</li>
            <li>日本の伝統美を現代の感覚で表現する</li>
            <li>自分へのご褒美用途も大切にする</li>
          </ul>
        </div>
        <div class="dos-col" style="border-left:1px solid #e0e0e0; padding-left:4cqw;">
          <div class="dos-col-title" style="color:var(--c-pt);">
            <div class="dos-dot" style="background:var(--c-pt);"></div>
            Don'ts <span style="font-family:'Noto Sans JP',sans-serif;font-size:0.7cqw;opacity:0.5;margin-left:0.5cqw;">やらないこと</span>
          </div>
          <ul class="dos-list">
            <li>賑やかすぎるビジュアル・POPな配色</li>
            <li>安売り・数量限定の煽り文句</li>
            <li>お重の格を下げるカジュアルな表現</li>
            <li>情報を詰め込みすぎた窮屈なレイアウト</li>
            <li>和のテイストを損なう洋風のコミュニケーション</li>
            <li>「プレゼント」の文脈だけに偏る</li>
          </ul>
        </div>
      </div>
    </div>
  </section>`;
}

// SLIDE 07: デザインコンセプト | F8 | concept
function slide07Concept() {
  return `<section class="slide bg-black" data-section="concept" data-notes="デザインコンセプトは『箔と漆と重』。金箔の輝き、漆の深み、お重の格。この3つの要素がビジュアルシステムのすべてを決めています。黒をベースに金と緋色をアクセントに使い、ベージュで柔らかさを添える。余白を語らせる、静的で格調ある構成です。">
    <div class="accent-line-top red"></div>
    <div class="concept-wrap">
      <div class="slide-label c-gold" style="letter-spacing:0.5em;">Design Concept</div>
      <div class="concept-name">箔と漆と重</div>
      <div class="concept-grid">
        <div class="concept-item">
          <div class="concept-item-label">Tone</div>
          <div class="concept-item-text">漆黒の静謐と<br>金の輝き、緋のきわ。<br>和の格調。</div>
        </div>
        <div class="concept-item">
          <div class="concept-item-label">Palette</div>
          <div class="concept-item-text">深い黒をベースに<br>ゴールドをアクセント。<br>ベージュで柔らかさを添え、<br>緋色で要所を締める。</div>
        </div>
        <div class="concept-item">
          <div class="concept-item-label">Direction</div>
          <div class="concept-item-text">余白を活かした<br>静的な構成。<br>情報より体験を優先する設計。</div>
        </div>
      </div>
    </div>
  </section>`;
}

// SLIDE 08: ロゴ展開 | F5 | logo
function slide08Logo() {
  return `<section class="slide" data-section="logo" data-notes="ロゴは『玉』の字をシンボルに、落款に『手箱』と記して『玉手箱』として成立する構造になっています。ショルダー名は御重屋、英語表記はThe oju。日本語版と英語版の2バリエーションを用意しています。">
    <div class="logo-wrap">
      <div class="logo-panel" style="background:#fff; border-right:1px solid #e0e0e0;">
        <img src="../../brief/logo/03oju_logo-03.svg" alt="玉手箱 日本語ロゴ">
      </div>
      <div class="logo-panel" style="background:#fff;">
        <img src="../../brief/logo/03oju_logo-04.svg" alt="玉手箱 英語ロゴ">
      </div>
    </div>
    <div class="accent-line-top"></div>
  </section>`;
}

// SLIDE 09: KV | F5 | kv
function slide09KV() {
  return `<section class="slide" data-section="kv" data-notes="ビジュアルの方向性です。漆黒の背景に、お重箱が主役。蓋を開ける瞬間・半開きの構図で、中の逸品が輝く。光源を絞ったスポット的な照明、余白を多くとった構図で、和の静寂と格調を表現します。この世界観を軸に、すべてのビジュアルを展開していきます。">
    <div class="kv-wrap">
      <img src="../../brief/AdobeStock_680912265.png" alt="Key Visual">
      <div class="kv-overlay">
        <div class="slide-label" style="color:rgba(200,168,75,0.7);letter-spacing:0.5em;">Key Visual</div>
        <div class="slide-h2 c-white" style="font-weight:200;letter-spacing:0.15em;">重は、特別を宿す。</div>
        <div class="slide-en" style="color:rgba(245,240,232,0.5);">The vessel holds the extraordinary.</div>
      </div>
    </div>
  </section>`;
}

window.slideFactories = [
  slide01Cover,
  slide02Question,
  slide03Tagline,
  slide04Story,
  slide05CoreCode,
  slide06Dos,
  slide07Concept,
  slide08Logo,
  slide09KV,
];

window.agendaItems = [
  { id: 'cover',    label: '表紙' },
  { id: 'question', label: '問い' },
  { id: 'tagline',  label: 'タグライン' },
  { id: 'story',    label: 'ブランドストーリー' },
  { id: 'corecode', label: 'Core Code' },
  { id: 'dos',      label: "Do's & Don'ts" },
  { id: 'concept',  label: 'デザインコンセプト' },
  { id: 'logo',     label: 'ロゴ展開' },
  { id: 'kv',       label: 'Key Visual' },
];
