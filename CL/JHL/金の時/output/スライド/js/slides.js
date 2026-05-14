window.slideFactories = [];

// ─── スライド1: オープニング ───
window.slideFactories[0] = () => `
<div class="slide active" id="s1">
  <div class="s1-glow"></div>
  <div class="s1-brand-jp" style="position:relative;z-index:2;">
    <div class="s1-deco-line" style="width:6cqw;height:1px;background:var(--gold-lt);margin-bottom:3cqw;"></div>
    <div style="font-family:'Crimson Pro',serif;font-size:3cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;margin-bottom:2.5cqw;">Brand Proposal</div>
    金の時
  </div>
  <div class="s1-brand-en">Golden Moments</div>
  <div class="s1-sub">金時草ブランド — JHL+</div>
</div>
`;

// ─── スライド2: タグライン ───
window.slideFactories[1] = () => `
<div class="slide" id="s2">
  <div class="s2-bg-text">Brilliance</div>
  <div class="s2-tagline">輝きは、<br><em>準備から</em>始まる。</div>
  <div class="s2-en">Brilliance begins with preparation.</div>
</div>
`;

// ─── スライド3: ブランドストーリー ───
window.slideFactories[2] = () => `
<div class="slide" id="s3">
  <div class="s3-inner">
    <div class="s3-left">
      <div style="font-family:'Crimson Pro',serif;font-size:3cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;margin-bottom:3cqw;">Brand Story</div>
      <div style="font-size:9cqw;font-weight:500;color:var(--ch);letter-spacing:0.05em;line-height:1.15;">語らずに、<br>ただ、<br>輝かせる。</div>
      <div style="font-family:'Crimson Pro',serif;font-style:italic;font-size:3.5cqw;color:var(--gold-dk);letter-spacing:0.15em;margin-top:3cqw;opacity:0.65;">Let it shine. Silently.</div>
    </div>
    <div class="s3-right">
      <div style="font-family:'Crimson Pro',serif;font-size:3cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;margin-bottom:3cqw;">Story</div>
      <div class="s3-story-text">
        加賀の地で4000年の歴史を持つ<em>金時草</em>。<br>
        その自然の恵みを届けることで、<br>
        今この瞬間から先の人生を、<br>
        元気に・輝くように。<br><br>
        金の時とは、あなたの<em>黄金時代</em>。<br>
        それは今日から始まっている。
      </div>
    </div>
  </div>
</div>
`;

// ─── スライド4: コアコード ───
window.slideFactories[3] = () => `
<div class="slide" id="s4">
  <div class="s4-bg-jp">金時草</div>
  <div class="s4-content">
    <div style="font-family:'Crimson Pro',serif;font-size:3cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;margin-bottom:2cqw;">Core Code</div>
    <div class="s4-title">加賀野菜<br>「<em>金時草</em>」<br>という唯一の素材</div>
    <div class="s4-desc">
      古来より「不老長寿の野菜」と呼ばれてきた加賀の伝統野菜。<br>
      アントシアニン・GABA・鉄分・カルシウムを豊富に含み、<br>
      その力は現代の研究でも裏付けられつつある。
    </div>
    <div class="s4-badge">Gynura Bicolor · 金沢 · 加賀</div>
  </div>
</div>
`;

// ─── スライド5: ブランド4原則 ───
window.slideFactories[4] = () => `
<div class="slide" id="s5">
  <div class="s5-inner">
    <div class="s5-heading">
      <span style="font-family:'Crimson Pro',serif;font-size:3.5cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;">Brand Principles</span>
      <span style="font-family:'Noto Sans JP',sans-serif;font-size:2.8cqw;font-weight:300;color:var(--pt);letter-spacing:0.15em;margin-left:2cqw;">ブランド原則</span>
    </div>
    <div class="s5-principles">
      <div class="s5-card">
        <div class="s5-card-num">01</div>
        <div class="s5-card-en">Silence</div>
        <div class="s5-card-jp">静謐</div>
        <div class="s5-card-desc">語りすぎない。効能を語らず、人生を語る。静かな確信を纏う。</div>
      </div>
      <div class="s5-card">
        <div class="s5-card-num">02</div>
        <div class="s5-card-en">Radiance</div>
        <div class="s5-card-jp">輝き</div>
        <div class="s5-card-desc">内側から滲み出る輝き。派手さとは無縁の、白金のような光。</div>
      </div>
      <div class="s5-card">
        <div class="s5-card-num">03</div>
        <div class="s5-card-en">Tradition</div>
        <div class="s5-card-jp">伝統</div>
        <div class="s5-card-desc">加賀・金沢の歴史。その蓄積を纏う。4000年の知恵を現代へ。</div>
      </div>
      <div class="s5-card">
        <div class="s5-card-num">04</div>
        <div class="s5-card-en">Preparation</div>
        <div class="s5-card-jp">準備</div>
        <div class="s5-card-desc">「治す」でも「予防する」でもない。輝く人生のための準備。</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── スライド6: ネーミング由来 ───
window.slideFactories[5] = () => `
<div class="slide" id="s6">
  <div class="s6-inner">
    <div class="s6-left">
      <div style="font-family:'Crimson Pro',serif;font-size:3cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;margin-bottom:2.5cqw;">Naming</div>
      <div class="s6-name-jp">金の時</div>
      <div class="s6-name-en">Golden Moments</div>
    </div>
    <div class="s6-right">
      <div style="font-family:'Crimson Pro',serif;font-size:3cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;margin-bottom:0.5cqw;">3つの「金」</div>
      <div class="s6-reason">
        <div class="s6-reason-num">01</div>
        <div class="s6-reason-title">金時草から</div>
        <div class="s6-reason-body">加賀野菜「金時草」の「金」。成分の由来と産地を同時に伝え、素材の誇りを名前に宿す。</div>
      </div>
      <div class="s6-reason">
        <div class="s6-reason-num">02</div>
        <div class="s6-reason-title">金沢・加賀の金</div>
        <div class="s6-reason-body">金沢は「金」の都市。伝統・信頼・上質さを一字で表す加賀工芸の精神。</div>
      </div>
      <div class="s6-reason">
        <div class="s6-reason-num">03</div>
        <div class="s6-reason-title">黄金の時間</div>
        <div class="s6-reason-body">名前そのものがコンセプト。あなたの黄金時代への準備という文脈で、人生を語る。</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── スライド7: Do's & Don'ts ───
window.slideFactories[6] = () => `
<div class="slide" id="s7">
  <div class="s7-inner">
    <div>
      <span style="font-family:'Crimson Pro',serif;font-size:3.5cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;">Do's & Don'ts</span>
      <span style="font-family:'Noto Sans JP',sans-serif;font-size:2.8cqw;font-weight:300;color:var(--pt);letter-spacing:0.15em;margin-left:2cqw;">このブランドがすること・しないこと</span>
    </div>
    <div class="s7-cols">
      <div class="s7-col-do">
        <div class="s7-col-title">Do's</div>
        <div class="s7-item"><span class="s7-item-mark">✦</span><span>人生・時間・輝きを語る言葉を使う</span></div>
        <div class="s7-item"><span class="s7-item-mark">✦</span><span>産地「加賀・金沢」を文脈として積極的に使う</span></div>
        <div class="s7-item"><span class="s7-item-mark">✦</span><span>静かで品のある余白を大切にする</span></div>
        <div class="s7-item"><span class="s7-item-mark">✦</span><span>ゴールド・ベージュ・オフホワイトで統一する</span></div>
      </div>
      <div class="s7-col-dont">
        <div class="s7-col-title">Don'ts</div>
        <div class="s7-item"><span class="s7-item-mark">×</span><span>「効く」「治る」「予防」などの効能訴求をしない</span></div>
        <div class="s7-item"><span class="s7-item-mark">×</span><span>「最高品質」「No.1」などの誇大表現をしない</span></div>
        <div class="s7-item"><span class="s7-item-mark">×</span><span>緑×白の一般サプリデザインに近づかない</span></div>
        <div class="s7-item"><span class="s7-item-mark">×</span><span>ポップすぎる・安売り感のある表現をしない</span></div>
      </div>
    </div>
  </div>
</div>
`;

// ─── スライド8: カラーパレット ───
window.slideFactories[7] = () => `
<div class="slide" id="s8">
  <div class="s8-inner">
    <div>
      <span style="font-family:'Crimson Pro',serif;font-size:3.5cqw;letter-spacing:0.35em;color:var(--gold-dk);text-transform:uppercase;">Color Palette</span>
      <span style="font-family:'Noto Sans JP',sans-serif;font-size:2.8cqw;font-weight:300;color:var(--pt);letter-spacing:0.15em;margin-left:2cqw;">カラーパレット</span>
    </div>
    <div class="s8-swatches">
      <div class="s8-swatch">
        <div class="s8-color" style="background:#C9A84C;"></div>
        <div class="s8-color-name">Gold</div>
        <div class="s8-color-hex">#C9A84C</div>
      </div>
      <div class="s8-swatch">
        <div class="s8-color" style="background:#E8D5A3;"></div>
        <div class="s8-color-name">Gold Light</div>
        <div class="s8-color-hex">#E8D5A3</div>
      </div>
      <div class="s8-swatch">
        <div class="s8-color" style="background:#9A7B2E;"></div>
        <div class="s8-color-name">Gold Dark</div>
        <div class="s8-color-hex">#9A7B2E</div>
      </div>
      <div class="s8-swatch">
        <div class="s8-color" style="background:#B8B3A8;border:1px solid #ddd;"></div>
        <div class="s8-color-name">Platinum</div>
        <div class="s8-color-hex">#B8B3A8</div>
      </div>
      <div class="s8-swatch">
        <div class="s8-color" style="background:#FAF7F2;border:1px solid #e8e3da;"></div>
        <div class="s8-color-name">Off White</div>
        <div class="s8-color-hex">#FAF7F2</div>
      </div>
      <div class="s8-swatch">
        <div class="s8-color" style="background:#2C2C2C;"></div>
        <div class="s8-color-name">Charcoal</div>
        <div class="s8-color-hex">#2C2C2C</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── スライド9: タイポグラフィ ───
window.slideFactories[8] = () => `
<div class="slide" id="s9">
  <div class="s9-inner">
    <div class="s9-left">
      <div class="s9-font-label">Display · Heading</div>
      <div class="s9-font-preview-jp">金の時</div>
      <div class="s9-font-meta">Zen Old Mincho · w400–700<br>ブランド名・タグライン・見出し</div>
    </div>
    <div class="s9-right">
      <div>
        <div class="s9-font-label">English · Label</div>
        <div class="s9-font-preview-en">Golden<br><em>Moments</em></div>
        <div class="s9-font-meta">Crimson Pro · Regular / Italic<br>英語見出し・ラベル・キャプション</div>
      </div>
      <div style="margin-top:4cqw;">
        <div class="s9-font-label">Body · Caption</div>
        <div class="s9-font-preview-body">加賀の地で育まれた金時草。</div>
        <div class="s9-font-meta">Noto Sans JP · w300<br>本文・補足テキスト</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── スライド10: エンド ───
window.slideFactories[9] = () => `
<div class="slide" id="s10">
  <div class="s10-glow"></div>
  <div class="s10-logo">金の時</div>
  <div class="s10-logo-en">Golden Moments</div>
  <div class="s10-tagline">輝きは、準備から始まる。</div>
</div>
`;
