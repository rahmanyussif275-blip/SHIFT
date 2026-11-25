(() => {
  'use strict';
  const PASSWORD = 'Bellingham123@';
  const STORE = 'shift-gh-site-overrides-v1';
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const read = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {global:{},products:{}} } catch { return {global:{},products:{}} } };
  let state = read();

  const css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = 'admin.css'; document.head.appendChild(css);

  const button = document.createElement('button');
  button.type = 'button'; button.className = 'admin-launch'; button.setAttribute('aria-haspopup','dialog'); button.innerHTML = '<span aria-hidden="true">⚙</span><b>Admin</b>'; document.body.appendChild(button);

  const panel = document.createElement('aside');
  panel.className = 'admin-panel'; panel.setAttribute('role','dialog'); panel.setAttribute('aria-label','Website editor'); panel.setAttribute('aria-hidden','true');
  panel.innerHTML = `
    <div class="admin-head"><div><span>SITE EDITOR</span><h2>Admin menu</h2></div><button type="button" class="admin-close" aria-label="Close admin menu">×</button></div>
    <div class="admin-lock"><label for="adminPassword">Password</label><div><input id="adminPassword" type="password" autocomplete="current-password" placeholder="Enter password"><button type="button" id="adminUnlock">UNLOCK</button></div><p class="admin-message"></p></div>
    <form class="admin-editor" hidden>
      <label>Editing scope<select id="adminScope"><option value="global">General website text</option><option value="product">Selected product</option></select></label>
      <div class="admin-global">
        <label>Announcement<input id="adminAnnouncement" maxlength="120"></label>
        <label>Hero title<input id="adminHeroTitle" maxlength="100"></label>
        <label>Hero description<textarea id="adminHeroDescription" maxlength="180"></textarea></label>
        <label>Primary button text<input id="adminHeroButton" maxlength="40"></label>
        <label>Hero image URL<input id="adminHeroImage" type="url" placeholder="https://..."></label>
        <div class="admin-preview"><img id="adminHeroPreview" alt="Hero image preview"><span>Preview</span></div>
      </div>
      <div class="admin-product" hidden>
        <label>Choose product<select id="adminProduct"></select></label>
        <label>Product name<input id="adminName" maxlength="100"></label>
        <label>Price (GH₵)<input id="adminPrice" type="number" min="0" step="1"></label>
        <label>Product label<input id="adminLabel" maxlength="60"></label>
        <label>Photo URL<input id="adminPhoto" type="url" placeholder="https://..."></label>
        <div class="admin-preview"><img id="adminPreview" alt="Product preview"><span>Preview</span></div>
      </div>
      <div class="admin-actions"><button type="button" id="adminReset" class="admin-secondary">RESET CHANGES</button><button type="submit" class="admin-save">SAVE CHANGES</button></div>
      <p class="admin-message"></p>
    </form>`;
  document.body.appendChild(panel);

  const lock = () => { panel.querySelector('.admin-lock').hidden = false; panel.querySelector('.admin-editor').hidden = true; $('#adminPassword', panel).value = ''; setTimeout(() => $('#adminPassword', panel).focus(), 100); };
  const openPanel = () => { panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); lock(); };
  const closePanel = () => { panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); };
  button.addEventListener('click', openPanel); $('.admin-close', panel).addEventListener('click', closePanel);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  $('#adminUnlock', panel).addEventListener('click', () => {
    const input = $('#adminPassword', panel);
    const message = $('.admin-lock .admin-message', panel);
    if (input.value !== PASSWORD) { message.textContent = 'Incorrect password.'; input.select(); return; }
    message.textContent = ''; panel.querySelector('.admin-lock').hidden = true; panel.querySelector('.admin-editor').hidden = false; fillGeneral(); fillProducts();
  });
  $('#adminPassword', panel).addEventListener('keydown', e => { if (e.key === 'Enter') $('#adminUnlock', panel).click(); });

  function fillGeneral() {
    const g = state.global || {};
    $('#adminAnnouncement').value = g.announcement ?? ($('.announcement')?.textContent.trim() || '');
    $('#adminHeroTitle').value = g.heroTitle ?? ($('#home h1')?.textContent.trim().replace(/\s+/g,' ') || '');
    $('#adminHeroDescription').value = g.heroDescription ?? ($('#home .hero-content>p')?.textContent.trim() || '');
    $('#adminHeroButton').value = g.heroButton ?? ($('#home .hero-actions a')?.textContent.trim() || 'SHOP COLLECTION');
    $('#adminHeroImage').value = g.heroImage ?? '';
    updateHeroPreview();
  }
  function updateHeroPreview() {
    const value = $('#adminHeroImage').value.trim();
    $('#adminHeroPreview').src = value || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="180"%3E%3Crect width="100%25" height="100%25" fill="%23ece9e2"/%3E%3C/svg%3E';
  }
  function fillProducts() {
    const select = $('#adminProduct');
    const cards = $$('.product-card');
    select.innerHTML = cards.map((card, i) => {
      const id = $('[data-open]', card)?.dataset.open || `card-${i}`;
      const name = $('.product-name', card)?.textContent.trim() || `Product ${i+1}`;
      return `<option value="${id}">${name}</option>`;
    }).join('');
    loadSelectedProduct();
  }
  function getCard(id) { return $$('.product-card').find(card => $('[data-open]', card)?.dataset.open === id); }
  function loadSelectedProduct() {
    const id = $('#adminProduct').value;
    const card = getCard(id), override = state.products[id] || {};
    $('#adminName').value = override.name ?? ($('.product-name',card)?.textContent.trim() || '');
    $('#adminPrice').value = override.price ?? (parseFloat($('.card-bottom strong',card)?.textContent.replace(/[^0-9.]/g,'')) || 0);
    $('#adminLabel').value = override.label ?? ($('.card-meta span',card)?.textContent.trim() || '');
    $('#adminPhoto').value = override.photo ?? ($('.product-photo img',card)?.src || '');
    updatePreview();
  }
  function updatePreview() {
    const value = $('#adminPhoto').value.trim();
    $('#adminPreview').src = value || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="100%25" height="100%25" fill="%23ece9e2"/%3E%3C/svg%3E';
  }

  $('#adminScope').addEventListener('change', e => {
    $('.admin-global').hidden = e.target.value !== 'global'; $('.admin-product').hidden = e.target.value !== 'product';
  });
  $('#adminProduct').addEventListener('change', loadSelectedProduct);
  $('#adminPhoto').addEventListener('input', updatePreview);
  $('#adminHeroImage').addEventListener('input', updateHeroPreview);

  function applyGlobal() {
    const g = state.global || {};
    if (g.announcement && $('.announcement')) $('.announcement').textContent = g.announcement;
    if (g.heroTitle && $('#home h1')) $('#home h1').textContent = g.heroTitle;
    if (g.heroDescription && $('#home .hero-content>p')) $('#home .hero-content>p').textContent = g.heroDescription;
    if (g.heroButton && $('#home .hero-actions a')) $('#home .hero-actions a').textContent = g.heroButton;
    if (g.heroImage) {
      const heroImage = $('.hero-image');
      if (heroImage) heroImage.style.backgroundImage = `linear-gradient(rgba(20,24,34,.08),rgba(20,24,34,.08)),url("${g.heroImage.replace(/"/g,'%22')}")`;
    }
  }
  function applyProduct(id, value) {
    const card = getCard(id); if (!card) return;
    if (value.name) { const name = $('.product-name',card); if (name) name.textContent = value.name; }
    if (value.price !== undefined) { const price = $('.card-bottom strong',card); if (price) price.textContent = `GH₵${Number(value.price).toFixed(2)}`; }
    if (value.label) { const label = $('.card-meta span',card); if (label) label.textContent = value.label; }
    if (value.photo) { const image = $('.product-photo img',card); if (image) image.src = value.photo; }
  }
  function applyAll() { applyGlobal(); Object.entries(state.products).forEach(([id,value]) => applyProduct(id,value)); }

  $('.admin-editor').addEventListener('submit', e => {
    e.preventEvent = true;
    e.preventDefault();
    const scope = $('#adminScope').value;
    if (scope === 'global') {
      state.global = {announcement:$('#adminAnnouncement').value.trim(),heroTitle:$('#adminHeroTitle').value.trim(),heroDescription:$('#adminHeroDescription').value.trim(),heroButton:$('#adminHeroButton').value.trim(),heroImage:$('#adminHeroImage').value.trim()};
    } else {
      const id = $('#adminProduct').value;
      state.products[id] = {name:$('#adminName').value.trim(),price:Math.max(0,Number($('#adminPrice').value)||0),label:$('#adminLabel').value.trim(),photo:$('#adminPhoto').value.trim()};
    }
    localStorage.setItem(STORE, JSON.stringify(state)); applyAll();
    $('.admin-editor .admin-message').textContent = 'Changes saved on this device.';
  });
  $('#adminReset').addEventListener('click', () => {
    if (!confirm('Reset all website edits saved in this browser?')) return;
    localStorage.removeItem(STORE); state = {global:{},products:{}};
    location.reload();
  });

  applyAll();
})();
