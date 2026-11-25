/* SHIFT storefront interactions. Cart/wishlist are browser-local demos; account/orders require a secure service. */
(() => {
  const products = window.PRODUCTS || [];
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const money = n => `GH₵${Number(n).toFixed(2)}`;
  const safeRead = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  let cart = safeRead('shift-cart-v1', []), wishlist = safeRead('shift-wishlist-v1', []), activeProduct = null;
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const svgArt = (p, colour) => {
    const c = colour || p.colours[0]; const shapes = ['<path d="M115 110 155 82h90l40 28 45 45-38 34-22-21v175H130V168l-22 21-38-34z"/>','<path d="M130 80h140l38 55-32 22-18-22v208H142V135l-18 22-32-22z"/>','<path d="M125 95 160 78h80l35 17 42 45-32 32-27-24v200H142V148l-27 24-32-32z"/>'];
    const shape=shapes[p.art%shapes.length];
    return `<svg viewBox="0 0 400 450" role="img" aria-label="Illustrative product-only placeholder for ${escapeHtml(p.name)}"><rect width="400" height="450" fill="#eceae4"/><ellipse cx="200" cy="398" rx="115" ry="14" fill="#d5d2ca"/><g fill="${c}" stroke="rgba(0,0,0,.12)" stroke-width="2">${shape}</g><path d="M173 94q27 35 54 0" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="5"/><text x="200" y="235" text-anchor="middle" fill="${c==='#f6e8d0'?'#1e2640':'#f6e8d0'}" font-family="Arial" font-weight="800" font-size="17" letter-spacing="3">SHIFT</text><text x="200" y="425" text-anchor="middle" fill="#6d6a64" font-family="Arial" font-size="9" letter-spacing="2">ILLUSTRATIVE PLACEHOLDER · NOT INVENTORY PHOTOGRAPHY</text></svg>`;
  };
  const save = () => { try { localStorage.setItem('shift-cart-v1', JSON.stringify(cart)); localStorage.setItem('shift-wishlist-v1', JSON.stringify(wishlist)); } catch {} };
  const sum = () => cart.reduce((n, item) => n + (products.find(p=>p.id===item.id)?.price || 0)*item.qty, 0);
  const updateCount = () => { $('#cartCount').textContent=cart.reduce((n,i)=>n+i.qty,0); };
  function renderProducts(list=products) {
    const grid=$('#productGrid'); if(!grid)return;
    grid.innerHTML=list.length ? list.map(p=>`<article class="product-card"><button class="product-image" data-open="${p.id}" aria-label="View ${escapeHtml(p.name)}">${svgArt(p)}<span class="card-badge">${p.new?'NEW':escapeHtml(p.category.toUpperCase())}</span><button class="wish-btn" data-wish="${p.id}" aria-label="${wishlist.includes(p.id)?'Remove from':'Add to'} wishlist">${wishlist.includes(p.id)?'♥':'♡'}</button></button><div class="product-meta"><div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.category)} · ★ ${p.rating} (${p.reviews})</p></div><strong>${money(p.price)}</strong></div></article>`).join('') : '<p class="empty">No products match. Try changing your search or filters.</p>';
  }
  function filtered() {
    const cat=$('#categoryFilter')?.value || 'all'; const sort=$('#sortFilter')?.value || 'featured';
    let list=products.filter(p=>(cat==='all'||p.category===cat));
    if(sort==='low')list.sort((a,b)=>a.price-b.price); if(sort==='high')list.sort((a,b)=>b.price-a.price); if(sort==='newest')list.sort((a,b)=>Number(b.new)-Number(a.new));
    renderProducts(list);
  }
  function openProduct(id) {
    activeProduct=products.find(p=>p.id===id); if(!activeProduct)return;
    const p=activeProduct, modal=$('#productModal');
    modal.innerHTML=`<div class="modal-card" role="dialog" aria-modal="true" aria-label="${escapeHtml(p.name)}"><button class="modal-close" data-close aria-label="Close product details">×</button><div class="modal-image" id="modalImage">${svgArt(p)}</div><div class="modal-info"><p class="eyebrow">${escapeHtml(p.category)} / ${p.id}</p><h2>${escapeHtml(p.name)}</h2><p class="modal-price">${money(p.price)}</p><p>${escapeHtml(p.description)}</p><p>★ ${p.rating} · ${p.reviews} reviews <small>(demo display only; not verified customer feedback)</small></p><div class="option-group"><span>Presentation preview · not a fit guarantee</span><div class="fit-preview" aria-label="Illustrative body fit presentation"><i style="height:44px"></i><i style="height:54px;width:34px"></i><i style="height:62px;width:40px"></i><small>Slim · Normal · Fuller</small></div></div><div class="option-group"><span>Colour</span><div class="option-row" id="colourOptions">${p.colours.map((c,i)=>`<button class="option-btn colour-choice ${i===0?'active':''}" data-colour="${c}" aria-label="Select colour ${c}" title="${c}" style="min-width:36px;width:36px;background:${c};${c==='#000000'?'border:2px solid #bbb':''}"></button>`).join('')}</div></div><div class="option-group"><span>Size</span><div class="option-row" id="sizeOptions">${p.sizes.map((s,i)=>`<button class="option-btn size-choice ${i===0?'active':''}" data-size="${s}">${s}</button>`).join('')}</div></div><p class="checkout-note">Availability and actual garment measurements should be confirmed with SHIFT before purchase.</p><button class="add-cart" data-add="${p.id}">ADD TO BAG — ${money(p.price)}</button><a class="text-link product-wa" target="_blank" rel="noopener noreferrer" href="${waUrl(`Hi SHIFT, I have a question about ${p.name} (${p.id}), ${money(p.price)}.`)}">Ask about this product on WhatsApp →</a><section class="review-demo"><h3>Customer feedback</h3><p>Displayed ratings are demonstration data, not verified purchases or genuine submitted reviews. Review submission will be available when a moderated backend is connected.</p></section><h3>You may also like</h3><p>${products.filter(x=>x.id!==p.id&&x.category===p.category).slice(0,3).map(x=>escapeHtml(x.name)).join(' · ')||'Explore the full collection'}</p></div></div>`;
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  }
  function waUrl(text) { return `https://wa.me/?text=${encodeURIComponent(text)}`; }
  function addToCart(id, size, colour) {
    const p=products.find(x=>x.id===id);if(!p)return;
    const item=cart.find(x=>x.id===id&&x.size===size&&x.colour===colour);
    if(item)item.qty++;else cart.push({id,size,colour,qty:1}); save();updateCount();renderCart();
  }
  function renderCart() {
    const drawer=$('#cartDrawer');if(!drawer)return;
    drawer.innerHTML=`<div class="drawer-head"><strong>YOUR BAG (${cart.reduce((n,i)=>n+i.qty,0)})</strong><button data-close aria-label="Close bag">×</button></div>${cart.length?`<div class="cart-body">${cart.map((item,index)=>{const p=products.find(x=>x.id===item.id);if(!p)return '';return `<article class="cart-item"><div class="cart-item-art">${svgArt(p,item.colour)}</div><div><h4>${escapeHtml(p.name)}</h4><p>Size ${escapeHtml(item.size)} · ${escapeHtml(item.colour)}</p><p>${money(p.price)}</p><div class="qty-row"><button data-qty="${index}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-qty="${index}" data-delta="1" aria-label="Increase quantity">+</button><button data-remove="${index}" aria-label="Remove item">Remove</button></div></div><strong>${money(p.price*item.qty)}</strong></article>`}).join('')}</div><div class="cart-summary"><div class="summary-row"><span>Subtotal</span><strong>${money(sum())}</strong></div><p class="checkout-note">Delivery charges, if applicable, will be confirmed by SHIFT. This is an order enquiry, not an accepted order.</p><button class="checkout-btn" id="checkoutBtn">CONTINUE TO ORDER ENQUIRY</button></div>`:'<div class="empty">Your bag is waiting for something good.</div>'}`;
    updateCount();
  }
  function checkout() {
    if(!cart.length)return;
    const overlay=document.createElement('div');overlay.className='checkout-overlay';overlay.id='checkoutOverlay';
    const lines=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `${p.name} (${p.id}) — size ${i.size}, colour ${i.colour}, qty ${i.qty} — ${money(p.price*i.qty)}`}).join('\n');
    overlay.innerHTML=`<button class="checkout-close" data-close aria-label="Close checkout">×</button><div class="checkout-layout"><form class="checkout-form" id="orderForm"><p class="eyebrow">SHIFT / ORDER ENQUIRY</p><h2>Almost yours.</h2><p>Send your selected items to SHIFT for availability and delivery confirmation. Submitting opens WhatsApp with a prepared enquiry; it does not place or confirm an order.</p><label>Full name<input name="name" required autocomplete="name"></label><label>Phone number<input name="phone" required type="tel" autocomplete="tel"></label><label>Email address<input name="email" type="email" autocomplete="email"></label><label>Delivery address<textarea name="address" required autocomplete="street-address"></textarea></label><p class="checkout-note">Your details are used only to prepare this enquiry in your browser. This site does not securely store or transmit order information itself.</p><button class="enquiry-btn" type="submit">CONTINUE ORDER ENQUIRY ON WHATSAPP</button></form><aside class="checkout-summary"><h3>Order summary</h3>${cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<p>${escapeHtml(p.name)} · ${escapeHtml(i.size)} · ${escapeHtml(i.colour)} × ${i.qty}<br><strong>${money(p.price*i.qty)}</strong></p>`}).join('')}<hr><div class="summary-row"><span>Product subtotal</span><strong>${money(sum())}</strong></div><div class="summary-row"><span>Delivery</span><span>To be confirmed</span></div><div class="summary-row summary-total"><span>Order estimate</span><span>${money(sum())}</span></div></aside></div>`;
    document.body.append(overlay);
  }
  function openAccount(){const d=$('#accountPanel');d.innerHTML=`<div class="drawer-head"><strong>YOUR SHIFT</strong><button data-close aria-label="Close account">×</button></div><div class="account-form"><p class="eyebrow">CUSTOMER ACCOUNT</p><h2>Account access</h2><p>Secure login, customer profiles and order history require a backend authentication service. No password is requested or stored on this static demo.</p><button type="button" id="wishlistView">VIEW SAVED ITEMS (${wishlist.length})</button><p class="checkout-note">Wishlist preferences are stored locally in this browser only.</p><a href="mailto:hello@shift.gh">Contact SHIFT for order assistance</a></div>`;d.classList.add('open');d.setAttribute('aria-hidden','false');}
  function setOpen(el,open){el.classList.toggle('open',open);el.setAttribute('aria-hidden',String(!open));}
  document.addEventListener('click',e=>{
    const open=e.target.closest('[data-open]');if(open){openProduct(open.dataset.open);return;}
    const wish=e.target.closest('[data-wish]');if(wish){const id=wish.dataset.wish;wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];save();filtered();return;}
    if(e.target.closest('[data-close]')){const m=e.target.closest('.modal');if(m)setOpen(m,false);const d=e.target.closest('.drawer');if(d)setOpen(d,false);$('#checkoutOverlay')?.remove();return;}
    const colour=e.target.closest('.colour-choice');if(colour){$$('.colour-choice').forEach(x=>x.classList.remove('active'));colour.classList.add('active');$('#modalImage').innerHTML=svgArt(activeProduct,colour.dataset.colour);return;}
    const size=e.target.closest('.size-choice');if(size){$$('.size-choice').forEach(x=>x.classList.remove('active'));size.classList.add('active');return;}
    const add=e.target.closest('[data-add]');if(add){const s=$('.size-choice.active')?.dataset.size,c=$('.colour-choice.active')?.dataset.colour;if(!s||!c){alert('Please choose a size and colour.');return;}addToCart(add.dataset.add,s,c);setOpen($('#productModal'),false);setOpen($('#cartDrawer'),true);return;}
    const qty=e.target.closest('[data-qty]');if(qty){const i=Number(qty.dataset.qty);cart[i].qty+=Number(qty.dataset.delta);if(cart[i].qty<1)cart.splice(i,1);save();renderCart();return;}
    const remove=e.target.closest('[data-remove]');if(remove){cart.splice(Number(remove.dataset.remove),1);save();renderCart();return;}
    if(e.target.closest('#cartBtn')||e.target.closest('#footerCart')){renderCart();setOpen($('#cartDrawer'),true);return;}
    if(e.target.closest('#accountBtn')){openAccount();return;}
    if(e.target.closest('#checkoutBtn')){checkout();return;}
    if(e.target.closest('#searchBtn')){setOpen($('#searchPanel'),true);$('#searchInput').focus();return;}
    if(e.target.closest('#closeSearch')){setOpen($('#searchPanel'),false);return;}
    if(e.target.closest('#filterToggle')){$('#shopTools').classList.toggle('open');return;}
    if(e.target.closest('.menu-toggle')){const n=$('.nav');n.classList.toggle('open');e.target.setAttribute('aria-expanded',String(n.classList.contains('open')));return;}
    if(e.target.closest('#wishlistView')){const ids=new Set(wishlist);setOpen($('#accountPanel'),false);$('#shop').scrollIntoView();renderProducts(products.filter(p=>ids.has(p.id)));return;}
    const filterLink=e.target.closest('[data-filter]');if(filterLink){renderProducts(products.filter(p=>filterLink.dataset.filter==='new'?p.new:filterLink.dataset.filter==='exclusive'?p.exclusive:p.category==='T-shirts'));}
  });
  document.addEventListener('submit',e=>{if(e.target.id!=='orderForm')return;e.preventDefault();const f=new FormData(e.target);const details=`SHIFT order enquiry\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')||'Not provided'}\nDelivery address: ${f.get('address')}\n\nItems:\n${cart.map(i=>{const p=products.find(x=>x.id===i.id);return `${p.name} (${p.id}) — size ${i.size}, colour ${i.colour}, qty ${i.qty} — ${money(p.price*i.qty)}`}).join('\n')}\n\nProduct subtotal: ${money(sum())}\nDelivery: to be confirmed\nThis is an enquiry; please confirm availability and order acceptance.`;window.open(waUrl(details),'_blank','noopener,noreferrer');});
  $('#categoryFilter')?.addEventListener('change',filtered);$('#sortFilter')?.addEventListener('change',filtered);
  $('#searchInput')?.addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();const found=products.filter(p=>!q||[p.name,p.category,p.style,...p.colours,...p.sizes].join(' ').toLowerCase().includes(q)).slice(0,8);$('#searchResults').innerHTML=found.map(p=>`<button class="search-result" data-open="${p.id}">${escapeHtml(p.name)} · ${escapeHtml(p.category)} · ${money(p.price)}</button>`).join('')||'<p>No matches found.</p>';});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){setOpen($('#productModal'),false);setOpen($('#cartDrawer'),false);setOpen($('#accountPanel'),false);setOpen($('#searchPanel'),false);$('#checkoutOverlay')?.remove();}});
  updateCount();renderProducts();renderCart();
})();