// Load the complete catalog editor so it is available inside Admin.
(() => {
  'use strict';
  const scopeFix = () => {
    const scope = $('#adminScope');
    const catalog = $('#catalogAdmin');
    if (scope && catalog) {
      scope.addEventListener('change', () => {
        $('.admin-product').hidden = !['product', 'catalog'].includes(scope.value);
        catalog.hidden = scope.value !== 'catalog';
      });
    }
  };
  const script = document.createElement('script');
  script.src = 'catalog-control.js';
  script.defer = true;
  document.head.appendChild(script);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scopeFix, { once: true });
  else scopeFix();
})();
