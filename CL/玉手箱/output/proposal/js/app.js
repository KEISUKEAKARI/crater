// 玉手箱 提案スライド — アプリケーション

const stage = document.querySelector('.slide-stage');
const navPrev = document.getElementById('nav-prev');
const navNext = document.getElementById('nav-next');
const navCounter = document.getElementById('nav-counter');
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');

let current = 0;
const total = slideFactories.length;
const rendered = new Set();

function ensureRendered(index) {
  if (rendered.has(index) || index < 0 || index >= total) return;
  const frag = document.createRange().createContextualFragment(slideFactories[index]());
  stage.appendChild(frag);
  rendered.add(index);
}

function updateNav(index) {
  navCounter.textContent = `${index + 1} / ${total}`;

  // 暗いスライドではナビを白に
  const darkSlides = new Set(['cover', 'tagline', 'corecode', 'concept']);
  const slide = stage.querySelectorAll('.slide')[index];
  const section = slide ? slide.dataset.section : '';
  const isLight = darkSlides.has(section);

  navPrev.className = 'nav-btn' + (isLight ? ' light' : '');
  navNext.className = 'nav-btn' + (isLight ? ' light' : '');
  navCounter.className = 'nav-counter' + (isLight ? ' light' : '');
  hamburger.className = 'hamburger' + (isLight ? ' light' : '');
}

function goTo(index) {
  if (index < 0 || index >= total) return;

  [index - 1, index, index + 1].forEach(i => ensureRendered(i));

  const slides = stage.querySelectorAll('.slide');
  slides.forEach((s, i) => s.classList.toggle('active', i === index));

  // サイドバーのアクティブ更新
  document.querySelectorAll('.sidebar-item').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  current = index;
  updateNav(index);
}

// 初期レンダリング
[0, 1, 2].forEach(i => ensureRendered(i));

// サイドバー構築
const sidebarList = document.getElementById('sidebar-list');
agendaItems.forEach((item, i) => {
  const btn = document.createElement('button');
  btn.className = 'sidebar-item';
  btn.textContent = `${String(i + 1).padStart(2, '0')}  ${item.label}`;
  btn.addEventListener('click', () => { goTo(i); closeSidebar(); });
  sidebarList.appendChild(btn);
});

goTo(0);

// ナビ
navPrev.addEventListener('click', () => goTo(current - 1));
navNext.addEventListener('click', () => goTo(current + 1));

// キーボード
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') goTo(current + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')  goTo(current - 1);
  if (e.key === 'Escape') closeSidebar();
});

// クリックで進む（ナビ・サイドバー以外）
stage.addEventListener('click', e => {
  if (!e.target.closest('.nav') && !e.target.closest('.sidebar') && !e.target.closest('.hamburger')) {
    goTo(current + 1);
  }
});

// サイドバー
function openSidebar()  { sidebar.classList.add('open'); backdrop.classList.add('show'); }
function closeSidebar() { sidebar.classList.remove('open'); backdrop.classList.remove('show'); }
hamburger.addEventListener('click', e => { e.stopPropagation(); sidebar.classList.contains('open') ? closeSidebar() : openSidebar(); });
backdrop.addEventListener('click', closeSidebar);
