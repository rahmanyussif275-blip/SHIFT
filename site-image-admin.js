(() => {
  'use strict';

  const STORE = 'shift-gh-site-images-v1';
  const $ = (selector, root = document) => root.querySelector(selector);

  const read = () => {
    try { return JSON.parse(localStorage.getItem(STORE) || '{}'); }
    catch { return {}; }
  };

  const write = value => {
    try {
      localStorage.setItem(STORE, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  };

  const escapeHtml = value => String(value).replace(/[&<>\"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);

  let panelReady = false;
  let elements = [];
  let targetSelect;
  let urlInput;
  let previewImage;

  function elementSelector(element) {
    if (element.id) return `#${CSS.escape(element.id)}`;

    const parts = [];
    let node = element;

    while (node && node !== document.body) {
      let part = node.tagName.toLowerCase();

      if (node.parentElement) {
        const peers = [...node.parentElement.children]
          .filter(child => child.tagName === node.tagName);

        if (peers.length > 1) {
          part += `:nth-of-type(${peers.indexOf(node) + 1})`;
        }
      }

      parts.unshift(part);
      node = node.parentElement;
    }

    return `body > ${parts.join(' > ')}`;
  }

  function excluded(element) {
    return Boolean(element.closest(
      '.admin-panel, #productGrid, #productDialog, #cartDrawer'
    ));
  }

  function collectEditableImages() {
    const results = [];

    document.querySelectorAll('img').forEach(image => {
      if (excluded(image)) return;

      results.push({
        key: `img:${elementSelector(image)}`,
        label: `Image — ${image.alt || image.className || image.tagName}`,
        element: image,
        kind: 'image'
      });
    });

    document.querySelectorAll('body *').forEach(element => {
      if (excluded(element)) return;

      const style = getComputedStyle(element);
      if (style.backgroundImage && style.backgroundImage !== 'none') {
        results.push({
          key: `background:${elementSelector(element)}`,
          label: `Background — ${element.id || element.className || element.tagName}`,
          element,
          kind: 'background',
          original: style.backgroundImage
        });
      }
    });

    return results;
  }

  function applySavedImages() {
    const saved = read();

    collectEditableImages().forEach(item => {
      if (!saved[item.key]) return;

      if (item.kind === 'image') {
        item.element.src = saved[item.key];
      } else {
        item.element.style.backgroundImage =
          `url("${saved[item.key].replace(/"/g, '%22')}")`;
      }
    });
  }

  function refreshTarget(keepSelected = true) {
    if (!targetSelect) return;

    const previous = targetSelect.value;
    elements = collectEditableImages();

    targetSelect.innerHTML = elements.map((item, index) =>
      `<option value="${index}">${escapeHtml(item.label)}</option>`
    ).join('');

    if (keepSelected && previous && Number(previous) < elements.length) {
      targetSelect.value = previous;
    }

    showSelected();
  }

  function showSelected() {
    if (!elements.length) return;

    const item = elements[Number(targetSelect.value) || 0];
    const saved = read();

    urlInput.value = saved[item.key] || (
      item.kind === 'image'
        ? item.element.src
        : ''
    );

    previewImage.src = urlInput.value ||
      item.element.src ||
      'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  }

  function install() {
    if (panelReady) return;

    const editor = $('.admin-editor');
    const globalSection = $('.admin-global');

    if (!editor || !globalSection) return;

    panelReady = true;

    const section = document.createElement('section');
    section.id = 'adminSiteImages';
    section.innerHTML = `
      <h3>All website images and backgrounds</h3>
      <p>Choose an image or background outside the clothes grid. Individual cloth and fit images are controlled in the Clothes / product slots section.</p>

      <label for="adminSiteImageTarget">Website image or background</label>
      <select id="adminSiteImageTarget"></select>

      <label for="adminSiteImageUrl">Image URL</label>
      <input id="adminSiteImageUrl" type="url" placeholder="https://...">

      <div class="admin-preview">
        <img id="adminSiteImagePreview" alt="Selected image preview">
      </div>

      <div class="admin-actions">
        <button type="button" id="adminSiteImageSave" class="admin-save">SAVE IMAGE</button>
        <button type="button" id="adminSiteImageReset" class="admin-secondary">RESTORE ORIGINAL</button>
      </div>

      <p id="adminSiteImageMessage" role="status"></p>
    `;

    globalSection.appendChild(section);

    targetSelect = $('#adminSiteImageTarget');
    urlInput = $('#adminSiteImageUrl');
    previewImage = $('#adminSiteImagePreview');

    refreshTarget(false);

    targetSelect.addEventListener('change', showSelected);

    urlInput.addEventListener('input', () => {
      previewImage.src = urlInput.value.trim();
    });

    $('#adminSiteImageSave').addEventListener('click', () => {
      const item = elements[Number(targetSelect.value)];
      const url = urlInput.value.trim();
      const message = $('#adminSiteImageMessage');

      if (!item) return;

      if (!/^https?:\/\//i.test(url)) {
        message.textContent = 'Enter a complete http or https image URL.';
        return;
      }

      const saved = read();
      saved[item.key] = url;

      if (!write(saved)) {
        message.textContent = 'Could not save changes in this browser.';
        return;
      }

      if (item.kind === 'image') {
        item.element.src = url;
      } else {
        item.element.style.backgroundImage =
          `url("${url.replace(/"/g, '%22')}")`;
      }

      message.textContent = 'Image saved on this device.';
    });

    $('#adminSiteImageReset').addEventListener('click', () => {
      const item = elements[Number(targetSelect.value)];
      const message = $('#adminSiteImageMessage');

      if (!item) return;

      const saved = read();
      delete saved[item.key];
      write(saved);

      if (item.kind === 'image') {
        item.element.src = item.element.getAttribute('src') || '';
        applySavedImages();
      } else {
        item.element.style.backgroundImage =
          item.original || 'none';
      }

      showSelected();
      message.textContent = 'Restored the original image.';
    });
  }

  applySavedImages();

  const observer = new MutationObserver(() => {
    applySavedImages();
    install();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install, { once: true });
  } else {
    install();
  }
})();
