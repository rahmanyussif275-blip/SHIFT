(() => {
  'use strict';
  const KEY = 'shift-gh-product-fit-images-v1';
  const models = [
    { key:'slim', label:'Slim build · size S', url:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=84' },
    { key:'regular', label:'Regular build · size M', url:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=84' },
    { key:'plus', label:'Plus build · size XL', url:'https://images.unsplash.com/photo-1539109136881-3be0616acf4f?auto=format&fit=crop&w=900&q=84' }
  ];
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; } };
  const write = data => { try { localStorage.setItem(KEY, JSON.stringify(data)); return true; } catch { return false; } };
  const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const cap = key => key[0].toUpperCase()+key.slice(1);

  function installControls() {
    const productSection=$('.admin-product'), select=$('#adminProduct');
    if (!productSection || !select) return false;
    if (!$('#adminFitSlim')) {
      const section=document.createElement('section');
      section.className='admin-fit-images';
      section.innerHTML=`<h3>Fit photos for this product</h3><p>Each selected garment has independent photos and crop settings. Use image URLs, then adjust the crop position for each model.</p>${models.map(m=>`<div class="admin-fit-model"><h4>${esc(m.label)}</h4><label>Image URL<input id="adminFit${cap(m.key)}" type="url" inputmode="url" placeholder="https://..."></label><div class="admin-preview"><img id="adminFitPreview${cap(m.key)}" alt="${esc(m.label)} preview"><span>Preview</span></div><label>Crop left/right <input id="adminFitX${cap(m.key)}" type="range" min="0" max="100" value="50"></label><label>Crop up/down <input id="adminFitY${cap(m.key)}" type="range" min="0" max="100" value="35"></label></div>`).join('')}`;
      productSection.append(section);
    }
    function populate() {
      const all=read(), perProduct=all[select.value]||{};
      models.forEach(m=>{
        const item=perProduct[m.key]||{};
        const url=typeof item==='string'?item:(item.url||'');
        const x=typeof item==='object'?(item.x??50):50, y=typeof item==='object'?(item.y??35):35;
        $(`#adminFit${cap(m.key)}`).value=url;
        $(`#adminFitPreview${cap(m.key)}`).src=url||m.url;
        $(`#adminFitX${cap(m.key)}`).value=x;
        $(`#adminFitY${cap(m.key)}`).value=y;
      });
    }
    models.forEach(m=>{
      $(`#adminFit${cap(m.key)}`).addEventListener('input',e=>{$(`#adminFitPreview${cap(m.key)}`).src=e.target.value.trim()||m.url;});
      [`X`,`Y`].forEach(axis=>$(`#adminFit${axis}${cap(m.key)}`).addEventListener('input',e=>{
        const preview=$(`#adminFitPreview${cap(m.key)}`);
        const x=axis==='X'?e.target.value:$(`#adminFitX${cap(m.key)}`).value;
        const y=axis==='Y'?e.target.value:$(`#adminFitY${cap(m.key)}`).value;
        preview.style.objectPosition=`${x}% ${y}%`;
      }));
    });
    select.addEventListener('change',populate);
    $('.admin-editor')?.addEventListener('submit',()=>{
      if ($('#adminScope').value!=='product'||!select.value) return;
      const all=read();
      all[select.value]=Object.fromEntries(models.map(m=>[m.key,{
        url:$(`#adminFit${cap(m.key)}`).value.trim(),
        x:Number($(`#adminFitX${cap(m.key)}`).value),
        y:Number($(`#adminFitY${cap(m.key)}`).value)
      }]));
      if(!write(all)) $('.admin-editor .admin-message').textContent='Could not save fit photos in this browser.';
    },true);
    populate();
    return true;
  }
  function installGallery() {
    const dialog=$('#productDialog'); if(!dialog||dialog.dataset.fitGalleryReady)return;
    dialog.dataset.fitGalleryReady='true';
    const observer=new MutationObserver(()=>{
      if(!dialog.open)return;
      const productName=$('#modalName')?.textContent.trim();
      const card=$$('.product-card').find(el=>$('.product-name',el)?.textContent.trim()===productName);
      const id=$('[data-open]',card)?.dataset.open, original=$('#productFitPreview');
      if(!id||!original)return;
      original.hidden=true;
      let gallery=$('#individualFitGallery',dialog);
      if(!gallery){gallery=document.createElement('section');gallery.id='individualFitGallery';gallery.className='individual-fit-gallery';original.insertAdjacentElement('afterend',gallery);}
      const saved=read()[id]||{};
      gallery.innerHTML=`<h3>See the fit</h3><div class="individual-fit-grid">${models.map(m=>{
        const entry=saved[m.key]||{},url=typeof entry==='string'?entry:(entry.url||m.url),x=typeof entry==='object'?(entry.x??50):50,y=typeof entry==='object'?(entry.y??35):35;
        return `<figure><img src="${esc(url)}" style="object-position:${Number(x)}% ${Number(y)}%" alt="${esc(m.label)} wearing ${esc(productName)}" loading="lazy"><figcaption>${esc(m.label)}</figcaption></figure>`;
      }).join('')}</div>`;
    });
    observer.observe(dialog,{attributes:true,attributeFilter:['open'],childList:true,subtree:true,characterData:true});
  }
  function start(){
    const observer=new MutationObserver(()=>{if(installControls())observer.disconnect();});
    observer.observe(document.body,{childList:true,subtree:true});
    installControls(); installGallery();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
