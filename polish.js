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

  ['bag-enhancements.css', 'bag-buttons.css'].forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  });

  function setupWhatsAppCheckout() {
    const orderButton = $('#orderEnquiry');
    const cartItems = $('#cartItems');
    if (!orderButton || !cartItems || $('#deliveryForm')) return;

    const form = document.createElement('form');
    form.id = 'deliveryForm';
    form.className = 'delivery-form';
    form.innerHTML = `
      <h3>Delivery &amp; contact details</h3>
      <label for="deliveryName">Full name <span aria-hidden="true">*</span></label>
      <input id="deliveryName" name="name" autocomplete="name" required maxlength="80" placeholder="Name for delivery">
      <label for="deliveryPhone">Phone number <span aria-hidden="true">*</span></label>
      <input id="deliveryPhone" name="phone" type="tel" autocomplete="tel" required minlength="7" maxlength="20" pattern="[+0-9()\\s-]{7,20}" placeholder="Enter your phone number">
      <label for="deliveryAddress">Delivery location / address <span aria-hidden="true">*</span></label>
      <textarea id="deliveryAddress" name="address" autocomplete="street-address" required maxlength="300" rows="2" placeholder="Area, town and delivery directions"></textarea>
      <label for="deliveryNotes">Additional delivery notes <span class="optional">(optional)</span></label>
      <textarea id="deliveryNotes" name="notes" maxlength="250" rows="2" placeholder="Anything else we should know?"></textarea>`;

    const drawer = $('#cartDrawer');
    const scrollArea = document.createElement('div');
    scrollArea.className = 'cart-scroll';
    cartItems.parentNode.insertBefore(scrollArea, cartItems);
    scrollArea.append(cartItems, form);

    const header = $('.drawer-head', drawer);
    const total = $('.cart-total', drawer);
    const footer = orderButton.closest('.cart-foot, .cart-footer');
    const continueButton = $('#continueShopping', drawer);
    const note = footer?.querySelector('p');

    if (header && total) {
      const closeButton = $('#closeCart', header);
      if (closeButton) header.insertBefore(total, closeButton);
      else header.append(total);
    }
    if (note) {
      note.textContent = 'Your order enquiry is ready. Copy it and send it to SHIFT.GH to confirm availability and delivery. No payment is processed on this demo.';
      note.classList.add('checkout-note');
      scrollArea.appendChild(note);
    }
    if (continueButton) {
      continueButton.classList.add('scrolling-cart-action');
      scrollArea.appendChild(continueButton);
    }

    orderButton.textContent = 'ORDER NOW';
    orderButton.setAttribute('type', 'button');
    orderButton.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const cartData = JSON.parse(localStorage.getItem('shift-gh-cart-v2') || '[]');
      if (!cartData.length) {
        notify('Your bag is empty. Add a piece first.');
        return;
      }
      if (!form.reportValidity()) {
        form.querySelector(':invalid')?.focus();
        return;
      }

      const data = new FormData(form);
      const itemLines = cartData.map((item, index) => {
        const line = cartItems.querySelectorAll('.cart-line')[index];
        const name = line?.querySelector('.line-copy b')?.textContent.trim() || item.name || 'SHIFT item';
        const color = item.color || line?.querySelector('.line-meta')?.textContent.replace(/.*COLOR:/i, '').replace(/SIZE:.*/i, '').trim() || 'Not specified';
        const size = item.size || 'Not specified';
        const quantity = Number(item.qty) || 1;
        return `${index + 1}. ${name}\n   Color: ${color}\n   Size: ${size}\n   Quantity: ${quantity}`;
      });
      const amount = $('#cartTotal')?.querySelector('strong')?.textContent.trim() || $('#cartTotal')?.textContent.trim() || 'See item prices';
      const message = [
        'SHIFT ORDER', '',
        `Name: ${data.get('name').trim()}`,
        `Customer phone: ${data.get('phone').trim()}`,
        `Delivery address: ${data.get('address').trim()}`,
        data.get('notes').trim() ? `Delivery notes: ${data.get('notes').trim()}` : '',
        '', 'ORDER ITEMS', ...itemLines, '', `Order total: ${amount}`
      ].filter(Boolean).join('\n');
      window.open(`https://wa.me/233538623281?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupWhatsAppCheckout, { once: true });
  else setupWhatsAppCheckout();

  ['admin.js', 'catalog-control.js', 'site-image-admin.js'].forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  });
})();
