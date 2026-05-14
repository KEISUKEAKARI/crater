window.slideFactories = [];

/* stage = 1920×1080px固定。
   flex系 → class="slide slide-flex"
   grid系 → class="slide slide-grid"
   CSSの .slide-flex.active / .slide-grid.active で制御 */

// ─── P1: オープニング ───
window.slideFactories[0] = () => `
<div class="slide slide-flex" id="s1" style="background:#FAF7F2;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 220px;position:relative;">
  <div style="position:absolute;top:50%;right:-100px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,0.14) 0%,transparent 62%);transform:translateY(-50%);pointer-events:none;"></div>
  <!-- ラベル -->
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:40px;position:relative;z-index:2;">Brand Proposal</div>
  <!-- メイン見出し -->
  <div style="font-family:'Zen Old Mincho',serif;font-size:96px;font-weight:500;color:#2C2C2C;letter-spacing:0.05em;line-height:1.3;position:relative;z-index:2;">JHL+金時草製品のブランド設計</div>
  <!-- クレーターロゴ -->
  <div style="margin-top:80px;position:relative;z-index:2;">
    <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.4em;color:#B8B3A8;text-transform:uppercase;">CRATER Inc.</div>
  </div>
</div>
`;

// ─── P2: タグライン ───
window.slideFactories[1] = () => `
<div class="slide slide-flex" id="s2" style="background:#F5F2EC;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 220px;position:relative;">
  <div style="position:absolute;font-family:'Crimson Pro',serif;font-style:italic;font-size:520px;color:rgba(201,168,76,0.06);right:-60px;bottom:-80px;line-height:1;pointer-events:none;user-select:none;">B</div>
  <div style="width:80px;height:1px;background:#E8D5A3;margin-bottom:56px;"></div>
  <!-- ラベル -->
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:48px;">Tagline</div>
  <!-- メイン超大 -->
  <div style="font-family:'Zen Old Mincho',serif;font-size:148px;font-weight:500;color:#2C2C2C;letter-spacing:0.07em;line-height:1.4;position:relative;z-index:2;">輝きは、<br>準備から始まる。</div>
  <!-- 英語 小さめ -->
  <div style="font-family:'Noto Sans JP',sans-serif;font-weight:300;font-size:26px;color:#9A7B2E;letter-spacing:0.2em;margin-top:40px;opacity:0.7;position:relative;z-index:2;">Brilliance begins with preparation.</div>
</div>
`;

// ─── P3: ブランドストーリー（フルワイド） ───
window.slideFactories[2] = () => `
<div class="slide slide-flex" id="s3" style="background:#FAF7F2;flex-direction:column;justify-content:center;padding:0 220px;position:relative;">
  <div style="position:absolute;font-family:'Zen Old Mincho',serif;font-size:600px;font-weight:700;color:rgba(201,168,76,0.04);right:-60px;bottom:-100px;line-height:1;pointer-events:none;user-select:none;">金</div>
  <!-- ラベル -->
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:48px;position:relative;z-index:2;">Story</div>
  <!-- タイトル -->
  <div style="font-family:'Zen Old Mincho',serif;font-size:96px;font-weight:500;color:#2C2C2C;letter-spacing:0.06em;line-height:1.4;margin-bottom:56px;position:relative;z-index:2;">今この瞬間以降の<br>人生が元気で輝くように。</div>
  <!-- 本文 -->
  <div style="font-family:'Noto Sans JP',sans-serif;font-size:28px;font-weight:300;color:#5C5956;line-height:2.2;letter-spacing:0.06em;position:relative;z-index:2;">
    加賀の地で4000年の歴史を持つ金時草。その自然の恵みを届けることで、<br>
    今この瞬間から先の人生を、元気に・輝くように。<br><br>
    金の時とは、あなたの黄金時代。それは今日から始まっている。
  </div>
</div>
`;

// ─── P4: コアコード ───
window.slideFactories[3] = () => `
<div class="slide slide-flex" id="s4" style="background:#FAF7F2;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 220px;position:relative;">
  <div style="position:absolute;font-family:'Zen Old Mincho',serif;font-size:380px;font-weight:700;color:rgba(201,168,76,0.06);right:-40px;top:50%;transform:translateY(-50%);white-space:nowrap;pointer-events:none;line-height:1;">金時草</div>
  <!-- ラベル -->
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:40px;position:relative;z-index:2;">Brand Core Code</div>
  <!-- メイン超大 -->
  <div style="font-family:'Zen Old Mincho',serif;font-size:128px;font-weight:500;color:#2C2C2C;letter-spacing:0.06em;line-height:1.2;position:relative;z-index:2;">不老長寿と呼ばれる野菜。</div>
  <!-- 英語 小 -->
  <div style="font-family:'Noto Sans JP',sans-serif;font-weight:300;font-size:26px;color:#9A7B2E;letter-spacing:0.2em;margin-top:16px;opacity:0.65;position:relative;z-index:2;">The Vegetable of Eternal Youth</div>
  <!-- 本文 -->
  <div style="font-family:'Noto Sans JP',sans-serif;font-size:26px;font-weight:300;color:#5C5956;line-height:2.2;margin-top:48px;max-width:1100px;letter-spacing:0.05em;position:relative;z-index:2;">
    古来より「不老長寿の野菜」と呼ばれてきた加賀の伝統野菜。<br>
    アントシアニン・GABA・鉄分・カルシウムを豊富に含む。<br>
    <span style="font-size:22px;color:#B8B3A8;">※ 沖縄では「水前寺菜」として知られ、金時草と同じ植物。古くから両地域で愛されてきた。</span>
  </div>
</div>
`;

// ─── P5: ブランド4原則（変更なし） ───
window.slideFactories[4] = () => `
<div class="slide slide-flex" id="s5" style="background:#F5F2EC;flex-direction:column;justify-content:center;padding:80px 160px;">
  <div style="margin-bottom:56px;">
    <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Brand Principles</span>
    <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#B8B3A8;letter-spacing:0.15em;margin-left:24px;">ブランド原則</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:28px;">
    <div style="background:#fff;border-radius:16px;padding:48px 36px;border:1px solid #E4E0D8;">
      <div style="font-family:'Crimson Pro',serif;font-size:80px;color:#E8D5A3;line-height:1;margin-bottom:20px;">01</div>
      <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:10px;">Silence</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:42px;font-weight:600;color:#2C2C2C;margin-bottom:16px;">静謐</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:300;color:#5C5956;line-height:1.9;">語りすぎない。効能を語らず、人生を語る。静かな確信を纏う。</div>
    </div>
    <div style="background:#fff;border-radius:16px;padding:48px 36px;border:1px solid #E4E0D8;">
      <div style="font-family:'Crimson Pro',serif;font-size:80px;color:#E8D5A3;line-height:1;margin-bottom:20px;">02</div>
      <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:10px;">Radiance</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:42px;font-weight:600;color:#2C2C2C;margin-bottom:16px;">輝き</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:300;color:#5C5956;line-height:1.9;">内側から滲み出る輝き。派手さとは無縁の、白金のような光。</div>
    </div>
    <div style="background:#fff;border-radius:16px;padding:48px 36px;border:1px solid #E4E0D8;">
      <div style="font-family:'Crimson Pro',serif;font-size:80px;color:#E8D5A3;line-height:1;margin-bottom:20px;">03</div>
      <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:10px;">Tradition</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:42px;font-weight:600;color:#2C2C2C;margin-bottom:16px;">伝統</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:300;color:#5C5956;line-height:1.9;">加賀・金沢の歴史。その蓄積を纏う。4000年の知恵を現代へ。</div>
    </div>
    <div style="background:#fff;border-radius:16px;padding:48px 36px;border:1px solid #E4E0D8;">
      <div style="font-family:'Crimson Pro',serif;font-size:80px;color:#E8D5A3;line-height:1;margin-bottom:20px;">04</div>
      <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:10px;">Preparation</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:42px;font-weight:600;color:#2C2C2C;margin-bottom:16px;">準備</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:300;color:#5C5956;line-height:1.9;">「治す」でも「予防する」でもない。輝く人生のための準備。</div>
    </div>
  </div>
</div>
`;

// ─── P6: ネーミング（上下レイアウト） ───
window.slideFactories[5] = () => `
<div class="slide slide-grid" id="s6" style="background:#FAF7F2;grid-template-rows:1fr 1fr;grid-template-columns:1fr;">
  <!-- 上：ブランド名 -->
  <div style="display:flex;flex-direction:row;align-items:center;gap:80px;padding:0 220px;border-bottom:1px solid #E4E0D8;">
    <div>
      <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:16px;">Naming</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:120px;font-weight:500;color:#2C2C2C;letter-spacing:0.04em;line-height:1;">金の時</div>
      <div style="font-family:'Crimson Pro',serif;font-size:28px;letter-spacing:0.45em;color:#C9A84C;margin-top:16px;">Golden Moments</div>
    </div>
  </div>
  <!-- 下：3つの金 -->
  <div style="display:flex;flex-direction:column;justify-content:center;padding:0 220px;">
    <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:24px;">3つの「金」</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px;">
      <div style="border-left:3px solid #E8D5A3;padding-left:28px;">
        <div style="font-family:'Crimson Pro',serif;font-size:48px;color:#E8D5A3;line-height:1;margin-bottom:8px;">01</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;font-weight:600;color:#2C2C2C;margin-bottom:8px;">金時草から</div>
        <div style="font-family:'Noto Sans JP',sans-serif;font-size:19px;font-weight:300;color:#5C5956;line-height:1.9;">加賀野菜「金時草」の「金」。成分の由来と産地を同時に伝える。</div>
      </div>
      <div style="border-left:3px solid #E8D5A3;padding-left:28px;">
        <div style="font-family:'Crimson Pro',serif;font-size:48px;color:#E8D5A3;line-height:1;margin-bottom:8px;">02</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;font-weight:600;color:#2C2C2C;margin-bottom:8px;">金箔シェア100%の金沢の金</div>
        <div style="font-family:'Noto Sans JP',sans-serif;font-size:19px;font-weight:300;color:#5C5956;line-height:1.9;">金沢は「金箔」の都市。伝統・信頼・上質さを一字で表す。</div>
      </div>
      <div style="border-left:3px solid #E8D5A3;padding-left:28px;">
        <div style="font-family:'Crimson Pro',serif;font-size:48px;color:#E8D5A3;line-height:1;margin-bottom:8px;">03</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;font-weight:600;color:#2C2C2C;margin-bottom:8px;">黄金の時間</div>
        <div style="font-family:'Noto Sans JP',sans-serif;font-size:19px;font-weight:300;color:#5C5956;line-height:1.9;">名前そのものがコンセプト。輝く人生への準備という文脈。</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── P7: Do's & Don'ts ───
window.slideFactories[6] = () => `
<div class="slide slide-flex" id="s7" style="background:#F5F2EC;flex-direction:column;justify-content:center;padding:80px 160px;">
  <div style="margin-bottom:56px;">
    <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Do's & Don'ts</span>
    <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#B8B3A8;letter-spacing:0.15em;margin-left:24px;">このブランドがすること・しないこと</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;">
    <div>
      <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;padding-bottom:20px;border-bottom:1px solid #E8D5A3;margin-bottom:16px;">Do's</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;border-bottom:1px solid rgba(0,0,0,0.05);"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#C9A84C;flex-shrink:0;line-height:1.4;">✦</span>人生・時間・輝きを語る言葉を使う</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;border-bottom:1px solid rgba(0,0,0,0.05);"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#C9A84C;flex-shrink:0;line-height:1.4;">✦</span>産地「加賀・金沢」を文脈として使う</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;border-bottom:1px solid rgba(0,0,0,0.05);"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#C9A84C;flex-shrink:0;line-height:1.4;">✦</span>静かで品のある余白を大切にする</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#C9A84C;flex-shrink:0;line-height:1.4;">✦</span>ゴールド・ベージュ・オフホワイトで統一</div>
    </div>
    <div>
      <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#B8B3A8;text-transform:uppercase;padding-bottom:20px;border-bottom:1px solid #E4E0D8;margin-bottom:16px;">Don'ts</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;border-bottom:1px solid rgba(0,0,0,0.05);"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#B8B3A8;flex-shrink:0;line-height:1.4;">×</span>「効く」「治る」「予防」などの効能訴求</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;border-bottom:1px solid rgba(0,0,0,0.05);"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#B8B3A8;flex-shrink:0;line-height:1.4;">×</span>「最高品質」「No.1」などの誇大表現</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;border-bottom:1px solid rgba(0,0,0,0.05);"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#B8B3A8;flex-shrink:0;line-height:1.4;">×</span>緑×白の一般サプリデザインに近づく</div>
      <div style="display:flex;align-items:flex-start;gap:20px;font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#2C2C2C;line-height:1.8;padding:20px 0;"><span style="font-family:'Crimson Pro',serif;font-size:28px;color:#B8B3A8;flex-shrink:0;line-height:1.4;">×</span>ポップすぎる・安売り感のある表現</div>
    </div>
  </div>
</div>
`;

// ─── P8: カラーパレット ───
window.slideFactories[7] = () => `
<div class="slide slide-flex" id="s8" style="background:#FAF7F2;flex-direction:column;justify-content:center;padding:80px 160px;">
  <div style="margin-bottom:64px;">
    <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Color Palette</span>
    <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#B8B3A8;letter-spacing:0.15em;margin-left:24px;">カラーパレット</span>
  </div>
  <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:32px;">
    <div><div style="background:#C9A84C;border-radius:12px;height:280px;margin-bottom:20px;"></div><div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.2em;color:#2C2C2C;margin-bottom:6px;">Gold</div><div style="font-family:'Noto Sans JP',sans-serif;font-size:16px;font-weight:300;color:#5C5956;">#C9A84C</div></div>
    <div><div style="background:#E8D5A3;border-radius:12px;height:280px;margin-bottom:20px;border:1px solid rgba(0,0,0,0.06);"></div><div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.2em;color:#2C2C2C;margin-bottom:6px;">Gold Light</div><div style="font-family:'Noto Sans JP',sans-serif;font-size:16px;font-weight:300;color:#5C5956;">#E8D5A3</div></div>
    <div><div style="background:#9A7B2E;border-radius:12px;height:280px;margin-bottom:20px;"></div><div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.2em;color:#2C2C2C;margin-bottom:6px;">Gold Dark</div><div style="font-family:'Noto Sans JP',sans-serif;font-size:16px;font-weight:300;color:#5C5956;">#9A7B2E</div></div>
    <div><div style="background:#B8B3A8;border-radius:12px;height:280px;margin-bottom:20px;border:1px solid rgba(0,0,0,0.06);"></div><div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.2em;color:#2C2C2C;margin-bottom:6px;">Platinum</div><div style="font-family:'Noto Sans JP',sans-serif;font-size:16px;font-weight:300;color:#5C5956;">#B8B3A8</div></div>
    <div><div style="background:#FAF7F2;border-radius:12px;height:280px;margin-bottom:20px;border:1px solid #E4E0D8;"></div><div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.2em;color:#2C2C2C;margin-bottom:6px;">Off White</div><div style="font-family:'Noto Sans JP',sans-serif;font-size:16px;font-weight:300;color:#5C5956;">#FAF7F2</div></div>
    <div><div style="background:#2C2C2C;border-radius:12px;height:280px;margin-bottom:20px;"></div><div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.2em;color:#2C2C2C;margin-bottom:6px;">Charcoal</div><div style="font-family:'Noto Sans JP',sans-serif;font-size:16px;font-weight:300;color:#5C5956;">#2C2C2C</div></div>
  </div>
</div>
`;

// ─── P9: エンド（グラデなし・シンプル） ───
window.slideFactories[8] = () => `
<div class="slide slide-flex" id="s9" style="background:#EDEAE2;flex-direction:column;justify-content:center;align-items:center;position:relative;">
  <div style="font-family:'Zen Old Mincho',serif;font-size:120px;font-weight:500;color:#2C2C2C;letter-spacing:0.1em;">金の時</div>
  <div style="font-family:'Crimson Pro',serif;font-size:28px;letter-spacing:0.6em;color:#C9A84C;margin-top:24px;">Golden Moments</div>
  <div style="font-family:'Noto Sans JP',sans-serif;font-weight:300;font-size:22px;letter-spacing:0.25em;color:#9A7B2E;opacity:0.55;margin-top:48px;">輝きは、準備から始まる。</div>
</div>
`;
