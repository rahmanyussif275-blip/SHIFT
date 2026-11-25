(() => {
  'use strict';
  const money = n => `GH₵${Number(n).toFixed(2)}`;
  const TOPS = [
    ['SHIFT Oversized Graphic Tee — Black','Black',58,'A relaxed everyday graphic tee with an easy oversized shape.'],
    ['SHIFT Vintage Wash Graphic Tee — Charcoal','Charcoal',62,'A lived-in wash and relaxed cut bring a vintage feel to this everyday tee.'],
    ['SHIFT Puff Print Streetwear Tee — Cream','Cream',60,'A soft cream tee finished with a raised, tactile graphic.'],
    ['SHIFT Minimal Logo Tee — White','White',52,'A clean, versatile staple with a subtle SHIFT mark.'],
    ['SHIFT Boxy Fit Graphic Tee — Navy','Navy',58,'A boxy cut and bold graphic make this an easy statement layer.'],
    ['SHIFT Heavyweight Cotton Tee — Black','Black',65,'A substantial cotton feel with a structured, relaxed silhouette.'],
    ['SHIFT Heavyweight Cotton Tee — White','White',65,'A crisp heavyweight essential that holds its shape.'],
    ['SHIFT Heavyweight Cotton Tee — Olive','Olive',65,'A heavyweight cotton staple in an earthy olive tone.'],
    ['SHIFT Long Sleeve Thermal Tee — Black','Black',60,'A textured long sleeve layer built for cooler evenings.'],
    ['SHIFT Waffle Knit Long Sleeve Tee — Cream','Cream',62,'Soft waffle texture and an easy fit bring depth to a simple layer.'],
    ['SHIFT Oversized Hoodie — Black','Black',70,'A relaxed pullover hoodie with a roomy, comfortable feel.'],
    ['SHIFT Oversized Hoodie — Grey','Grey',70,'The everyday oversized hoodie in an easy-to-style grey.'],
    ['SHIFT Zip-Up Hoodie — Navy','Navy',70,'A clean zip-up layer for flexible everyday styling.'],
    ['SHIFT Zip-Up Hoodie — Charcoal','Charcoal',70,'A versatile charcoal zip hoodie with a relaxed profile.'],
    ['SHIFT Classic Crewneck Sweatshirt — Cream','Cream',68,'A clean crewneck that layers easily through the week.'],
    ['SHIFT Premium Crewneck Sweatshirt — Black','Black',70,'A refined black crewneck with a substantial, soft feel.'],
    ['SHIFT Football Streetwear Jersey — Navy','Navy',65,'Sport-inspired details meet a relaxed streetwear fit.'],
    ['SHIFT Basketball Oversized Jersey — Black','Black',65,'A breathable, oversized jersey shape made for layering.'],
    ['SHIFT Retro Racing Graphic Jersey — White','White',65,'A throwback racing-inspired graphic on a relaxed jersey silhouette.'],
    ['SHIFT Flannel Overshirt — Black and Cream','Black and Cream',68,'A check-pattern overshirt that works open or buttoned up.']
  ];
  const BOTTOMS = [
    ['SHIFT Baggy Light-Wash Jeans','Blue',70,'Relaxed light-wash denim with room through the leg.'],
    ['SHIFT Baggy Faded Black Jeans','Faded Black',70,'Washed black denim and a comfortable baggy silhouette.'],
    ['SHIFT Raw Indigo Wide-Leg Jeans','Indigo',70,'Deep indigo denim with an easy, wide-leg cut.'],
    ['SHIFT Distressed Baggy Jeans','Blue',70,'A relaxed denim shape with considered distressed details.'],
    ['SHIFT Stacked Denim Jeans — Black','Black',70,'Black denim with a longer stacked silhouette.'],
    ['SHIFT Stacked Denim Jeans — Blue','Blue',70,'Everyday blue denim with a relaxed stacked leg.'],
    ['SHIFT Wide-Leg Cargo Pants — Black','Black',68,'Utility-inspired pockets meet a loose, comfortable leg.'],
    ['SHIFT Wide-Leg Cargo Pants — Olive','Olive',68,'A roomy cargo silhouette in a versatile olive shade.'],
    ['SHIFT Parachute Pants — Black','Black',65,'Light-feeling, relaxed parachute styling with easy movement.'],
    ['SHIFT Parachute Pants — Grey','Grey',65,'A versatile grey parachute pant with a roomy fit.'],
    ['SHIFT Baggy Sweatpants — Black','Black',60,'Soft everyday sweats with a relaxed, roomy cut.'],
    ['SHIFT Baggy Sweatpants — Grey','Grey',60,'The easy baggy sweatpant in a classic grey.'],
    ['SHIFT Cuffed Joggers — Black','Black',58,'A casual jogger with a cuffed hem and comfortable feel.'],
    ['SHIFT Cuffed Joggers — Charcoal','Charcoal',58,'An easy charcoal jogger made for everyday wear.'],
    ['SHIFT Baggy Denim Jorts — Light Blue','Light Blue',60,'Relaxed denim shorts with a roomy summer silhouette.'],
    ['SHIFT Baggy Denim Jorts — Black','Black',60,'Easy black denim jorts with a loose, above-the-knee shape.'],
    ['SHIFT Utility Cargo Shorts — Olive','Olive',58,'Practical cargo details in a relaxed warm-weather short.'],
    ['SHIFT Utility Cargo Shorts — Black','Black',58,'A versatile black utility short with room to move.'],
    ['SHIFT Athletic Mesh Shorts — Black','Black',52,'Lightweight mesh shorts for a sporty everyday rotation.'],
    ['SHIFT Athletic Mesh Shorts — Navy','Navy',52,'A classic navy mesh short with an easy athletic feel.']
  ];
  const allSizes = ['XS','S','M','L','XL','XXL'];
  const colorHex = {Black:'#17181b',Charcoal:'#4a4b4d',Cream:'#e8dbc4',White:'#f5f4f0',Navy:'#202944',Olive:'#686b50',Grey:'#999994','Black and Cream':'#27272a',Blue:'#7b94a7','Faded Black':'#393a3b',Indigo:'#273a50','Light Blue':'#a6bdc9'};
  const products = [...TOPS.map((p,i)=>makeProduct(p,'tops',i+1)),...BOTTOMS.map((p,i)=>makeProduct(p,'bottoms',i+21))];
  function makeProduct([name,color,price,description],category,id){return {id:`shift-${String(id).padStart(2,'0')}`,name,category,description,price,sizes:allSizes,colors:[color],image:productArt(name,color,category),stock:'Available'};}
  function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function productArt(name,color,category){
    const bg=category==='tops'?'#eeeae2':'#e6e8e4', garment=colorHex[color]||'#343944';
    const lower=name.toLowerCase(); let shape;
    if(category==='bottoms'){
      if(lower.includes('short')) shape=`<path d="M205 140h190l-16 185h-76l-14-96-14 96h-76z"/>`;
      else shape=`<path d="M210 85h180l-10 370h-72l-18-212-18 212h-72z"/>`;
      if(lower.includes('cargo')||lower.includes('utility')) shape+=`<path fill="${shade(garment,18)}" d="M213 205h52v74h-52zm121 0h52v74h-52z"/>`;
      if(lower.includes('jean')||lower.includes('denim')) shape+=`<path fill="none" stroke="${shade(garment,30)}" stroke-width="3" d="M300 90v159M222 105h156"/>`;
    }else if(lower.includes('hoodie')) shape=`<path d="M245 110q55-75 110 0l44 30 55 76-48 30-28-39 14 219H208l14-219-28 39-48-30 55-76z"/><path fill="none" stroke="${shade(garment,26)}" stroke-width="5" d="M300 113v312M256 113q44 40 88 0"/>`;
    else if(lower.includes('jersey')) shape=`<path d="M238 95h124l52 33 54 84-48 31-37-48 14 231H203l14-231-37 48-48-31 54-84z"/><path fill="none" stroke="${shade(garment,30)}" stroke-width="6" d="M238 98q62 77 124 0M300 170v75"/>`;
    else if(lower.includes('flannel')) shape=`<path d="M245 90h110l47 42 45 74-43 30-32-43 10 233H218l10-233-32 43-43-30 45-74z"/><path fill="none" stroke="${shade(garment,24)}" stroke-width="7" d="M260 102v320m80-320v320M222 230h156m-156 74h156"/>`;
    else shape=`<path d="M240 90h120l48 35 50 82-47 30-35-49 14 238H210l14-238-35 49-47-30 50-82z"/>`;
    const mark=category==='tops'?`<text x="300" y="260" text-anchor="middle" fill="${contrast(garment)}" font-family="Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="-2">SHIFT</text>`:'';
    const pattern=lower.includes('check')?`<path fill="none" stroke="#e7ddcc" stroke-width="9" opacity=".8" d="M248 110v300m48-310v320m48-320v320M220 190h158m-158 65h158m-158 65h158"/>`:'';
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 560"><rect width="600" height="560" fill="${bg}"/><circle cx="480" cy="104" r="68" fill="#fff" opacity=".35"/><text x="34" y="48" fill="#77766f" font-family="Arial,sans-serif" font-size="13" font-weight="700" letter-spacing="2">SHIFT / OBJECT STUDY</text><g fill="${garment}" stroke="${shade(garment,-18)}" stroke-width="3" stroke-linejoin="round">${shape}</g>${pattern}${mark}<text x="34" y="524" fill="#77766f" font-family="Arial,sans-serif" font-size="12" letter-spacing="1">${esc(name).replace(/&amp;/g,'&')}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
  function shade(hex,amount){let h=hex.replace('#','');if(h.length!==6)return hex;let n=parseInt(h,16),r=Math.max(0,Math.min(255,(n>>16)+amount)),g=Math.max(0,Math.min(255,((n>>8)&255)+amount)),b=Math.max(0,Math.min(255,(n&255)+amount));return `#${[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('')}`;}
  function contrast(hex){return ['#17181b','#202944','#273a50','#343944','#393a3b','#4a4b4d','#686b50'].includes(hex)?'#f6e8d0':'#1e2640';}
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const grid=$('#productGrid'), cartKey='shift-gh-cart-v1', reviewKey='shift-gh-reviews-v1';
  let cart=readStorage(cartKey,[]), currentProduct=null, selectedColor='',selectedSize='',quantity=1,toastTimer;
  function readStorage(key,fallback){try{const value=JSON.parse(localStorage.getItem(key));return value??fallback;}catch{return fallback;}}
  function storeCart(){try{localStorage.setItem(cartKey,JSON.stringify(cart));}catch{notify('Your browser could not save the bag on this device.');}}
  function renderProducts(){let list=[...products];const q=$('#searchInput').value.trim().toLowerCase(),cat=$('#categoryFilter').value,col=$('#colorFilter').value,price=$('#priceFilter').value,sort=$('#sortSelect').value;
    list=list.filter(p=>(!q||p.name.toLowerCase().includes(q)||p.description.toLowerCase().includes(q))&&(cat==='all'||p.category===cat)&&(col==='all'||p.colors.some(c=>c.toLowerCase()===col))&&(price==='all'||p.price<=Number(price)));
    if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name));
    grid.replaceChildren();list.forEach(p=>grid.append(makeCard(p)));$('#emptyState').hidden=list.length>0;$('#resultsStatus').textContent=`Showing ${list.length} of ${products.length} pieces`;$('#productTotal').textContent=`${list.length} PIECES`;
  }
  function makeCard(p){const card=document.createElement('article');card.className='product-card';card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`${p.name}, ${money(p.price)}. View details`);card.innerHTML=`<div class="product-image-wrap"><img class="product-image" src="${p.image}" alt="Original illustrated product preview: ${esc(p.name)}" loading="lazy"><span class="product-category-tag">${p.category.toUpperCase()}</span><button class="quick-add" type="button" aria-label="Choose options for ${esc(p.name)}">VIEW PIECE +</button></div><div class="product-meta"><h3 class="product-name">${esc(p.name)}</h3><span class="product-price">${money(p.price)}</span></div><p class="product-color-hint">${esc(p.colors[0])} · Available</p>`;
    card.addEventListener('click',e=>{if(e.target.closest('.quick-add'))e.stopPropagation();openProduct(p);});card.addEventListener('keydown',e=>{if(e.target===card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openProduct(p);}});return card;}
  function populateOptions(){const values=[...new Set(products.flatMap(p=>p.colors))].sort();$('#colorFilter').innerHTML='<option value="all">All colours</option>'+values.map(v=>`<option value="${esc(v.toLowerCase())}">${esc(v)}</option>`).join('');$('#reviewProduct').innerHTML='<option value="">Choose a product</option>'+products.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('');}
  function openProduct(p){currentProduct=p;selectedColor=p.colors[0];selectedSize='';quantity=1;$('#modalProductName').textContent=p.name;$('#modalPrice').textContent=money(p.price);$('#modalDescription').textContent=p.description;$('#modalCategory').textContent=`SHIFT.GH / ${p.category.toUpperCase()}`;$('#modalStock').textContent=p.stock==='Available'?'● Available — introductory catalogue pricing.':'Currently unavailable';$('#modalImage').src=p.image;$('#modalImage').alt=`Original illustrated product preview: ${p.name}`;$('#selectedColorName').textContent=selectedColor;$('#quantityValue').textContent=quantity;
    $('#modalSwatches').innerHTML=p.colors.map(c=>`<button type="button" class="swatch" title="${esc(c)}" aria-label="Select ${esc(c)}" aria-pressed="${c===selectedColor}" style="background:${colorHex[c]||'#777'}" data-color="${esc(c)}"></button>`).join('');$('#modalSizes').innerHTML=p.sizes.map(s=>`<button type="button" class="size-button" aria-pressed="false" data-size="${s}">${s}</button>`).join('');$('#productDialog').showModal();}
  function addToCart(p,color,size,qty){if(!size){notify('Choose a size before adding this piece.');return;}const found=cart.find(x=>x.id===p.id&&x.color===color&&x.size===size);if(found)found.quantity+=qty;else cart.push({id:p.id,color,size,quantity:qty});storeCart();renderCart();$('#productDialog').close();notify(`${p.name} added to your bag.`);}
  function cartCount(){return cart.reduce((n,x)=>n+x.quantity,0);}
  function renderCart(){const count=cartCount();$('#cartCount').textContent=count;$('#drawerCount').textContent=`(${count})`;const items=$('#cartItems');items.replaceChildren();cart.forEach(item=>{const p=products.find(x=>x.id===item.id);if(!p)return;const row=document.createElement('article');row.className='cart-line';row.innerHTML=`<img src="${p.image}" alt="" loading="lazy"><div><h3>${esc(p.name)}</h3><p>${esc(item.color)} / ${esc(item.size)}</p><strong>${money(p.price*item.quantity)}</strong><div class="cart-line-actions"><button type="button" data-change="-1" aria-label="Decrease quantity of ${esc(p.name)}">−</button><output>${item.quantity}</output><button type="button" data-change="1" aria-label="Increase quantity of ${esc(p.name)}">+</button><button class="remove-line" type="button" data-remove>Remove</button></div></div><span></span>`;row.querySelectorAll('[data-change]').forEach(b=>b.addEventListener('click',()=>{item.quantity+=Number(b.dataset.change);if(item.quantity<1)cart=cart.filter(x=>x!==item);storeCart();renderCart();}));row.querySelector('[data-remove]').addEventListener('click',()=>{cart=cart.filter(x=>x!==item);storeCart();renderCart();});items.append(row);});const total=cart.reduce((sum,item)=>{const p=products.find(x=>x.id===item.id);return sum+(p?p.price*item.quantity:0);},0);$('#cartSubtotal').textContent=money(total);$('#cartEmpty').hidden=count>0;$('#cartSummary').hidden=count===0;}
  function openCart(){const d=$('#cartDrawer');d.classList.add('open');d.setAttribute('aria-hidden','false');$('#overlay').hidden=false;document.body.style.overflow='hidden';$('#cartToggle').setAttribute('aria-expanded','true');$('#cartDrawer [data-close-drawer]').focus();}
  function closeCart(){const d=$('#cartDrawer');d.classList.remove('open');d.setAttribute('aria-hidden','true');$('#overlay').hidden=true;document.body.style.overflow='';$('#cartToggle').setAttribute('aria-expanded','false');}
  function notify(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2800);}
  function updateColor(color){selectedColor=color;$('#selectedColorName').textContent=color;$('#modalSwatches').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.color===color)));/* Each listed colour has its own matching generated garment art. */$('#modalImage').src=productArt(currentProduct.name,color,currentProduct.category);}
  const fitData=[{name:'SLIM FIT',desc:'A more fitted silhouette.',img:'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=82',alt:'Adult male fashion model in a relaxed streetwear outfit',label:'FIT STUDY / 01'},{name:'REGULAR FIT',desc:'A balanced everyday silhouette.',img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=82',alt:'Adult male model wearing a casual everyday outfit',label:'FIT STUDY / 02'},{name:'PLUS-SIZE FIT',desc:'A roomier, relaxed silhouette.',img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=82',alt:'Adult male model in casual clothing',label:'FIT STUDY / 03'}];let fitIndex=0,touchX=0;
  function setFit(i){fitIndex=(i+fitData.length)%fitData.length;const d=fitData[fitIndex];$('#fitImage').src=d.img;$('#fitImage').alt=d.alt;$('#fitName').textContent=d.name;$('#fitDescription').textContent=d.desc;$('#fitKicker').textContent=`FIT 0${fitIndex+1}`;$('.fit-image-label').textContent=d.label;$$('.fit-dots button').forEach((b,j)=>b.setAttribute('aria-pressed',String(j===fitIndex)));}
  function setup(){populateOptions();renderProducts();renderCart();$('#currentYear').textContent=new Date().getFullYear();
    ['searchInput','categoryFilter','colorFilter','priceFilter','sortSelect'].forEach(id=>$('#'+id).addEventListener(id==='searchInput'?'input':'change',renderProducts));$('#clearFilters').addEventListener('click',()=>{$('#searchInput').value='';$('#categoryFilter').value='all';$('#colorFilter').value='all';$('#priceFilter').value='all';$('#sortSelect').value='featured';renderProducts();});
    $('#searchToggle').addEventListener('click',()=>{document.querySelector('#shop').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#searchInput').focus(),350);});$('#cartToggle').addEventListener('click',openCart);$('#overlay').addEventListener('click',closeCart);$$('[data-close-drawer]').forEach(b=>b.addEventListener('click',closeCart));
    $('#menuToggle').addEventListener('click',()=>{const open=$('#mainNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open));$('#menuToggle').setAttribute('aria-label',open?'Close navigation':'Open navigation');});$$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{$('#mainNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');}));
    $$('[data-category-link],[data-collection]').forEach(a=>a.addEventListener('click',()=>{const cat=a.dataset.categoryLink||a.dataset.collection;if(cat){$('#categoryFilter').value=cat;renderProducts();}}));
    $('#modalSwatches').addEventListener('click',e=>{const b=e.target.closest('[data-color]');if(b)updateColor(b.dataset.color);});$('#modalSizes').addEventListener('click',e=>{const b=e.target.closest('[data-size]');if(!b)return;selectedSize=b.dataset.size;$$('#modalSizes .size-button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));});$('#quantityMinus').addEventListener('click',()=>{quantity=Math.max(1,quantity-1);$('#quantityValue').textContent=quantity;});$('#quantityPlus').addEventListener('click',()=>{quantity=Math.min(99,quantity+1);$('#quantityValue').textContent=quantity;});$('#modalAddToCart').addEventListener('click',()=>addToCart(currentProduct,selectedColor,selectedSize,quantity));$('#closeProduct').addEventListener('click',()=>$('#productDialog').close());$('#productDialog').addEventListener('click',e=>{if(e.target===$('#productDialog'))$('#productDialog').close();});
    $('#fitPrev').addEventListener('click',()=>setFit(fitIndex-1));$('#fitNext').addEventListener('click',()=>setFit(fitIndex+1));$$('.fit-dots button').forEach(b=>b.addEventListener('click',()=>setFit(Number(b.dataset.fit))));$('#fitVisual').addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});$('#fitVisual').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>45)setFit(fitIndex+(dx<0?1:-1));},{passive:true});$('#fitVisual').addEventListener('keydown',e=>{if(e.key==='ArrowRight')setFit(fitIndex+1);if(e.key==='ArrowLeft')setFit(fitIndex-1);});
    $('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();$('#newsletterNote').textContent='Thanks for your interest. This demo does not store or send email addresses.';e.currentTarget.reset();});$('#reviewForm').addEventListener('submit',submitReview);renderReviews();
    $('#orderEnquiry').addEventListener('click',()=>{const whatsappBusinessNumber='';if(!cart.length)return;const lines=cart.map(item=>{const p=products.find(x=>x.id===item.id);return `${p.name} — Size ${item.size}, ${item.color}, Qty ${item.quantity}`;});const total=cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.quantity,0);const message=`SHIFT.GH order enquiry (not a payment or confirmed order)\n${lines.join('\n')}\nEnquiry total: ${money(total)}`;if(whatsappBusinessNumber){window.open(`https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');}else notify('Business WhatsApp number has not been added. Please contact the business when details are available.');});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#cartDrawer').classList.contains('open'))closeCart();});
  }
  function submitReview(e){e.preventDefault();const p=products.find(x=>x.id===$('#reviewProduct').value);if(!p)return;const reviews=readStorage(reviewKey,[]);reviews.unshift({product:p.name,rating:Number($('#reviewRating').value),text:$('#reviewText').value.trim(),date:new Date().toLocaleDateString()});try{localStorage.setItem(reviewKey,JSON.stringify(reviews.slice(0,30)));}catch{}e.currentTarget.reset();renderReviews();notify('Review saved in this browser.');}
  function renderReviews(){const host=$('#reviewList'),reviews=readStorage(reviewKey,[]);host.innerHTML=reviews.slice(0,6).map(r=>`<article class="review-card"><strong>${esc(r.product)}</strong><div class="review-stars" aria-label="${r.rating} out of 5 stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div><p>${esc(r.text)}</p><small>${esc(r.date)} · Local demo review</small></article>`).join('');}
  setup();
})();
