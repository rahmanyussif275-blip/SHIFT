(() => {
  'use strict';
  const STORAGE_KEY = 'shift-gh-product-fit-images-v1';
  const defaults = [
    { key: 'slim', label: 'Slim build · size S', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=84' },
    { key: 'regular', label: 'Regular build · size M', url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=84' },
    { key: 'plus', label: 'Plus build · size XL', url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=84' }
  ];
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const read = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } };
  const write = value => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch {} };
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));

  function installAdminFields() {
    const productSection = $('.admin-product');
    const productSelect = $('#adminProduct');
    if (!productSection || !productSelect || $('#adminFitSlim')) return false;
    const fields = document.createElement('section');
    fields.className = 'admin-fit-images';
    fields.innerHTML = `<h3>Fit photos for this product</h3><p>These URLs belong only to the selected product and won’t change other products.</p>${defaults.map(item => `<label>${item.label} photo URL<input id="adminFit${item.key[0].toUpperCase()+item.key.slice(1)}" type="url" inputmode="url" placeholder="https://..."></label><div class="admin-preview"><img id="adminFitPreview${item.key[0].toUpperCase()+item.key.slice(1)}" alt="${item.label} preview"><span>Preview</span></div>`).join('')}`;
    productSection.appendChild(fields);

    const fill = () => {
      const values = read()[productSelect.value] || {};
      defaults.forEach(item => {
        const cap = item.key[0].toUpperCase() + item.key.slice(1);
        const input = $(`#adminFit${cap}`);
        const preview = $(`#adminFitPreview${cap}`);
        if (input) input.value = values[item.key] || '';
        if (preview) preview.src = values[item.key] || item.url;
      });
    };
    defaults.forEach(item => {
      const cap = item.key[0].toUpperCase() + item.key.slice(1);
      $(`#adminFit${cap}`).addEventListener('input', event => {
        $(`#adminFitPreview${cap}`).src = event.target.value.trim() || item.url;
      });
    });
    productSelect.addEventListener('change', fill);
    $('.admin-editor')?.addEventListener('submit', () => {
      const id = productSelect.value;
      if (!id || $('#adminScope').value !== 'product') return;
      const all = read();
      all[id] = Object.fromEntries(defaults.map(item => {
        const cap = item.key[0].toUpperCase() + item.key.slice(1);
        return [item.key, $(`#adminFit${cap}`).value.trim()];
      }));
      write(all);
    }, true);
    fill();
    return true;
  }

  function installProductGallery() {
    const dialog = $('#productDialog');
    if (!dialog || dialog.dataset.fitGalleryReady) return Boolean(dialog);
    dialog.dataset.fitGalleryReady = 'true';
    const observer = new MutationObserver(() => {
      if (!dialog.open) return;
      const name = $('#modalName')?.textContent.trim();
      const card = $$('.product-card').find(element => $('.product-name', element)?.textContent.trim() === name);
      const productId = $('[data-open]', card)?.dataset.open;
      const target = $('#productFitPreview');
      if (!target || !productId) return;
      target.hidden = true;
      let gallery = $('#individualFitGallery', dialog);
      if (!gallery) {
        gallery = document.createElement('section');
        gallery.id = 'individualFitGallery';
        gallery.className = 'individual-fit-gallery';
        target.insertAdjacentElement('afterend', gallery);
      }
      const custom = read()[productId] || {};
      gallery.innerHTML = `<h3>See the fit</h3><div class="individual-fit-grid">${defaults.map(item => `<figure><img src="${esc(custom[item.key] || item.url)}" alt="${esc(item.label)} wearing ${esc(name)}" loading="lazy"><figcaption>${esc(item.label)}</figcaption></figure>`).join('')}</div>`;
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ['open'], childList: true, subtree: true, characterData: true });
    return true;
  }

  function start() {
    const adminObserver = new MutationObserver(() => {
      if (installAdminFields()) adminObserver.disconnect();
    });
    adminObserver.observe(document.body, { childList: true, subtree: true });
    installAdminFields();
    installProductGallery();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
