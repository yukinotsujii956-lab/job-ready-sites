const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const overlay = document.querySelector('.overlay');

function openNav() {
  toggle?.setAttribute('aria-expanded', 'true');
  nav?.classList.add('open');
  overlay?.removeAttribute('hidden');
  document.body.classList.add('nav-open', 'no-scroll');
}
function closeNav() {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('open');
  overlay?.setAttribute('hidden', '');
  document.body.classList.remove('nav-open', 'no-scroll');
}
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  open ? closeNav() : openNav();
});
overlay?.addEventListener('click', closeNav);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
// ナビ内リンクを押したら閉じる
document.querySelectorAll('#site-nav a').forEach(a => a.addEventListener('click', closeNav));
// 画面幅が広がったら強制クローズ
window.addEventListener('resize', () => { if (window.innerWidth > 768) closeNav(); });
