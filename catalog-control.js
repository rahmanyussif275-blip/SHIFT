(() => {
  'use strict';
  const STORE='shift-gh-catalog-v2';
  const CART='shift-gh-cart-v2';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const read=key=>{try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}};
  const write=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true}catch{return false}};
  const fitNames=[['slim','Slim build'],['regular','Regular build'],['plus','Plus build']];
  let catalog=[];

  function defaultCatalog(){
    return $$('.product-card').map((card,i)=>{
      const id=$('[data-open]',card)?.dataset.open||`slot-${i+1}`;
      return {
        id,name:$('.product-name',card)?.textContent.trim()||`Cloth ${i+1}`,price:Number($('.card-bottom strong',card)?.textContent.replace(/[^0-9.]/g,''))||0,
        label:$('.card-meta span',card)?.textContent.trim()||'SHIFT / CLOTHING',photo:$('.product-photo img',card)?.src||'',
        category:i<20?'tops':'bottoms', fit:Object.fromEntries(fitNames.map(([key])=>[key,{url:'',x:50,y:35}]))
      };
    });
  }
  function load(){catalog=read(STORE)||defaultCatalog();write(STORE,catalog)}
  function save(){write(STORE,catalog);renderCatalog();}
  function renderCatalog(){
    const grid=$('#productGrid'); if(!grid)return;
    grid.innerHTML=catalog.map(p=>`<article class="product-card" data-slot="${esc(p.id)}"><button class="product-photo" data-open="${esc(p.id)}" aria-label="View ${esc(p.name)}"><img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy"></button><div class="card-meta"><span>${esc(p.label)}</span><button class="heart" type="button" aria-label="Add to wishlist">♡</button></div><h3 class="product-name">${esc(p.name)}</h3><div class="card-bottom"><strong>GH₵${Number(p.price).toFixed(2)}</strong><button class="bag-button" type="button" data-open="${esc(p.id)}">ADD <span>+</span></button></div></article>`).join('');
  }

  function getProduct(id){return catalog.find(p=>p.id===id)}
  function openProduct(p){
    const dialog=$('#productDialog'); if(!dialog)return;
    $('#modalImage').src=p.photo;$('#modalImage').alt=p.name;$('#modalName').textContent=p.name;
    $('#modalPrice').textContent=`GH₵${Number(p.price).toFixed(2)}`;$('#modalAddPrice').textContent=`GH₵${Number(p.price).toFixed(2)}`;
    $('#modalCategory').textContent=p.label;$('#modalDescription').textContent='Manage fit, colour and size from the available options.';
    $('#modalSizes').innerHTML=['XS','S','M','L','XL','XXL'].map(s=>`<button type="button" class="size" data-size="${s}">${s}</button>`).join('');
    let size='',gallery=$('#individualFitGallery',dialog);
    if(!gallery){gallery=document.createElement('section');gallery.id='individualFitGallery';gallery.className='individual-fit-gallery';const buy=$('.modal-buy',dialog);buy?.before(gallery)}
    gallery.innerHTML=`<h3>See the fit</h3><div class="individual-fit-grid">${fitNames.map(([key,label])=>{const f=p.fit?.[key]||{url:'',x:50,y:35};return `<figure><img src="${esc(f.url)}" style="object-position:${f.x}% ${f.y}%" alt="${esc(label)} fit for ${esc(p.name)}" loading="lazy"><figcaption>${esc(label)}</figcaption></figure>`}).join('')}</div>`;
    $('#modalSizes').onclick=e=>{const b=e.target.closest('[data-size]');if(!b)return;size=b.dataset.size;$$('.size',$('#modalSizes')).forEach(x=>x.classList.toggle('selected',x===b))};
    $('#modalAdd').onclick=e=>{e.preventDefault();e.stopImmediatePropagation();if(!size){notify('Choose a size before adding this item.');return}const cart=read(CART)||[];const existing=cart.find(x=>x.id===p.id&&x.size===size);if(existing)existing.qty=(existing.qty||1)+1;else cart.push({id:p.id,name:p.name,image:p.photo,price:p.price,label:p.label,size,qty:Number($('#modalQty').value)||1,fit:p.fit});write(CART,cart);notify('Added to your bag.');dialog.close();syncBag();};
    if(typeof dialog.showModal==='function')dialog.showModal();
  }

  function notify(message){const toast=$('#toast');if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(window.shiftCatalogToast);window.shiftCatalogToast=setTimeout(()=>toast.classList.remove('show'),2400)}
  function syncBag(){
    const cart=read(CART)||[],host=$('#cartItems');if(!host)return;
    let total=0;$$('.cart-line',host).forEach((line,i)=>{const item=cart[i],p=item&&getProduct(item.id);if(!item)return;if(p){line.querySelector('img')&&(line.querySelector('img').src=p.photo);if($('.line-copy b',line))$('.line-copy b',line).textContent=p.name;}});
    cart.forEach(item=>{const p=getProduct(item.id);total+=(p?Number(p.price):Number(item.price||0))*Number(item.qty||1)});
    if($('#cartTotal'))$('#cartTotal').textContent=`GH₵${total.toFixed(2)}`;
  }

  function installAdmin(){
    const scope=$('#adminScope'), productSection=$('.admin-product'), select=$('#adminProduct');if(!scope||!productSection||!select)return;
    if(!$('#catalogSlotSelect')){
      scope.insertAdjacentHTML('beforeend','<option value="catalog">Clothes / product slots</option>');
      const block=document.createElement('section');block.id='catalogAdmin';block.hidden=true;block.className='catalog-admin';
      block.innerHTML=`<h3>Clothes slots</h3><label>Choose slot<select id="catalogSlotSelect"></select></label><div class="catalog-actions"><button type="button" id="catalogAdd">ADD CLOTH SLOT</button><button type="button" id="catalogRemove" class="admin-secondary">REMOVE SELECTED</button></div><label>Cloth name<input id="catalogName"></label><label>Label / category text<input id="catalogLabel"></label><label>Price (GH₵)<input id="catalogPrice" type="number" min="0" step="1"></label><label>Main cloth photo URL<input id="catalogPhoto" type="url"></label><div class="admin-preview"><img id="catalogPhotoPreview" alt="Main cloth preview"></div>${fitNames.map(([key,label])=>`<fieldset class="catalog-fit-field"><legend>${label}</legend><label>Photo URL<input id="catalogFit${key}" type="url"></label><div class="admin-preview"><img id="catalogFitPreview${key}" alt="${label} preview"></div><label>Crop left/right<input id="catalogFitX${key}" type="range" min="0" max="100" value="50"></label><label>Crop up/down<input id="catalogFitY${key}" type="range" min="0" max="100" value="35"></label></fieldset>`).join('')}`;
      productSection.append(block);
    }
    scope.addEventListener('change',()=>{$('#catalogAdmin').hidden=scope.value!=='catalog'});
    const slot=$('#catalogSlotSelect');
    function fillSlots(){slot.innerHTML=catalog.map(p=>`<option value="${esc(p.id)}">${esc(p.name)}</option>`).join('');if(catalog.length&&!slot.value)slot.value=catalog[0].id;fillSlot()}
    function fillSlot(){const p=getProduct(slot.value);if(!p)return;$('#catalogName').value=p.name;$('#catalogLabel').value=p.label;$('#catalogPrice').value=p.price;$('#catalogPhoto').value=p.photo;$('#catalogPhotoPreview').src=p.photo;fitNames.forEach(([key])=>{const f=p.fit?.[key]||{url:'',x:50,y:35};$(`#catalogFit${key}`).value=f.url;$(`#catalogFitPreview${key}`).src=f.url;$(`#catalogFitX${key}`).value=f.x;$(`#catalogFitY${key}`).value=f.y})}
    fillSlots();slot.addEventListener('change',fillSlot);
    $('#catalogAdd').addEventListener('click',()=>{const id=`custom-${Date.now()}`;catalog.push({id,name:`New cloth ${catalog.length+1}`,price:0,label:'NEW / SHIFT.GH',photo:'',category:'tops',fit:Object.fromEntries(fitNames.map(([key])=>[key,{url:'',x:50,y:35}]))});save();fillSlots();slot.value=id;fillSlot();notify('New cloth slot added.')});
    $('#catalogRemove').addEventListener('click',()=>{if(!slot.value||!confirm('Remove this cloth slot from the page?'))return;catalog=catalog.filter(p=>p.id!==slot.value);save();fillSlots();notify('Cloth slot removed.')});
    $('#catalogPhoto').addEventListener('input',e=>$('#catalogPhotoPreview').src=e.target.value.trim());
    fitNames.forEach(([key])=>$(`#catalogFit${key}`).addEventListener('input',e=>$(`#catalogFitPreview${key}`).src=e.target.value.trim()));
    $('.admin-editor').addEventListener('submit',()=>{if(scope.value==='catalog'){const p=getProduct(slot.value);if(!p)return;p.name=$('#catalogName').value.trim()||p.name;p.label=$('#catalogLabel').value.trim()||p.label;p.price=Math.max(0,Number($('#catalogPrice').value)||0);p.photo=$('#catalogPhoto').value.trim();fitNames.forEach(([key])=>{p.fit=p.fit||{};p.fit[key]={url:$(`#catalogFit${key}`).value.trim(),x:Number($(`#catalogFitX${key}`).value),y:Number($(`#catalogFitY${key}`).value)}});save();notify('Clothes slot saved.')}},true);
  }

  function start(){load();renderCatalog();installAdmin();const grid=$('#productGrid');if(grid)new MutationObserver(()=>{if(grid.dataset.catalogRendering)return;grid.dataset.catalogRendering='true';renderCatalog();queueMicrotask(()=>delete grid.dataset.catalogRendering)}).observe(grid,{childList:true});grid?.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();const p=getProduct(b.dataset.open);if(p)openProduct(p)},true);const cartObserver=new MutationObserver(syncBag);cartObserver.observe($('#cartDrawer')||document.body,{childList:true,subtree:true});syncBag();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
