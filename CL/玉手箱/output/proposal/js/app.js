// 玉手箱 提案スライド — app.js
// 1920×1080固定 / transform scale方式

(function () {

  var stage      = document.getElementById('slide-stage');
  var navPrev    = document.getElementById('nav-prev');
  var navNext    = document.getElementById('nav-next');
  var navCounter = document.getElementById('nav-counter');
  var hamburger  = document.getElementById('hamburger');
  var sidebar    = document.getElementById('sidebar');
  var backdrop   = document.getElementById('backdrop');
  var sideList   = document.getElementById('sidebar-list');

  var current  = 0;
  var total    = slideFactories.length;
  var rendered = {};

  // ── 1920×1080 固定スケーリング ──
  var currentScale = 1;
  function scaleSlides() {
    currentScale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    document.querySelectorAll('.slide').forEach(function (s) {
      s.style.transform = 'translate(-50%, -50%) scale(' + currentScale + ')';
    });
  }
  window.addEventListener('resize', scaleSlides);

  // ── スライドレンダリング ──
  function ensureRendered(i) {
    if (rendered[i] || i < 0 || i >= total) return;
    var frag = document.createRange().createContextualFragment(slideFactories[i]());
    stage.appendChild(frag);
    rendered[i] = true;
    scaleSlides();
  }

  // ── 暗いスライドの判定 ──
  var darkSlides = { cover: 1, 'tagline-story': 1, corecode: 1, brandcode: 0, concept: 1, kv: 1 };

  function updateNav(i) {
    navCounter.textContent = (i + 1) + ' / ' + total;
    var slides = stage.querySelectorAll('.slide');
    var sec = slides[i] ? slides[i].dataset.section : '';
    var dark = !!darkSlides[sec];
    navPrev.className    = 'nav-btn'     + (dark ? ' light' : '');
    navNext.className    = 'nav-btn'     + (dark ? ' light' : '');
    navCounter.className = 'nav-counter' + (dark ? ' light' : '');
    hamburger.className  = 'hamburger'   + (dark ? ' light' : '');
  }

  // ── スライド移動 ──
  function goTo(i) {
    if (i < 0 || i >= total) return;
    [i - 1, i, i + 1].forEach(function (j) { ensureRendered(j); });
    var slides = stage.querySelectorAll('.slide');
    slides.forEach(function (s, idx) { s.classList.toggle('active', idx === i); });
    document.querySelectorAll('.sidebar-item').forEach(function (btn, idx) {
      btn.classList.toggle('active', idx === i);
    });
    current = i;
    updateNav(i);
  }

  // ── 初期化 ──
  scaleSlides();
  [0, 1, 2].forEach(function (i) { ensureRendered(i); });

  // サイドバー構築
  agendaItems.forEach(function (item, i) {
    var btn = document.createElement('button');
    btn.className = 'sidebar-item';
    btn.textContent = ('0' + (i + 1)).slice(-2) + '  ' + item.label;
    btn.addEventListener('click', function () { goTo(i); closeSidebar(); });
    sideList.appendChild(btn);
  });

  goTo(0);

  // ── ナビ ──
  navPrev.addEventListener('click', function () { goTo(current - 1); });
  navNext.addEventListener('click', function () { goTo(current + 1); });

  // ── キーボード ──
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') goTo(current + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')  goTo(current - 1);
    if (e.key === 'Escape') closeSidebar();
  });

  // ── クリックで進む・戻る（左半分:前、右半分:次） ──
  stage.addEventListener('click', function (e) {
    if (e.target.closest('.hamburger') || e.target.closest('.nav')) return;
    var half = stage.getBoundingClientRect().width / 2;
    if (e.clientX < half) {
      goTo(current - 1);
    } else {
      goTo(current + 1);
    }
  });

  // ── サイドバー ──
  function openSidebar()  { sidebar.classList.add('open');  backdrop.classList.add('show'); }
  function closeSidebar() { sidebar.classList.remove('open'); backdrop.classList.remove('show'); }
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  backdrop.addEventListener('click', closeSidebar);

})();
