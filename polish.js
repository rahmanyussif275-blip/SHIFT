(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const key = 'shift-gh-wishlist-v1';
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(key)) || []; } catch { saved = []; }
  const persist = () => { try { localStorage.setItem(key, JSON.stringify(saved)); } catch {} };
  const toast = message => {
    const node = $('#toast');
    if (!node) return;
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(window.shiftToastTimer);
    window.shiftToastTimer = setTimeout(() => node.classList.remove('show'), 2400);
  };
  function syncCards() {
    $$('.product-card').forEach(card => {
      const opener = $('[data-open]', card), heart = $('.heart', card);
      if (!opener || !heart) return;
      const id = opener.dataset.open;
      heart.dataset.wishlist = id;
      const active = saved.includes(id);
      heart.setAttribute('aria-pressed', String(active));
      heart.textContent = active ? '♥' : '♡';
      heart.setAttribute('aria-label', `${active ? 'Remove from' : 'Add to'} wishlist`);
      const quick = $('.add-quick', card);
      if (quick) quick.textContent = 'CHOOSE OPTIONS +';
    });
  }
  const grid = $('#productGrid');
  if (grid) {
    syncCards();
    new MutationObserver(syncCards).observe(grid, { childList: true, subtree: true });
    grid.addEventListener('click', event => {
      const heart = event.target.closest('[data-wishlist]');
      if (!heart) return;
      event.preventDefault();
      event.stopPropagation();
      const id = heart.dataset.wishlist;
      saved = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id];
      persist();
      syncCards();
      toast(saved.includes(id) ? 'Saved to your wishlist on this device.' : 'Removed from your wishlist.');
    });
  }
  const menu = $('#menuToggle'), nav = $('#nav');
  if (menu && nav) {
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', () => {
      requestAnimationFrame(() => menu.setAttribute('aria-expanded', String(nav.classList.contains('nav-open'))));
    });
  }
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) {
      event.preventDefault();
      $('#shop')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => $('#searchInput')?.focus(), 250);
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      $('#shop')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => $('#searchInput')?.focus(), 250);
    }
  });
  // Respect native dialog dismissal, including clicks on the backdrop.
  const dialog = $('#productDialog');
  if (dialog) dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();
