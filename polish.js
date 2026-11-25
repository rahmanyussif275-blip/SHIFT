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

  // Load the glass drawer styles and add validated delivery/contact details to checkout.
  const bagStyles = document.createElement('link');
  bagStyles.rel = 'stylesheet';
  bagStyles.href = 'bag-enhancements.css';
  document.head.appendChild(bagStyles);

  function setupWhatsAppCheckout() {
    const orderButton = $('#orderEnquiry');
    const cartItems = $('#cartItems');
    if (!orderButton || !cartItems || $('#deliveryForm')) return;

    const form = document.createElement('form');
    form.id = 'deliveryForm';
    form.className = 'delivery-form';
    form.noValidate = false;
    form.innerHTML = `
      <h3>Delivery &amp; contact details</h3>
      <label for="deliveryName">Full name <span aria-hidden="true">*</span></label>
      <input id="deliveryName" name="name" autocomplete="name" required maxlength="80" placeholder="Name for delivery">
      <label for="deliveryPhone">Phone number <span aria-hidden="true">*</span></label>
      <input id="deliveryPhone" name="phone" type="tel" autocomplete="tel" required minlength="7" maxlength="20" pattern="[+0-9()\\s-]{7,20}" placeholder="e.g. 053 862 3281">
      <label for="deliveryAddress">Delivery location / address <span aria-hidden="true">*</span></label>
      <textarea id="deliveryAddress" name="address" autocomplete="street-address" required maxlength="300" rows="2" placeholder="Area, town and delivery directions"></textarea>
      <label for="deliveryNotes">Additional delivery notes <span class="optional">(optional)</span></label>
      <textarea id="deliveryNotes" name="notes" maxlength="250" rows="2" placeholder="Anything else we should know?"></textarea>
      <p class="delivery-hint">We’ll open WhatsApp with your order details so you can send them to SHIFT.</p>`;
    orderButton.parentNode.insertBefore(form, orderButton);
    orderButton.textContent = 'ORDER NOW';
    orderButton.setAttribute('type', 'button');

    orderButton.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!cartItems.querySelector('.cart-line')) {
        notify('Your bag is empty. Add a piece first.');
        return;
      }
      if (!form.reportValidity()) {
        form.querySelector(':invalid')?.focus();
        return;
      }
      const data = new FormData(form);
      const lines = [...cartItems.querySelectorAll('.cart-line')].map((line, index) => {
        const details = line.innerText.replace(/\s+/g, ' ').trim();
        return `${index + 1}. ${details}`;
      });
      const total = $('#cartTotal')?.textContent.trim() || 'See item prices';
      const message = [
        'SHIFT ORDER',
        '',
        `Name: ${data.get('name').trim()}`,
        `Customer phone: ${data.get('phone').trim()}`,
        `Delivery address: ${data.get('address').trim()}`,
        data.get('notes').trim() ? `Delivery notes: ${data.get('notes').trim()}` : '',
        '',
        'ORDER ITEMS',
        ...lines,
        '',
        `Order total: ${total}`
      ].filter(Boolean).join('\n');
      const whatsappUrl = `https://wa.me/233538623281?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupWhatsAppCheckout, { once: true });
  else setupWhatsAppCheckout();

  const adminScript = document.createElement('script');
  adminScript.src = 'admin.js';
  adminScript.defer = true;
  document.head.appendChild(adminScript);
})();
