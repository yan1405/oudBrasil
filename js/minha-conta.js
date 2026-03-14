// minha-conta.js — navegação entre seções da área do cliente
(function () {
  'use strict';
  const navBtns = document.querySelectorAll('.mc-nav-btn');
  if (!navBtns.length) return;
  navBtns.forEach(btn => {
    if (btn.classList.contains('mc-nav-sair')) {
      btn.addEventListener('click', () => { window.location.href = 'conta.html'; });
      return;
    }
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.mc-section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('mc-' + btn.dataset.section)?.classList.add('active');
    });
  });
})();
