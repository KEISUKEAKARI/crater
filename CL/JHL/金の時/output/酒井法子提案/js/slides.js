window.slideFactories = [];

/* 酒井法子様 向けパートナーシップ提案スライド
   フォント：Zen Old Mincho / Crimson Pro / Noto Sans JP
   カラー：金の時ブランドカラーに準拠 */

// ─── P1: 表紙 ───
window.slideFactories[0] = () => `
<div class="slide slide-flex" id="s1" style="background:#FAF7F2;flex-direction:row;position:relative;">
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:80px 80px 80px 160px;position:relative;z-index:2;">
    <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:40px;">Partnership Proposal</div>
    <div style="font-family:'Zen Old Mincho',serif;font-size:60px;font-weight:500;color:#2C2C2C;letter-spacing:0.05em;line-height:1.4;">加賀野菜「金時草」の力を、<br>台湾へ届けるご提案</div>
    <div style="width:80px;height:2px;background:#C9A84C;margin:48px 0;"></div>
    <div style="font-family:'Zen Old Mincho',serif;font-size:32px;font-weight:400;color:#5C5956;letter-spacing:0.12em;">ブランド「金の時」× パートナーシップ</div>
    <div style="margin-top:72px;">
      <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.4em;color:#B8B3A8;text-transform:uppercase;">CRATER Inc. × Japan Health Lab</div>
    </div>
  </div>
  <div style="width:700px;flex-shrink:0;position:relative;overflow:hidden;">
    <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&h=1080&fit=crop&q=80" style="width:100%;height:100%;object-fit:cover;" alt="">
    <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(250,247,242,0.5),transparent 40%);"></div>
  </div>
</div>
`;

// ─── P2: ブリッジ「加賀野菜とは」───
window.slideFactories[1] = () => `
<div class="slide slide-flex" id="s2" style="background:#C9A84C;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 220px;position:relative;">
  <div style="position:absolute;top:0;left:0;width:6px;height:100%;background:#2C2C2C;"></div>
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.5em;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-bottom:40px;">Chapter 01</div>
  <div style="font-family:'Zen Old Mincho',serif;font-size:96px;font-weight:500;color:#FAF7F2;letter-spacing:0.06em;line-height:1.3;">加賀野菜とは</div>
  <div style="font-family:'Crimson Pro',serif;font-size:28px;letter-spacing:0.4em;color:rgba(255,255,255,0.8);margin-top:20px;">What is Kaga Vegetable?</div>
</div>
`;

// ─── P3: 加賀野菜の歴史と産地 ───
window.slideFactories[2] = () => `
<div class="slide slide-flex" id="s3" style="background:#FAF7F2;flex-direction:row;position:relative;">
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:60px 80px 60px 160px;">
    <div style="margin-bottom:48px;">
      <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Kaga Vegetables</span>
      <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#5C5956;letter-spacing:0.15em;margin-left:20px;">加賀野菜とは</span>
    </div>
    <div style="font-family:'Zen Old Mincho',serif;font-size:72px;font-weight:500;color:#2C2C2C;letter-spacing:0.06em;line-height:1.4;margin-bottom:32px;">石川・金沢が誇る、<br>伝統野菜。</div>
    <div style="font-family:'Noto Sans JP',sans-serif;font-size:22px;font-weight:300;color:#5C5956;line-height:2.1;margin-bottom:36px;">加賀野菜とは、石川県金沢市周辺で栽培される伝統的な野菜の総称です。加賀百万石の文化を背景に、数百年にわたって大切に育まれてきました。</div>
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="background:#fff;border-radius:12px;padding:24px 32px;border:1px solid #E4E0D8;display:flex;gap:20px;align-items:center;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;min-width:60px;">産地</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:26px;color:#2C2C2C;">石川県金沢市 — 加賀百万石の地</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:24px 32px;border:1px solid #E4E0D8;display:flex;gap:20px;align-items:center;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;min-width:60px;">歴史</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:26px;color:#2C2C2C;">江戸時代から受け継がれる伝統品種</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:24px 32px;border:1px solid #E4E0D8;display:flex;gap:20px;align-items:center;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;min-width:60px;">種類</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:26px;color:#2C2C2C;">15種類の認定加賀野菜</div>
      </div>
    </div>
  </div>
  <div style="width:600px;flex-shrink:0;position:relative;overflow:hidden;">
    <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&h=1080&fit=crop&q=80" style="width:100%;height:100%;object-fit:cover;" alt="">
    <div style="position:absolute;inset:0;background:linear-gradient(to left,transparent 60%,rgba(250,247,242,0.3));"></div>
  </div>
</div>
`;

// ─── P4: 金時草とは ───
window.slideFactories[3] = () => `
<div class="slide slide-flex" id="s4" style="background:#F5F2EC;flex-direction:row;position:relative;">
  <div style="width:560px;flex-shrink:0;position:relative;overflow:hidden;">
    <img src="https://images.unsplash.com/photo-1530213786676-41ad9f7736f2?w=560&h=1080&fit=crop&q=80" style="width:100%;height:100%;object-fit:cover;" alt="">
    <div style="position:absolute;inset:0;background:linear-gradient(to left,rgba(245,242,236,0.4),transparent 50%);"></div>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:60px 140px 60px 80px;">
    <div style="margin-bottom:40px;">
      <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Kinjisoˉ</span>
      <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#5C5956;letter-spacing:0.15em;margin-left:20px;">金時草とは</span>
    </div>
    <div style="font-family:'Zen Old Mincho',serif;font-size:88px;font-weight:500;color:#2C2C2C;letter-spacing:0.06em;line-height:1.2;margin-bottom:16px;">不老長寿と<br>呼ばれる野菜。</div>
    <div style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.2em;color:#9A7B2E;margin-bottom:36px;opacity:0.7;">The Vegetable of Eternal Youth</div>
    <div style="font-family:'Noto Sans JP',sans-serif;font-size:22px;font-weight:300;color:#5C5956;line-height:2.1;margin-bottom:28px;">古来より「不老長寿の野菜」として伝承されてきた加賀の伝統野菜。表は緑、裏は深い紫色という美しいグラデーションが特徴です。</div>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="background:#C9A84C;border-radius:12px;padding:20px 28px;display:flex;gap:16px;align-items:center;">
        <div style="font-family:'Zen Old Mincho',serif;font-size:24px;color:#fff;">アントシアニン — 強力な抗酸化作用</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:20px 28px;border:1px solid #E4E0D8;display:flex;gap:16px;align-items:center;">
        <div style="font-family:'Zen Old Mincho',serif;font-size:24px;color:#2C2C2C;">GABA・鉄分・カルシウムを豊富に含む</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── P5: ブリッジ「ブランド化という選択」───
window.slideFactories[4] = () => `
<div class="slide slide-flex" id="s5" style="background:#C9A84C;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 220px;position:relative;">
  <div style="position:absolute;top:0;left:0;width:6px;height:100%;background:#2C2C2C;"></div>
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.5em;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-bottom:40px;">Chapter 02</div>
  <div style="font-family:'Zen Old Mincho',serif;font-size:88px;font-weight:500;color:#FAF7F2;letter-spacing:0.06em;line-height:1.3;">この力をどう届けるか</div>
  <div style="font-family:'Crimson Pro',serif;font-size:28px;letter-spacing:0.4em;color:rgba(255,255,255,0.8);margin-top:20px;">Brand Strategy</div>
</div>
`;

// ─── P6: 「金の時」ブランドの誕生 ───
window.slideFactories[5] = () => `
<div class="slide slide-flex" id="s6" style="background:#FAF7F2;flex-direction:row;position:relative;">
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:60px 80px 60px 160px;">
    <div style="margin-bottom:40px;">
      <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Brand Identity</span>
      <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#5C5956;letter-spacing:0.15em;margin-left:20px;">「金の時」ブランド</span>
    </div>
    <div style="font-family:'Zen Old Mincho',serif;font-size:96px;font-weight:500;color:#2C2C2C;letter-spacing:0.1em;line-height:1.2;margin-bottom:8px;">金の時</div>
    <div style="font-family:'Crimson Pro',serif;font-size:28px;letter-spacing:0.4em;color:#C9A84C;margin-bottom:32px;">Golden Moments</div>
    <div style="font-family:'Zen Old Mincho',serif;font-size:32px;color:#2C2C2C;letter-spacing:0.1em;margin-bottom:28px;">輝きは、準備から始まる。</div>
    <div style="font-family:'Noto Sans JP',sans-serif;font-size:22px;font-weight:300;color:#5C5956;line-height:2.1;margin-bottom:32px;">金時草の力を、現代の人々が日々の習慣として取り入れられるようにデザインされた高品質ブランド。</div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div style="background:#C9A84C;border-radius:12px;padding:22px 32px;">
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#fff;line-height:1.5;">続けることで、輝きは深まる。</div>
      </div>
      <div style="background:#fff;border-radius:12px;padding:22px 32px;border:1px solid #E4E0D8;display:flex;gap:16px;">
        <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;color:#9A7B2E;font-weight:400;">商品</span>
        <span style="font-family:'Zen Old Mincho',serif;font-size:24px;color:#2C2C2C;">金時草サプリ 2g × 30包 スティックタイプ</span>
      </div>
    </div>
  </div>
  <div style="width:580px;flex-shrink:0;position:relative;overflow:hidden;">
    <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=580&h=1080&fit=crop&q=80" style="width:100%;height:100%;object-fit:cover;" alt="">
    <div style="position:absolute;inset:0;background:linear-gradient(to left,transparent 60%,rgba(250,247,242,0.35));"></div>
  </div>
</div>
`;

// ─── P7: ブランドコード「不老長寿」───
window.slideFactories[6] = () => `
<div class="slide slide-flex" id="s7" style="background:#F5F2EC;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 220px;position:relative;">
  <div style="position:absolute;top:50%;right:160px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,0.12) 0%,transparent 70%);transform:translateY(-50%);pointer-events:none;"></div>
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;margin-bottom:40px;position:relative;z-index:2;">Core Code</div>
  <div style="font-family:'Zen Old Mincho',serif;font-size:96px;font-weight:500;color:#2C2C2C;letter-spacing:0.06em;line-height:1.2;position:relative;z-index:2;">不老長寿と<br>呼ばれる野菜。</div>
  <div style="font-family:'Crimson Pro',serif;font-size:26px;color:#9A7B2E;letter-spacing:0.2em;margin-top:16px;opacity:0.65;position:relative;z-index:2;">The Vegetable of Eternal Youth</div>
  <div style="font-family:'Noto Sans JP',sans-serif;font-size:26px;font-weight:300;color:#5C5956;line-height:2.2;margin-top:48px;max-width:1100px;letter-spacing:0.05em;position:relative;z-index:2;">このブランドコードが「金の時」の最大の武器です。<br>誰もが聞いた瞬間に「欲しい」と感じる、<br>シンプルで力強い一言。</div>
</div>
`;

// ─── P8: ブリッジ「ビジネスのご提案」───
window.slideFactories[7] = () => `
<div class="slide slide-flex" id="s8" style="background:#C9A84C;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 220px;position:relative;">
  <div style="position:absolute;top:0;left:0;width:6px;height:100%;background:#2C2C2C;"></div>
  <div style="font-family:'Crimson Pro',serif;font-size:20px;letter-spacing:0.5em;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-bottom:40px;">Chapter 03</div>
  <div style="font-family:'Zen Old Mincho',serif;font-size:96px;font-weight:500;color:#FAF7F2;letter-spacing:0.06em;line-height:1.3;">ビジネスのご提案</div>
  <div style="font-family:'Crimson Pro',serif;font-size:28px;letter-spacing:0.4em;color:rgba(255,255,255,0.8);margin-top:20px;">Business Partnership</div>
</div>
`;

// ─── P9: ビジネスモデル概要 ───
window.slideFactories[8] = () => `
<div class="slide slide-flex" id="s9" style="background:#FAF7F2;flex-direction:column;justify-content:center;padding:80px 160px;">
  <div style="margin-bottom:52px;">
    <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Business Model</span>
    <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#5C5956;letter-spacing:0.15em;margin-left:24px;">ビジネスモデルのご提案</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start;">
    <div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:72px;font-weight:500;color:#2C2C2C;letter-spacing:0.06em;line-height:1.4;margin-bottom:32px;">台湾でのビジネスを、<br>ともに創る。</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#5C5956;line-height:2.1;margin-bottom:32px;">台湾は日本ブランドへの信頼が高く、健康・美容市場も成長中です。パートナーとして発信いただき、越境ECを通じて商品をお届けするモデルをご提案します。</div>
      <div style="background:#F5F2EC;border-radius:12px;padding:28px 36px;border:1px solid #E4E0D8;">
        <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:400;color:#2C2C2C;margin-bottom:6px;">基本スタンス</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:26px;color:#9A7B2E;letter-spacing:0.08em;">クリエイターを通して商品が届く</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:24px;">
      <div style="background:#fff;border-radius:16px;padding:36px 44px;border:1px solid #E4E0D8;border-left:4px solid #C9A84C;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:12px;">Role 01</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:30px;color:#2C2C2C;margin-bottom:10px;">PR・発信のパートナー</div>
        <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:300;color:#5C5956;line-height:1.8;">SNS・動画等を通じて「金の時」の世界観を台湾へ届ける</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 44px;border:1px solid #E4E0D8;border-left:4px solid #C9A84C;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:12px;">Role 02</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:30px;color:#2C2C2C;margin-bottom:10px;">越境EC × 定期購読</div>
        <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:300;color:#5C5956;line-height:1.8;">専用リンクから越境ECへ誘導。定期購読で毎月日本から届ける</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 44px;border:1px solid #E4E0D8;border-left:4px solid #C9A84C;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:12px;">Role 03</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:30px;color:#2C2C2C;margin-bottom:10px;">店舗販売との組み合わせ</div>
        <div style="font-family:'Noto Sans JP',sans-serif;font-size:20px;font-weight:300;color:#5C5956;line-height:1.8;">ECをメインとしながら、店舗での取り扱いも柔軟に対応可能</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── P10: クリエイターを通した販売フロー ───
window.slideFactories[9] = () => `
<div class="slide slide-flex" id="s10" style="background:#F5F2EC;flex-direction:column;justify-content:center;padding:80px 160px;">
  <div style="margin-bottom:52px;">
    <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Sales Flow</span>
    <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#5C5956;letter-spacing:0.15em;margin-left:24px;">クリエイターを通した販売の流れ</span>
  </div>
  <div style="display:flex;gap:28px;align-items:stretch;">
    <div style="flex:1;background:#fff;border-radius:16px;padding:44px 32px;border:1px solid #E4E0D8;display:flex;flex-direction:column;align-items:center;text-align:center;">
      <div style="font-family:'Crimson Pro',serif;font-size:56px;color:#E8D5A3;line-height:1;margin-bottom:16px;">01</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#2C2C2C;margin-bottom:14px;">世界観の発信</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:19px;font-weight:300;color:#5C5956;line-height:1.8;">「不老長寿と呼ばれる野菜」という物語とともに、ご自身の体験・価値観から発信</div>
    </div>
    <div style="display:flex;align-items:center;color:#C9A84C;font-size:32px;flex-shrink:0;">→</div>
    <div style="flex:1;background:#fff;border-radius:16px;padding:44px 32px;border:1px solid #E4E0D8;display:flex;flex-direction:column;align-items:center;text-align:center;">
      <div style="font-family:'Crimson Pro',serif;font-size:56px;color:#E8D5A3;line-height:1;margin-bottom:16px;">02</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#2C2C2C;margin-bottom:14px;">ECへ誘導</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:19px;font-weight:300;color:#5C5956;line-height:1.8;">専用リンクから越境ECサイトへ。台湾語対応のページで購入をサポート</div>
    </div>
    <div style="display:flex;align-items:center;color:#C9A84C;font-size:32px;flex-shrink:0;">→</div>
    <div style="flex:1;background:#C9A84C;border-radius:16px;padding:44px 32px;display:flex;flex-direction:column;align-items:center;text-align:center;">
      <div style="font-family:'Crimson Pro',serif;font-size:56px;color:rgba(255,255,255,0.4);line-height:1;margin-bottom:16px;">03</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#fff;margin-bottom:14px;">定期購読</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:19px;font-weight:300;color:rgba(255,255,255,0.85);line-height:1.8;">毎月自動で届く定期便。継続することで輝く人生を準備する習慣に</div>
    </div>
    <div style="display:flex;align-items:center;color:#C9A84C;font-size:32px;flex-shrink:0;">→</div>
    <div style="flex:1;background:#2C2C2C;border-radius:16px;padding:44px 32px;display:flex;flex-direction:column;align-items:center;text-align:center;">
      <div style="font-family:'Crimson Pro',serif;font-size:56px;color:rgba(201,168,76,0.4);line-height:1;margin-bottom:16px;">04</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#FAF7F2;margin-bottom:14px;">ファン化・拡散</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:19px;font-weight:300;color:#B8B3A8;line-height:1.8;">継続ユーザーが口コミで広がり、ブランドコミュニティが自然に育つ</div>
    </div>
  </div>
</div>
`;

// ─── P11: ご提案内容まとめ ───
window.slideFactories[10] = () => `
<div class="slide slide-flex" id="s11" style="background:#FAF7F2;flex-direction:column;justify-content:center;padding:80px 160px;">
  <div style="margin-bottom:52px;">
    <span style="font-family:'Crimson Pro',serif;font-size:22px;letter-spacing:0.35em;color:#9A7B2E;text-transform:uppercase;">Proposal Summary</span>
    <span style="font-family:'Noto Sans JP',sans-serif;font-size:18px;font-weight:300;color:#5C5956;letter-spacing:0.15em;margin-left:24px;">ご提案のまとめ</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;">
    <div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:72px;font-weight:500;color:#2C2C2C;letter-spacing:0.06em;line-height:1.4;margin-bottom:40px;">日本の伝統を、<br>台湾の方々へ。</div>
      <div style="font-family:'Noto Sans JP',sans-serif;font-size:24px;font-weight:300;color:#5C5956;line-height:2.1;">「不老長寿」という普遍的なテーマが、日本と台湾をつなぎます。クリエイターの信頼とブランドの世界観が合わさったとき、本当に価値のある商品が届けられると考えています。</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="background:#2C2C2C;border-radius:16px;padding:36px 44px;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#C9A84C;text-transform:uppercase;margin-bottom:12px;">商品</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#FAF7F2;">金時草サプリ「金の時」</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 44px;border:1px solid #E4E0D8;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:12px;">販売形態</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#2C2C2C;">越境EC × 定期購読（メイン）</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 44px;border:1px solid #E4E0D8;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:12px;">パートナーの役割</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#2C2C2C;">発信 × PRによる認知拡大</div>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px 44px;border:1px solid #E4E0D8;">
        <div style="font-family:'Crimson Pro',serif;font-size:18px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:12px;">契約形態</div>
        <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#2C2C2C;">別途ご相談・柔軟に対応</div>
      </div>
    </div>
  </div>
</div>
`;

// ─── P12: エンド ───
window.slideFactories[11] = () => `
<div class="slide slide-flex" id="s12" style="background:#EDEAE2;flex-direction:column;justify-content:center;align-items:center;position:relative;">
  <div style="font-family:'Zen Old Mincho',serif;font-size:100px;font-weight:500;color:#2C2C2C;letter-spacing:0.1em;margin-bottom:20px;">金の時</div>
  <div style="font-family:'Crimson Pro',serif;font-size:26px;letter-spacing:0.6em;color:#C9A84C;margin-bottom:64px;">Golden Moments</div>
  <div style="font-family:'Zen Old Mincho',serif;font-size:36px;font-weight:400;letter-spacing:0.2em;color:#5C5956;margin-bottom:80px;">輝きは、準備から始まる。</div>
  <div style="display:flex;gap:60px;align-items:center;">
    <div style="text-align:center;">
      <div style="font-family:'Crimson Pro',serif;font-size:16px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:8px;">Produced by</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#2C2C2C;">株式会社ジャパンヘルスラボ</div>
    </div>
    <div style="width:1px;height:60px;background:#E4E0D8;"></div>
    <div style="text-align:center;">
      <div style="font-family:'Crimson Pro',serif;font-size:16px;letter-spacing:0.3em;color:#9A7B2E;text-transform:uppercase;margin-bottom:8px;">Brand Design</div>
      <div style="font-family:'Zen Old Mincho',serif;font-size:28px;color:#2C2C2C;">CRATER Inc.</div>
    </div>
  </div>
</div>
`;
