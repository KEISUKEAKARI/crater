// 尾山神社 — スクリプト

document.addEventListener('DOMContentLoaded', () => {
  // ローディング画面
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
  // フォールバック
  setTimeout(() => loader.classList.add('hidden'), 2500);

  // ヘッダー スクロール制御（無効化）
  // const header = document.getElementById('header');
  // const onScroll = () => {
  //   header.classList.toggle('scrolled', window.scrollY > 80);
  // };
  // window.addEventListener('scroll', onScroll, { passive: true });
  // onScroll();

  // モバイルメニュー
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // メインビジュアル スライドショー（無効化）
  // const slides = document.querySelectorAll('.mv-slide');
  // let current = 0;

  // const nextSlide = () => {
  //   slides[current].classList.remove('active');
  //   current = (current + 1) % slides.length;
  //   slides[current].classList.add('active');
  // };

  // if (slides.length > 1) {
  //   setInterval(nextSlide, 6000);
  // }

  // スクロールフェードイン
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  fadeEls.forEach(el => observer.observe(el));

  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});
