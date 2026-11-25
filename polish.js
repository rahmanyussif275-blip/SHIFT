(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const wishlistKey = 'shift-gh-wishlist-v1';
  let wishlist = [];
  try { wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || []; } catch { wishlist = []; }
  const save = () => { try { localStorage.setItem(wishlistKey, JSON.stringify(wishlist)); } catch {} };
  const notify = message => {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.shiftToastTimer);
    window.shiftToastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  };
  function syncCards() {
    $$('.product-card').forEach(card => {
      const opener = $('[data-open]', card), heart = $('.heart', card);
      if (!opener || !heart) return;
      const id = opener.dataset.open;
      heart.dataset.wishlist = id;
      const active = wishlist.includes(id);
      heart.textContent = active ? '♥' : '♡';
      heart.setAttribute('aria-pressed', String(active));
      heart.setAttribute('aria-label', active ? 'Remove from wishlist' : 'Add to wishlist');
    });
  }
  const grid = $('#productGrid');
  if (grid) {
    syncCards();
    new MutationObserver(syncCards).observe(grid, { childList: true, subtree: true });
    grid.addEventListener('click', event => {
      const button = event.target.closest('[data-wishlist]');
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      const id = button.dataset.wishlist;
      wishlist = wishlist.includes(id) ? wishlist.filter(value => value !== id) : [...wishlist, id];
      save(); syncCards();
      notify(wishlist.includes(id) ? 'Saved to your wishlist on this device.' : 'Removed from your wishlist.');
    });
  }
  const menu = $('#menuToggle'), nav = $('#nav');
  if (menu && nav) {
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => requestAnimationFrame(() => menu.setAttribute('aria-expanded', String(nav.classList.contains('nav-open')))));
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        nav.classList.remove('nav-open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }
  document.addEventListener('keydown', event => {
    if ((event.key === '/' || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k')) && !/input|textarea|select/i.test(document.activeElement.tagName)) {
      event.preventDefault();
      $('#shop')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => $('#searchInput')?.focus(), 250);
    }
  });
  const dialog = $('#productDialog');
  if (dialog) dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();
