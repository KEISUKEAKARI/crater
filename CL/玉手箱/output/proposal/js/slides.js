// 玉手箱 ブランド提案スライド — slides.js
// 1920×1080px固定 / 1スライド = 1関数

// SLIDE 01: 表紙 | cover
function slide01Cover() {
  return `<section class="slide" style="background:var(--c-black);" data-section="cover" data-notes="本日は玉手箱のブランドコンセプトをご提案させていただきます。">
    <div class="s-wrap">
      <div class="s-top"><span class="badge" style="background:rgba(200,168,75,0.2);color:var(--c-gold);">Brand Concept Proposal</span></div>
      <div class="s-main" style="align-items:flex-start; gap:2.5cqw;">
        <div class="t-label c-pt" style="letter-spacing:0.5em;">The Oju</div>
        <div class="t-h1 c-white" style="letter-spacing:0.2em; font-size:3.5cqw;">TAMATEBAKO</div>
        <div style="width:4cqw; height:1px; background:rgba(200,168,75,0.4);"></div>
        <div class="t-en c-pt" style="font-style:normal; letter-spacing:0.5em; font-size:1cqw;">2026</div>
      </div>
      <div class="s-copy" style="color:rgba(245,240,232,0.2);">©CRATER Inc. 2026</div>
    </div>
  </section>`;
}

// SLIDE 02: 問い | question
function slide02Question() {
  return `<section class="slide" data-section="question" data-notes="まず最初に、一つ問いかけさせてください。">
    <div class="accent-top"></div><div class="accent-bottom"></div>
    <div class="s-wrap">
      <div class="s-top"><span class="badge">A Question</span></div>
      <div class="s-main">
        <div class="t-display" style="color:var(--c-black);">特別をどう<br>届けるか。</div>
      </div>
      <div class="s-copy">©CRATER Inc. 2026</div>
    </div>
  </section>`;
}

// SLIDE 03: タグライン + ブランドストーリー | tagline-story
function slide03TaglineStory() {
  return `<section class="slide" style="background:var(--c-black);" data-section="tagline-story" data-notes="玉手箱の答えはシンプルです。">
    <div class="s-wrap" style="padding:0;">
      <div style="position:absolute; top:4.5cqw; left:5cqw; z-index:1;"><span class="badge" style="background:rgba(200,168,75,0.2);color:var(--c-gold);">Tagline / Brand Story</span></div>
      <div style="display:flex; width:100%; height:100%;">
        <!-- 左：タグライン -->
        <div style="flex:1; display:flex; flex-direction:column; justify-content:center; padding:8cqw 5cqw 6cqw;">
          <div class="t-label c-gold" style="margin-bottom:2.5cqw;">Tagline</div>
          <div class="t-h1 c-white" style="line-height:1.5;">重は、<br>特別を宿す。</div>
          <div class="t-en" style="color:var(--c-pt); margin-top:2cqw; font-size:1.1cqw;">The vessel holds the extraordinary.</div>
        </div>
        <!-- 右：ストーリー -->
        <div style="flex:1; display:flex; flex-direction:column; justify-content:center; padding:8cqw 5cqw 6cqw;">
          <div class="t-label c-gold" style="margin-bottom:2.5cqw;">Brand Story</div>
          <div style="font-family:'Noto Serif JP',serif; font-size:1.6cqw; font-weight:200; letter-spacing:0.08em; line-height:2.6; color:var(--c-white);">
            お重の器には、幾重の時間が重なっている。<br>
            開けるたびに記憶が宿り、<br>
            重ねるたびに歴史が刻まれる。<br>
            玉手箱は、そんな器に選び抜いた逸品を<br>
            入れてお届けしています。<br>
            この重から始まる物語を、感じてください。
          </div>
        </div>
      </div>
      <div class="s-copy" style="color:rgba(245,240,232,0.15);">©CRATER Inc. 2026</div>
    </div>
  </section>`;
}

// SLIDE 04: Brand Code | brandcode
function slide04BrandCode() {
  return `<section class="slide" data-section="brandcode" data-notes="玉手箱のブランドコードです。">
    <div class="accent-top"></div><div class="accent-bottom"></div>
    <div class="s-wrap">
      <div class="s-top"><span class="badge">Brand Code</span></div>
      <div class="s-main" style="gap:3cqw;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2.5cqw;">
          <!-- Core Code -->
          <div style="border:1px solid #d0d0d0; padding:3cqw;">
            <div class="t-label c-gold" style="margin-bottom:1.5cqw; font-weight:400;">Core Code</div>
            <div class="t-h2" style="color:var(--c-black); margin-bottom:1.5cqw; letter-spacing:0.1em;">逸品を、伝統で。</div>
            <div class="t-small" style="color:var(--c-black);">お重という伝統の形が、中の逸品をさらに格上げする。器の品格と逸品の価値が重なったとき、はじめて玉手箱になる。</div>
          </div>
          <!-- Other Codes -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5cqw;">
            <div style="border:1px solid #d0d0d0; padding:2cqw;">
              <div style="font-size:1.6cqw; margin-bottom:1cqw;">◎</div>
              <div class="t-small" style="font-weight:400; color:var(--c-black); margin-bottom:0.6cqw;">蓋を開ける瞬間</div>
              <div class="t-small" style="font-size:0.85cqw; color:var(--c-black);">受け取った人が蓋を開けるその一瞬。玉手箱はこの体験のためにすべてを設計する。</div>
            </div>
            <div style="border:1px solid #d0d0d0; padding:2cqw;">
              <div style="font-size:1.6cqw; margin-bottom:1cqw;">⬛</div>
              <div class="t-small" style="font-weight:400; color:var(--c-black); margin-bottom:0.6cqw;">漆黒×金×緋</div>
              <div class="t-small" style="font-size:0.85cqw; color:var(--c-black);">深い黒、金の輝き、緋のきわ。この三色が玉手箱の視覚的な顔になる。</div>
            </div>
            <div style="border:1px solid #d0d0d0; padding:2cqw;">
              <div style="font-size:1.6cqw; margin-bottom:1cqw;">✦</div>
              <div class="t-small" style="font-weight:400; color:var(--c-black); margin-bottom:0.6cqw;">選び抜く目利き</div>
              <div class="t-small" style="font-size:0.85cqw; color:var(--c-black);">何でもお重に入れるのではない。目利きで選んだ逸品だけを扱う姿勢が信頼になる。</div>
            </div>
            <div style="border:1px solid #d0d0d0; padding:2cqw;">
              <div style="font-size:1.6cqw; margin-bottom:1cqw;">⊡</div>
              <div class="t-small" style="font-weight:400; color:var(--c-black); margin-bottom:0.6cqw;">越境する和の美</div>
              <div class="t-small" style="font-size:0.85cqw; color:var(--c-black);">お重という形は、日本語がわからない人にも伝わる。海外展開を見据えた普遍的な日本美。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="s-copy">©CRATER Inc. 2026</div>
    </div>
  </section>`;
}

// SLIDE 05: Do's & Don'ts | dos
function slide05Dos() {
  return `<section class="slide" data-section="dos" data-notes="玉手箱のブランドが守るべき世界観の境界線です。">
    <div class="accent-top"></div><div class="accent-bottom"></div>
    <div class="s-wrap" style="padding:4.5cqw 5cqw 8cqw 5cqw;">
      <div class="s-top"><span class="badge">Brand Direction</span></div>
      <div class="s-main" style="flex-direction:row; gap:6cqw; align-items:stretch;">
        <!-- Do's -->
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:1cqw; margin-bottom:2.5cqw;">
            <div style="width:0.7cqw; height:0.7cqw; border-radius:50%; background:var(--c-gold);"></div>
            <div class="t-label c-gold" style="font-weight:400;">Do's</div>
            <div class="t-small" style="font-size:0.8cqw; color:var(--c-black);">やること</div>
          </div>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:1.4cqw;">
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>開ける瞬間の体験を最優先に設計する</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>器（お重）の品格を常に保つ</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>選び抜いたという文脈を伝える</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>余白・静けさをデザインに活かす</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>日本の伝統美を現代の感覚で表現する</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>自分へのご褒美用途も大切にする</li>
          </ul>
        </div>
        <!-- Don'ts -->
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:1cqw; margin-bottom:2.5cqw;">
            <div style="width:0.7cqw; height:0.7cqw; border-radius:50%; background:#999;"></div>
            <div class="t-label" style="color:#999; font-weight:400;">Don'ts</div>
            <div class="t-small" style="font-size:0.8cqw; color:var(--c-black);">やらないこと</div>
          </div>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:1.4cqw;">
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>賑やかすぎるビジュアル・POPな配色</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>安売り・数量限定の煽り文句</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>お重の格を下げるカジュアルな表現</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>情報を詰め込みすぎた窮屈なレイアウト</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>和のテイストを損なう洋風のコミュニケーション</li>
            <li class="t-small" style="padding-left:1.5cqw; position:relative; color:var(--c-black);">
              <span style="position:absolute;left:0;color:var(--c-pt);">—</span>「プレゼント」の文脈だけに偏る</li>
          </ul>
        </div>
      </div>
      <div class="s-copy">©CRATER Inc. 2026</div>
    </div>
  </section>`;
}

// SLIDE 06: ロゴ① どーん | logo-main
function slide06LogoMain() {
  return `<section class="slide" style="background:#fff;" data-section="logo-main" data-notes="玉手箱のロゴです。">
    <div style="position:absolute; top:4.5cqw; left:5cqw; z-index:1;"><span class="badge">Logo</span></div>
    <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; padding:8cqw;">
      <img src="../../brief/logo/03oju_logo-03.svg" style="width:100%; height:auto;" alt="玉手箱ロゴ">
    </div>
    <div class="s-copy" style="color:#aaa;">©CRATER Inc. 2026</div>
  </section>`;
}

// SLIDE 07: ロゴ② + コンセプト | logo-concept
function slide07LogoConcept() {
  return `<section class="slide" style="background:#fff;" data-section="logo-concept" data-notes="ロゴのコンセプトについてご説明します。">
    <div class="accent-top"></div><div class="accent-bottom"></div>
    <div class="s-wrap" style="padding:0;">
      <div style="position:absolute; top:4.5cqw; left:5cqw; z-index:1;"><span class="badge">Logo Concept</span></div>
      <div style="display:flex; width:100%; height:100%;">
        <!-- 左：ロゴ 大きめ -->
        <div style="flex:1.4; display:flex; align-items:center; justify-content:center; padding:4cqw 3cqw;">
          <img src="../../brief/logo/03oju_logo-05.svg" style="width:100%; height:auto;" alt="玉手箱ロゴ">
        </div>
        <!-- 右：コンセプト 左寄せ -->
        <div style="flex:0.6; display:flex; flex-direction:column; justify-content:center; padding:8cqw 4cqw 6cqw 2cqw; gap:2.2cqw;">
          <div style="display:flex; flex-direction:column; gap:2cqw;">
            <div style="border-left:3px solid var(--c-gold); padding-left:1.5cqw;">
              <div class="t-label c-gold" style="margin-bottom:0.6cqw; font-weight:400;">Mark</div>
              <div class="t-small" style="color:var(--c-black);">玉手箱そのもの、お重をイメージしたマーク。</div>
            </div>
            <div style="border-left:3px solid var(--c-gold); padding-left:1.5cqw;">
              <div class="t-label c-gold" style="margin-bottom:0.6cqw; font-weight:400;">Symbol</div>
              <div class="t-small" style="color:var(--c-black);">「玉」の字をシンボルに落とし込んでいる。</div>
            </div>
            <div style="border-left:3px solid var(--c-gold); padding-left:1.5cqw;">
              <div class="t-label c-gold" style="margin-bottom:0.6cqw; font-weight:400;">Hanko</div>
              <div class="t-small" style="color:var(--c-black);">落款に「手箱」と記し、マークと合わせて「玉手箱」として成立する構造。</div>
            </div>
            <div style="border-left:3px solid var(--c-gold); padding-left:1.5cqw;">
              <div class="t-label c-gold" style="margin-bottom:0.6cqw; font-weight:400;">Shoulder / English</div>
              <div class="t-small" style="color:var(--c-black);">ショルダー名は「御重屋」。英語は「The oju」。海外展開を見据えた国際表記。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="s-copy" style="color:#aaa;">©CRATER Inc. 2026</div>
    </div>
  </section>`;
}

// SLIDE 08: ロゴ③ バリエーション | logo-variation
function slide08LogoVariation() {
  return `<section class="slide" style="background:#fff;" data-section="logo-variation" data-notes="ロゴのバリエーションです。">
    <div style="position:absolute; top:4.5cqw; left:5cqw; z-index:1;"><span class="badge">Logo Variation</span></div>
    <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; padding:7cqw 6cqw 8cqw;">
      <img src="../../brief/logo/03oju_logo_アートボード 1.svg" style="max-width:100%; max-height:100%; width:auto; height:auto; display:block;" alt="玉手箱ロゴ バリエーション">
    </div>
    <div class="s-copy" style="color:#aaa;">©CRATER Inc. 2026</div>
  </section>`;
}

// SLIDE 09: デザインコンセプト | concept
function slide09Concept() {
  return `<section class="slide" style="background:var(--c-black);" data-section="concept" data-notes="デザインコンセプトは『箔と漆と重』。">
    <div class="accent-top red"></div><div class="accent-bottom red"></div>
    <div class="s-wrap">
      <div class="s-top"><span class="badge" style="background:rgba(200,168,75,0.2);color:var(--c-gold);">Design Concept</span></div>
      <div class="s-main" style="gap:4cqw;">
        <div class="t-h1 c-white" style="letter-spacing:0.2em;">箔と漆と重</div>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:4cqw; width:75cqw;">
          <div>
            <div class="t-label c-gold" style="margin-bottom:1.2cqw; font-weight:400;">Tone</div>
            <div class="t-small" style="color:var(--c-white); line-height:2.2;">漆黒の静謐と<br>金の輝き、緋のきわ。<br>和の格調。</div>
          </div>
          <div>
            <div class="t-label c-gold" style="margin-bottom:1.2cqw; font-weight:400;">Palette</div>
            <div class="t-small" style="color:var(--c-white); line-height:2.2;">深い黒をベースに<br>ゴールドをアクセント。<br>ベージュで柔らかさ、<br>緋色で要所を締める。</div>
          </div>
          <div>
            <div class="t-label c-gold" style="margin-bottom:1.2cqw; font-weight:400;">Direction</div>
            <div class="t-small" style="color:var(--c-white); line-height:2.2;">余白を活かした<br>静的な構成。<br>情報より体験を<br>優先する設計。</div>
          </div>
        </div>
      </div>
      <div class="s-copy" style="color:rgba(245,240,232,0.15);">©CRATER Inc. 2026</div>
    </div>
  </section>`;
}

// SLIDE 10: KV | kv
function slide10KV() {
  return `<section class="slide" data-section="kv" data-notes="ビジュアルの方向性です。">
    <div style="position:absolute; top:4.5cqw; left:5cqw; z-index:1;"><span class="badge" style="background:rgba(200,168,75,0.2);color:var(--c-gold);">Key Visual Image</span></div>
    <div style="position:relative; width:100%; height:100%; overflow:hidden;">
      <img src="../../brief/AdobeStock_680912265.png" style="width:100%; height:100%; object-fit:cover; object-position:center 20%;" alt="Key Visual">
      <div style="position:absolute; inset:0; background:linear-gradient(to right, rgba(13,13,13,0.72) 45%, transparent); display:flex; flex-direction:column; justify-content:center; padding:7cqw; gap:2.5cqw;">
        <div class="t-h1 c-white" style="font-weight:200; letter-spacing:0.15em; margin-top:4cqw;">重は、特別を宿す。</div>
        <div class="t-en" style="color:rgba(245,240,232,0.5);">The vessel holds the extraordinary.</div>
      </div>
    </div>
    <div class="s-copy" style="color:rgba(245,240,232,0.2); z-index:1;">©CRATER Inc. 2026</div>
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
  { id: 'kv',             label: 'Key Visual Image' },
];
