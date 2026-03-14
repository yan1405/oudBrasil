// checkout.js — lógica do checkout
(function () {
  'use strict';

  function formatPrice(val) {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function getCart() {
    try { return JSON.parse(localStorage.getItem('oudbrasil_cart')) || []; }
    catch (e) { return []; }
  }

  function renderResumo() {
    var cart = getCart();
    var itensEl = document.getElementById('checkout-itens');
    var subtotalEl = document.getElementById('checkout-subtotal');
    var totalEl = document.getElementById('checkout-total');
    var freteEl = document.getElementById('checkout-frete');
    if (!itensEl) return;

    if (cart.length === 0) {
      itensEl.innerHTML = '<p style="color:var(--clr-muted);font-size:13px">Seu carrinho está vazio.</p>';
      return;
    }

    itensEl.innerHTML = cart.map(function (item) {
      return '<div class="checkout-item">' +
        '<img src="' + item.img + '" alt="' + item.name + '" />' +
        '<div>' +
          '<p class="checkout-item-nome">' + item.name + '</p>' +
          '<p class="checkout-item-qty">Qtd: ' + item.qty + '</p>' +
        '</div>' +
        '<span class="checkout-item-preco">' + formatPrice(item.price * item.qty) + '</span>' +
      '</div>';
    }).join('');

    var subtotal = cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    var frete = subtotal >= 299 ? 0 : 29.90;
    var total = subtotal + frete;

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (freteEl) freteEl.textContent = frete === 0 ? 'Grátis' : formatPrice(frete);
    if (totalEl) totalEl.textContent = formatPrice(total);
  }

  function irPara(etapaId) {
    document.querySelectorAll('.checkout-etapa').forEach(function (e) {
      e.classList.remove('active');
    });
    var etapa = document.getElementById(etapaId);
    if (etapa) etapa.classList.add('active');

    var steps = document.querySelectorAll('.checkout-step');
    var mapa = { 'etapa-entrega': 0, 'etapa-pagamento': 1, 'etapa-confirmacao': 2 };
    steps.forEach(function (s, i) {
      if (i === mapa[etapaId]) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderResumo();

    var btnAvancar = document.getElementById('btn-avancar-pagamento');
    if (btnAvancar) {
      btnAvancar.addEventListener('click', function () {
        irPara('etapa-pagamento');
      });
    }

    var btnVoltar = document.getElementById('btn-voltar-entrega');
    if (btnVoltar) {
      btnVoltar.addEventListener('click', function () {
        irPara('etapa-entrega');
      });
    }

    var btnFinalizar = document.getElementById('btn-finalizar');
    if (btnFinalizar) {
      btnFinalizar.addEventListener('click', function () {
        var num = Math.floor(Math.random() * 900) + 100;
        var numEl = document.getElementById('confirmacao-numero');
        if (numEl) numEl.textContent = num;
        try { localStorage.removeItem('oudbrasil_cart'); } catch (e) {}
        irPara('etapa-confirmacao');
      });
    }

    document.querySelectorAll('input[name="pagamento"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        var cartaoForm = document.getElementById('cartao-form');
        if (cartaoForm) cartaoForm.style.display = radio.value === 'cartao' ? '' : 'none';
      });
    });
  });
})();
