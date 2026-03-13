// cart.js — lógica de carrinho com localStorage

(function () {
  'use strict';

  var STORAGE_KEY = 'oudbrasil_cart';

  // ===================== HELPERS =====================

  function getCart() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      // silently fail
    }
  }

  function formatPrice(value) {
    return 'R$ ' + Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  // ===================== CART OPERATIONS =====================

  function addToCart(product) {
    var cart = getCart();
    var existing = cart.find(function (item) { return item.id === product.id; });
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1 });
    }
    saveCart(cart);
    updateCartBadge();
    renderCartItems();
  }

  function removeFromCart(id) {
    var cart = getCart().filter(function (item) { return item.id !== id; });
    saveCart(cart);
    updateCartBadge();
    renderCartItems();
  }

  function updateQty(id, delta) {
    var cart = getCart();
    var item = cart.find(function (i) { return i.id === id; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(function (i) { return i.id !== id; });
    }
    saveCart(cart);
    updateCartBadge();
    renderCartItems();
  }

  // ===================== UI UPDATES =====================

  function updateCartBadge() {
    var badge = document.getElementById('cart-badge');
    if (!badge) return;
    var cart = getCart();
    var total = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }

  function renderCartItems() {
    var container = document.getElementById('cart-items-list');
    var subtotalEl = document.getElementById('cart-subtotal-value');
    if (!container) return;

    var cart = getCart();

    if (cart.length === 0) {
      container.innerHTML = '<p class="cart-empty">Sua sacola está vazia.</p>';
      if (subtotalEl) subtotalEl.textContent = 'R$ 0,00';
      return;
    }

    var subtotal = 0;
    var html = '';

    cart.forEach(function (item) {
      subtotal += item.price * item.qty;
      html += '<div class="cart-item">' +
        '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '" /></div>' +
        '<div class="cart-item-details">' +
          '<span class="cart-item-name">' + item.name + '</span>' +
          '<span class="cart-item-price">' + formatPrice(item.price) + '</span>' +
          '<div class="cart-item-actions">' +
            '<div class="cart-qty">' +
              '<button data-action="minus" data-id="' + item.id + '" aria-label="Diminuir quantidade">&minus;</button>' +
              '<span>' + item.qty + '</span>' +
              '<button data-action="plus" data-id="' + item.id + '" aria-label="Aumentar quantidade">+</button>' +
            '</div>' +
            '<button class="cart-item-remove" data-action="remove" data-id="' + item.id + '">Remover</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    container.innerHTML = html;
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  }

  // ===================== DRAWER OPEN / CLOSE =====================

  function openCartDrawer() {
    var drawer = document.getElementById('cart-drawer');
    var backdrop = document.getElementById('cart-backdrop');
    if (drawer) { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); }
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  }

  function closeCartDrawer() {
    var drawer = document.getElementById('cart-drawer');
    var backdrop = document.getElementById('cart-backdrop');
    if (drawer) { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); }
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ===================== EVENT LISTENERS =====================

  document.addEventListener('DOMContentLoaded', function () {
    // Cart icon opens drawer
    var cartIcon = document.getElementById('cart-icon');
    if (cartIcon) cartIcon.addEventListener('click', openCartDrawer);

    // Close button
    var cartClose = document.getElementById('cart-close');
    if (cartClose) cartClose.addEventListener('click', closeCartDrawer);

    // Backdrop closes drawer
    var backdrop = document.getElementById('cart-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

    // Add to cart buttons
    document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
          id: btn.dataset.id,
          name: btn.dataset.name,
          price: Number(btn.dataset.price),
          img: btn.dataset.img
        });
        openCartDrawer();
      });
    });

    // Qty and remove buttons (event delegation)
    var itemsList = document.getElementById('cart-items-list');
    if (itemsList) {
      itemsList.addEventListener('click', function (e) {
        var target = e.target.closest('[data-action]');
        if (!target) return;
        var action = target.dataset.action;
        var id = target.dataset.id;
        if (action === 'plus') updateQty(id, 1);
        if (action === 'minus') updateQty(id, -1);
        if (action === 'remove') removeFromCart(id);
      });
    }

    // ESC key closes drawer
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeCartDrawer();
    });

    // Initial badge update
    updateCartBadge();
  });

  // Expose addToCart globally for favorites.js integration
  window.OudBrasilCart = { addToCart: addToCart, openCartDrawer: openCartDrawer };
})();
