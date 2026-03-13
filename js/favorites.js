// favorites.js — lógica de favoritos com localStorage

(function () {
  'use strict';

  var STORAGE_KEY = 'oudbrasil_favorites';

  // ===================== HELPERS =====================

  function getFavorites() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites(favorites) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
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

  // ===================== FAVORITES OPERATIONS =====================

  function isFavorite(id) {
    return getFavorites().some(function (item) { return item.id === id; });
  }

  function toggleFavorite(product) {
    var favorites = getFavorites();
    var index = favorites.findIndex(function (item) { return item.id === product.id; });
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push({ id: product.id, name: product.name, price: product.price, img: product.img });
    }
    saveFavorites(favorites);
    updateFavoritesBadge();
    updateFavoriteButtons();
    renderFavoritesItems();
  }

  function removeFromFavorites(id) {
    var favorites = getFavorites().filter(function (item) { return item.id !== id; });
    saveFavorites(favorites);
    updateFavoritesBadge();
    updateFavoriteButtons();
    renderFavoritesItems();
  }

  // ===================== UI UPDATES =====================

  function updateFavoritesBadge() {
    var badge = document.getElementById('favorites-badge');
    if (!badge) return;
    var count = getFavorites().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  function updateFavoriteButtons() {
    document.querySelectorAll('.btn-favorite').forEach(function (btn) {
      var id = btn.dataset.id;
      if (isFavorite(id)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function renderFavoritesItems() {
    var container = document.getElementById('favorites-items-list');
    if (!container) return;

    var favorites = getFavorites();

    if (favorites.length === 0) {
      container.innerHTML = '<p class="favorites-empty">Sua lista de desejos está vazia.</p>';
      return;
    }

    var html = '';

    favorites.forEach(function (item) {
      html += '<div class="favorites-item">' +
        '<div class="favorites-item-img"><img src="' + item.img + '" alt="' + item.name + '" /></div>' +
        '<div class="favorites-item-details">' +
          '<span class="favorites-item-name">' + item.name + '</span>' +
          '<span class="favorites-item-price">' + formatPrice(item.price) + '</span>' +
          '<div class="favorites-item-actions">' +
            '<button class="btn btn-primary" data-action="add-to-cart" data-id="' + item.id + '" data-name="' + item.name + '" data-price="' + item.price + '" data-img="' + item.img + '">Adicionar ao carrinho</button>' +
            '<button class="favorites-item-remove" data-action="remove-fav" data-id="' + item.id + '">Remover</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    container.innerHTML = html;
  }

  // ===================== DRAWER OPEN / CLOSE =====================

  function openFavoritesDrawer() {
    var drawer = document.getElementById('favorites-drawer');
    var backdrop = document.getElementById('favorites-backdrop');
    if (drawer) { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); }
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderFavoritesItems();
  }

  function closeFavoritesDrawer() {
    var drawer = document.getElementById('favorites-drawer');
    var backdrop = document.getElementById('favorites-backdrop');
    if (drawer) { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); }
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ===================== EVENT LISTENERS =====================

  document.addEventListener('DOMContentLoaded', function () {
    // Favorites icon opens drawer
    var favIcon = document.getElementById('favorites-icon');
    if (favIcon) favIcon.addEventListener('click', openFavoritesDrawer);

    // Close button
    var favClose = document.getElementById('favorites-close');
    if (favClose) favClose.addEventListener('click', closeFavoritesDrawer);

    // Backdrop closes drawer
    var backdrop = document.getElementById('favorites-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeFavoritesDrawer);

    // Favorite toggle buttons on product cards
    document.querySelectorAll('.btn-favorite').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite({
          id: btn.dataset.id,
          name: btn.dataset.name,
          price: Number(btn.dataset.price),
          img: btn.dataset.img
        });
      });
    });

    // Event delegation for drawer actions
    var itemsList = document.getElementById('favorites-items-list');
    if (itemsList) {
      itemsList.addEventListener('click', function (e) {
        var target = e.target.closest('[data-action]');
        if (!target) return;
        var action = target.dataset.action;

        if (action === 'remove-fav') {
          removeFromFavorites(target.dataset.id);
        }

        if (action === 'add-to-cart' && window.OudBrasilCart) {
          window.OudBrasilCart.addToCart({
            id: target.dataset.id,
            name: target.dataset.name,
            price: Number(target.dataset.price),
            img: target.dataset.img
          });
          closeFavoritesDrawer();
          window.OudBrasilCart.openCartDrawer();
        }
      });
    }

    // ESC key closes drawer
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeFavoritesDrawer();
    });

    // Initial state
    updateFavoritesBadge();
    updateFavoriteButtons();
  });

  // Expose for cross-module integration (product-modal)
  window.OudBrasilFavorites = { toggleFavorite: toggleFavorite };
})();
