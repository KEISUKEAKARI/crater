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
  return `<section class="slide bg-white" data-section="question" data-notes="まず最初に、一つ問いかけさせてください。特別をどう届けるか。花束でも、高級品でも、気持ちは込めている。でも、受け取った瞬間の感動が設計されているものは、意外と少ない。次のスライドで、その答えをお伝えします。">
    <div class="accent-line-top"></div>
    <div class="statement-wrap">
      <div class="statement-kicker">A Question</div>
      <div class="statement-main">特別をどう<br>届けるか。</div>
    </div>
  </section>`;
}

// SLIDE 03: タグライン + ブランドストーリー | F1+F7 | tagline-story
function slide03TaglineStory() {
  return `<section class="slide bg-black" data-section="tagline-story" data-notes="玉手箱の答えはシンプルです。重は、特別を宿す。お重の器には、幾重もの時間が重なっています。開けるたびに記憶が宿り、重ねるたびに歴史が刻まれる。玉手箱は、そんな器に選び抜いた逸品を入れてお届けするブランドです。">
    <div class="slide-content" style="flex-direction:row; gap:0; padding:0; justify-content:stretch; align-items:stretch;">
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; padding:0 6cqw; border-right:1px solid rgba(200,168,75,0.15);">
        <div class="slide-label c-gold" style="margin-bottom:2cqh;">Tagline</div>
        <div class="statement-main light" style="font-size:3.8cqw;">重は、<br>特別を宿す。</div>
        <div class="slide-en" style="color:var(--c-pt); margin-top:2cqh; font-size:1.1cqw;">The vessel holds the extraordinary.</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; padding:0 6cqw;">
        <div class="slide-label c-gold" style="margin-bottom:2cqh;">Brand Story</div>
        <div style="font-family:'Noto Serif JP',serif; font-size:1.5cqw; font-weight:200; letter-spacing:0.1em; line-height:2.6; color:var(--c-white);">
          お重の器には、幾重の時間が重なっている。<br>
          開けるたびに記憶が宿り、<br>重ねるたびに歴史が刻まれる。<br>
          玉手箱は、そんな器に選び抜いた逸品を<br>入れてお届けしています。<br>
          この重から始まる物語を、感じてください。
        </div>
      </div>
    </div>
  </section>`;
}

// SLIDE 04: Brand Code | F2 | brandcode
function slide04BrandCode() {
  return `<section class="slide bg-white" data-section="brandcode" data-notes="玉手箱のブランドコードです。コアコードは『逸品を、伝統で。』お重という伝統の形が中の逸品を格上げする。その他にも4つのブランドコードがあり、蓋を開ける瞬間・漆黒と金と緋・選び抜く目利き・越境する和の美、これらがブランドの独自資産になります。">
    <div class="accent-line-top"></div>
    <div class="slide-content" style="justify-content:center; gap:3cqh;">
      <div class="slide-label c-pt">Brand Code</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:3cqw; align-items:start;">
        <!-- Core Code -->
        <div style="border:1px solid #e0e0e0; padding:3cqw;">
          <div class="slide-label" style="color:var(--c-gold); margin-bottom:1.5cqh;">Core Code</div>
          <div style="font-size:2.8cqw; font-weight:200; letter-spacing:0.1em; color:var(--c-black); line-height:1.4; margin-bottom:1.5cqh;">逸品を、伝統で。</div>
          <div class="slide-body" style="color:var(--c-pt);">お重という伝統の形が、中の逸品をさらに格上げする。器の品格と逸品の価値が重なったとき、はじめて玉手箱になる。</div>
        </div>

        <!-- Other Codes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5cqw;">
          <div style="border:1px solid #e0e0e0; padding:2cqw;">
            <div style="font-size:1.5cqw; margin-bottom:0.8cqh;">◎</div>
            <div class="slide-body" style="font-weight:400; color:var(--c-black);">蓋を開ける瞬間</div>
          </div>
          <div style="border:1px solid #e0e0e0; padding:2cqw;">
            <div style="font-size:1.5cqw; margin-bottom:0.8cqh;">⬛</div>
            <div class="slide-body" style="font-weight:400; color:var(--c-black);">漆黒×金×緋</div>
          </div>
          <div style="border:1px solid #e0e0e0; padding:2cqw;">
            <div style="font-size:1.5cqw; margin-bottom:0.8cqh;">✦</div>
            <div class="slide-body" style="font-weight:400; color:var(--c-black);">選び抜く目利き</div>
          </div>
          <div style="border:1px solid #e0e0e0; padding:2cqw;">
            <div style="font-size:1.5cqw; margin-bottom:0.8cqh;">⊡</div>
            <div class="slide-body" style="font-weight:400; color:var(--c-black);">越境する和の美</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// SLIDE 05: Do's & Don'ts | F3 | dos
function slide05Dos() {
  return `<section class="slide bg-white" data-section="dos" data-notes="玉手箱のブランドが守るべき世界観の境界線です。左が大切にすること、右がやらないこと。特に大事なのはお重の格を下げないこと。賑やかすぎるビジュアルや安売り感は、このブランドが最も避けるべき表現です。">
    <div class="accent-line-top"></div>
    <div class="slide-content" style="justify-content:center;">
      <div class="slide-label c-pt" style="margin-bottom:2.5cqh;">Brand Direction</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:4cqw;">
        <div>
          <div class="dos-col-title c-gold" style="display:flex; align-items:center; gap:1cqw; margin-bottom:2cqh;">
            <div class="dos-dot" style="background:var(--c-gold);"></div>
            Do's <span style="font-family:'Noto Sans JP',sans-serif; font-size:0.7cqw; opacity:0.5; margin-left:0.5cqw;">やること</span>
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
        <div style="border-left:1px solid #e0e0e0; padding-left:4cqw;">
          <div class="dos-col-title" style="display:flex; align-items:center; gap:1cqw; margin-bottom:2cqh; color:var(--c-pt);">
            <div class="dos-dot" style="background:var(--c-pt);"></div>
            Don'ts <span style="font-family:'Noto Sans JP',sans-serif; font-size:0.7cqw; opacity:0.5; margin-left:0.5cqw;">やらないこと</span>
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

// SLIDE 06: ロゴ① どーん | F5 | logo-main
function slide06LogoMain() {
  return `<section class="slide" style="background:#fff;" data-section="logo-main" data-notes="玉手箱のロゴです。お重をイメージしたマーク、玉の字をシンボルに落款で手箱と記す構造。御重屋という屋号のもと、このロゴがブランドの顔になります。">
    <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; padding:8cqw;">
      <img src="../../brief/logo/03oju_logo-03.svg" style="width:100%; height:auto;" alt="玉手箱ロゴ">
    </div>
  </section>`;
}

// SLIDE 07: ロゴ② + コンセプト | F2 | logo-concept
function slide07LogoConcept() {
  return `<section class="slide bg-white" data-section="logo-concept" data-notes="ロゴのコンセプトについてご説明します。マークは玉手箱そのもの、お重をイメージ。玉の字をシンボルに、落款に手箱と記して玉手箱として成立する構造になっています。ショルダー名は御重屋、英語はThe oju。海外展開も見据えた国際表記を用意しています。">
    <div class="accent-line-top"></div>
    <div class="slide-content" style="flex-direction:row; gap:0; padding:0; align-items:stretch;">
      <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:5cqw; border-right:1px solid #e0e0e0;">
        <img src="../../brief/logo/03oju_logo-03.svg" style="width:100%; height:auto;" alt="玉手箱ロゴ">
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; padding:5cqw; gap:2.5cqh;">
        <div class="slide-label c-pt">Logo Concept</div>
        <div style="display:flex; flex-direction:column; gap:2cqh;">
          <div style="border-left:2px solid var(--c-gold); padding-left:1.5cqw;">
            <div class="slide-label" style="color:var(--c-gold); margin-bottom:0.6cqh;">Mark</div>
            <div class="slide-body">玉手箱そのもの、お重をイメージしたマーク。「玉」の字をシンボルに落とし込んでいる。</div>
          </div>
          <div style="border-left:2px solid var(--c-gold); padding-left:1.5cqw;">
            <div class="slide-label" style="color:var(--c-gold); margin-bottom:0.6cqh;">Hanko</div>
            <div class="slide-body">落款に「手箱」と記し、マークと合わせて「玉手箱」として成立する構造。</div>
          </div>
          <div style="border-left:2px solid var(--c-gold); padding-left:1.5cqw;">
            <div class="slide-label" style="color:var(--c-gold); margin-bottom:0.6cqh;">Shoulder</div>
            <div class="slide-body">ショルダー名は「御重屋」。英語は「The oju」。海外展開を見据えた国際表記。</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// SLIDE 08: ロゴ③ バリエーション | F5 | logo-variation
function slide08LogoVariation() {
  return `<section class="slide bg-white" data-section="logo-variation" data-notes="ロゴのバリエーションです。日本語版・英語版、黒背景・白背景の展開を用意しています。どの場面でも玉手箱らしさを維持できる設計になっています。">
    <div class="accent-line-top"></div>
    <div style="display:grid; grid-template-columns:1fr 1fr; height:100%;">
      <div style="display:flex; align-items:center; justify-content:center; padding:5cqw; border-right:1px solid #e0e0e0; border-bottom:1px solid #e0e0e0;">
        <img src="../../brief/logo/03oju_logo-03.svg" style="width:100%; height:auto;" alt="日本語版">
      </div>
      <div style="display:flex; align-items:center; justify-content:center; padding:5cqw; border-bottom:1px solid #e0e0e0;">
        <img src="../../brief/logo/03oju_logo-04.svg" style="width:100%; height:auto;" alt="英語版">
      </div>
      <div style="display:flex; align-items:center; justify-content:center; padding:5cqw; background:var(--c-black); border-right:1px solid #333;">
        <img src="../../brief/logo/03oju_logo-03.svg" style="width:100%; height:auto;" alt="黒背景 日本語版">
      </div>
      <div style="display:flex; align-items:center; justify-content:center; padding:5cqw; background:var(--c-black);">
        <img src="../../brief/logo/logoshiro.svg" style="width:60%; height:auto;" alt="黒背景 英語版">
      </div>
    </div>
  </section>`;
}

// SLIDE 09: デザインコンセプト | F8 | concept
function slide09Concept() {
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

// SLIDE 10: KV | F5 | kv
function slide10KV() {
  return `<section class="slide" data-section="kv" data-notes="ビジュアルの方向性です。漆黒の背景に、お重箱が主役。蓋を開ける瞬間・半開きの構図で、中の逸品が輝く。光源を絞ったスポット的な照明、余白を多くとった構図で、和の静寂と格調を表現します。この世界観を軸に、すべてのビジュアルを展開していきます。">
    <div class="kv-wrap">
      <img src="../../brief/AdobeStock_680912265.png" alt="Key Visual">
      <div class="kv-overlay">
        <div class="slide-label" style="color:rgba(200,168,75,0.7); letter-spacing:0.5em;">Key Visual</div>
        <div class="slide-h2 c-white" style="font-weight:200; letter-spacing:0.15em;">重は、特別を宿す。</div>
        <div class="slide-en" style="color:rgba(245,240,232,0.5);">The vessel holds the extraordinary.</div>
      </div>
    </div>
  </section>`;
}

window.slideFactories = [
  slide01Cover,
  slide02Question,
  slide03TaglineStory,
  slide04BrandCode,
  slide05Dos,
  slide06LogoMain,
  slide07LogoConcept,
  slide08LogoVariation,
  slide09Concept,
  slide10KV,
];

window.agendaItems = [
  { id: 'cover',          label: '表紙' },
  { id: 'question',       label: '問い' },
  { id: 'tagline-story',  label: 'タグライン / ストーリー' },
  { id: 'brandcode',      label: 'Brand Code' },
  { id: 'dos',            label: "Do's & Don'ts" },
  { id: 'logo-main',      label: 'ロゴ' },
  { id: 'logo-concept',   label: 'ロゴ コンセプト' },
  { id: 'logo-variation', label: 'ロゴ バリエーション' },
  { id: 'concept',        label: 'デザインコンセプト' },
  { id: 'kv',             label: 'Key Visual' },
];
