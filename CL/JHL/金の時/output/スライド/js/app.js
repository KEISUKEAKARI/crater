const TOTAL = window.slideFactories.length;
let current = 0;

const stage = document.getElementById('stage');
const counter = document.getElementById('slide-counter');

function scaleStage() {
  const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  stage.style.transform = `scale(${s})`;
  const left = (window.innerWidth - 1920 * s) / 2;
  const top  = (window.innerHeight - 1080 * s) / 2;
  stage.style.left = left + 'px';
  stage.style.top  = top  + 'px';
}

function renderAll() {
  stage.innerHTML = '';
  window.slideFactories.forEach((factory, i) => {
    const html = factory();
    const temp = document.createElement('div');
    temp.innerHTML = html.trim();
    const el = temp.firstChild;
    if (i === current) el.classList.add('active');
    else el.classList.remove('active');
    stage.appendChild(el);
  });
}

function goTo(n) {
  current = (n + TOTAL) % TOTAL;
  document.querySelectorAll('.slide').forEach((el, i) => {
    el.classList.toggle('active', i === current);
  });
  counter.textContent = `${current + 1} / ${TOTAL}`;
}

document.getElementById('btn-prev').addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
document.getElementById('btn-next').addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
document.getElementById('click-prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('click-next').addEventListener('click', () => goTo(current + 1));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
});

window.addEventListener('resize', scaleStage);

renderAll();
scaleStage();
counter.textContent = `1 / ${TOTAL}`;
