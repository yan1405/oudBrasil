// conta.js — lógica de login e cadastro
(function () {
  'use strict';
  const tabs = document.querySelectorAll('.conta-tab');
  const forms = document.querySelectorAll('.conta-form-wrap');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      forms.forEach(f => f.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('form-' + tab.dataset.tab)?.classList.add('active');
    });
  });
})();
