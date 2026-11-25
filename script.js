(() => {
  'use strict';

  const tops = [
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
  const bottoms = [
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
  const photoIds = [
    'photo-1521572163474-6864f9cf17ab','photo-1583743814966-8936f37f4678','photo-1576566588028-4147f3842f27','photo-1521572163474-6864f9cf17ab','photo-1622445275463-afa2ab738c34','photo-1583743814966-8936f37f4678','photo-1521572163474-6864f9cf17ab','photo-1583743814966-8936f37f4678','photo-1618354691373-d851c5c3a990','photo-1620799140408-edc6dcb6d633','photo-1556821840-3a63f95609a7','photo-1620799140408-edc6dcb6d633','photo-1556821840-3a63f95609a7','photo-1620799140408-edc6dcb6d633','photo-1578681994506-b8f463449011','photo-1620799140408-edc6dcb6d633','photo-1579952363873-27f3bade9f55','photo-1574629810360-7efbbe195018','photo-1574629810360-7efbbe195018','photo-1598033129183-c4f50c736f10',
    'photo-1542272604-787c3835535d','photo-1541099649105-f69ad21f3246','photo-1542272604-787c3835535d','photo-1541099649105-f69ad21f3246','photo-1542272604-787c3835535d','photo-1541099649105-f69ad21f3246','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1542272604-787c3835535d','photo-1541099649105-f69ad21f3246','photo-1552902865-b72c031ac5ea','photo-1552902865-b72c031ac5ea','photo-1574629810360-7efbbe195018','photo-1574629810360-7efbbe195018'
  ];
  const palette = {Black:'#171717',Charcoal:'#4a4b4d',Cream:'#e8dbc4',White:'#f5f4f0',Navy:'#202944',Olive:'#686b50',Grey:'#999994','Black and Cream':'#27272a',Blue:'#7b94a7','Faded Black':'#393a3b',Indigo:'#273a50','Light Blue':'#a9c1ce'};
  const image = (id, width=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`;
  const products = [...tops.map((p,i)=>make(p,'tops',i)), ...bottoms.map((p,i)=>make(p,'bottoms',i+20))];
  function make([name,color,price,description],category,index){return {id:`shift-${String(index+1).padStart(2,'0')}`,name,color,price,description,category,image:image(photoIds[index])};}
  const $ = (s,root=document) => root.querySelector(s);
  const $$ = (s,root=document) => [...root.querySelectorAll(s)];
  const money = n => `GH₵${Number(n).toFixed(2)}`;
  const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const CART='shift-gh-cart-v2', REVIEWS='shift-gh-reviews-v2', WISHLIST='shift-gh-wishlist-v1';
  const fitModels = [
    {name:'Slim build',detail:'Model wears SHIFT size S',photo:'photo-1515886657613-9f3515b0c78f',alt:'Streetwear fit inspiration, slim adult model'},
    {name:'Regular build',detail:'Model wears SHIFT size M',photo:'photo-1529139574466-a303027c1d8b',alt:'Streetwear fit inspiration, regular-build adult model'},
    {name:'Plus build',detail:'Model wears SHIFT size XL',photo:'photo-1539109136881-3be0616acf4b',alt:'Streetwear fit inspiration, plus-build adult model'}
  ];
  const swatchGroups = [
    {test:/Heavyweight Cotton Tee/i, family:/Heavyweight Cotton Tee/i},
    {test:/Oversized Hoodie/i, family:/Oversized Hoodie/i},
    {test:/Zip-Up Hoodie/i, family:/Zip-Up Hoodie/i},
    {test:/Baggy Sweatpants/i, family:/Baggy Sweatpants/i},
    {test:/Cuffed Joggers/i, family:/Cuffed Joggers/i},
    {test:/Wide-Leg Cargo Pants/i, family:/Wide-Leg Cargo Pants/i},
    {test:/Parachute Pants/i, family:/Parachute Pants/i},
    {test:/Stacked Denim Jeans/i, family:/Stacked Denim Jeans/i},
    {test:/Baggy Denim Jorts/i, family:/Baggy Denim Jorts/i},
    {test:/Utility Cargo Shorts/i, family:/Utility Cargo Shorts/i},
    {test:/Athletic Mesh Shorts/i, family:/Athletic Mesh Shorts/i}
  ];
  let cart=read(CART,[]), wishlist=read(WISHLIST,[]), activeProduct=null, selectedColor='', selectedSize='', fitIndex=0, toastTimer;
  function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
  function persistCart(){try{localStorage.setItem(CART,JSON.stringify(cart))}catch{notify('Could not save your bag in this browser.')}}
  function notify(message){const toast=$('#toast');if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)}
  function variantsFor(product){const group=swatchGroups.find(group=>group.test.test(product.name));if(!group)return [product];return products.filter(item=>item.category===product.category&&group.family.test(item.name));}

  function renderProducts(){
    const query=$('#searchInput').value.trim().toLowerCase(),category=$('#categoryFilter').value,colour=$('#colorFilter').value,sort=$('#sortSelect').value;
    let list=products.filter(p=>(!query||`${p.name} ${p.description} ${p.color}`.toLowerCase().includes(query))&&(category==='all'||p.category===category)&&(colour==='all'||p.color===colour));
    if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name));
    $('#productGrid').innerHTML=list.map(p=>`<article class="product-card"><button class="product-photo" data-open="${p.id}" aria-label="View ${esc(p.name)}"><img src="${p.image}" alt="${esc(p.name)}" loading="lazy"><span>VIEW DETAILS ↗</span></button><div class="card-meta"><span>${p.category.toUpperCase()} / ${esc(p.color)}</span><button class="heart" data-wishlist="${p.id}" aria-label="Add to wishlist" aria-pressed="${wishlist.includes(p.id)}">${wishlist.includes(p.id)?'♥':'♡'}</button></div><button class="product-name" data-open="${p.id}">${esc(p.name)}</button><div class="card-bottom"><strong>${money(p.price)}</strong><button class="add-quick" data-open="${p.id}">QUICK ADD +</button></div></article>`).join('');
    $('#resultsStatus').textContent=`Showing ${list.length} of 40 pieces`;
    $('#emptyState').hidden=list.length>0;
  }
  function showFitPreview(index){fitIndex=(index+fitModels.length)%fitModels.length;const model=fitModels[fitIndex];const host=$('#productFitPreview');if(!host)return;host.querySelector('.fit-preview-main img').src=image(model.photo,700);host.querySelector('.fit-preview-main img').alt=model.alt;host.querySelector('.fit-preview-name').textContent=model.name;host.querySelector('.fit-preview-detail').textContent=model.detail;host.querySelectorAll('[data-fit-preview]').forEach((button,i)=>{button.setAttribute('aria-pressed',String(i===fitIndex));button.classList.toggle('selected',i===fitIndex)});}
  function openProduct(product){
    activeProduct=product;selectedColor=product.color;selectedSize='';
    $('#modalImage').src=product.image;$('#modalImage').alt=product.name;
    $('#modalCategory').textContent=`${product.category.toUpperCase()} / SHIFT.GH`;
    $('#modalName').textContent=product.name;$('#modalPrice').textContent=money(product.price);$('#modalAddPrice').textContent=money(product.price);$('#modalDescription').textContent=product.description;
    $('#selectedColorName').textContent=selectedColor;
    const choices=variantsFor(product);
    $('#modalSwatches').innerHTML=choices.map(choice=>`<button type="button" class="swatch ${choice.color===selectedColor?'selected':''}" data-variant="${choice.id}" aria-label="${esc(choice.color)}" title="${esc(choice.color)}" aria-pressed="${choice.color===selectedColor}" style="background:${palette[choice.color]||'#888'}"></button>`).join('');
    $('#modalSizes').innerHTML=['XS','S','M','L','XL','XXL'].map(s=>`<button type="button" class="size" data-size="${s}" aria-pressed="false">${s}</button>`).join('');
    $('#modalQty').value=1;
    ensureFitPreview();showFitPreview(0);
    $('#productDialog').showModal();
  }
  function ensureFitPreview(){if($('#productFitPreview'))return;const modal=$('#modalDescription');const section=document.createElement('section');section.id='productFitPreview';section.className='product-fit-preview';section.setAttribute('aria-label','Fit inspiration');section.innerHTML=`<div class="fit-preview-heading"><span>FIT INSPIRATION</span><small>Explore three different builds</small></div><div class="fit-preview-main"><img alt="" loading="lazy"><div><strong class="fit-preview-name"></strong><span class="fit-preview-detail"></span></div></div><div class="fit-preview-options">${fitModels.map((m,i)=>`<button type="button" data-fit-preview="${i}" aria-pressed="${i===0}"><img src="${image(m.photo,150)}" alt=""><span>${m.name}</span></button>`).join('')}</div>`;modal.after(section);section.addEventListener('click',event=>{const button=event.target.closest('[data-fit-preview]');if(button)showFitPreview(Number(button.dataset.fitPreview))});}
  function renderCart(){
    const count=cart.reduce((sum,item)=>sum+item.qty,0);$('#cartCount').textContent=count;$('#drawerCount').textContent=`(${count})`;
    const host=$('#cartItems');
    host.innerHTML=cart.length?cart.map((item,index)=>{const p=products.find(product=>product.id===item.id);return `<article class="cart-line"><img src="${p.image}" alt="${esc(p.name)}"><div class="cart-line-info"><b>${esc(p.name)}</b><span>Colour: ${esc(item.color||p.color)} · Size: ${esc(item.size)}</span><strong>${money(p.price)} each</strong><div class="quantity"><button type="button" data-qty="-1" data-index="${index}" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button type="button" data-qty="1" data-index="${index}" aria-label="Increase quantity">+</button><button type="button" class="remove" data-remove="${index}">REMOVE</button></div></div></article>`}).join(''):'<div class="cart-empty"><span>YOUR BAG IS EMPTY</span><p>Find a piece for your rotation.</p><a href="#shop" id="emptyShop" class="button button-dark">SHOP THE COLLECTION</a></div>';
    $('#cartTotal').textContent=money(cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.qty,0));
  }
  function addToBag(){if(!selectedSize){notify('Choose a size before adding this item.');return}const existing=cart.find(item=>item.id===activeProduct.id&&item.size===selectedSize&&item.color===selectedColor);const qty=Math.max(1,Math.min(10,Number($('#modalQty').value)||1));if(existing)existing.qty+=qty;else cart.push({id:activeProduct.id,size:selectedSize,color:selectedColor,qty});persistCart();renderCart();$('#productDialog').close();notify('Added to your shopping bag.')}
  function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#scrim').classList.add('show');document.body.classList.add('locked')}
  function closeCart(){ $('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#scrim').classList.remove('show');document.body.classList.remove('locked') }
  function createOrderRequest(){if(!cart.length){notify('Your bag is empty. Add a piece first.');return}const lines=cart.map(item=>{const p=products.find(product=>product.id===item.id);return `${item.qty} × ${p.name} — ${item.color}, size ${item.size}: ${money(p.price*item.qty)}`});const summary=`SHIFT.GH ORDER ENQUIRY\n${lines.join('\n')}\nSubtotal: ${$('#cartTotal').textContent}\n\nPlease confirm availability and delivery.`;let box=$('#orderSummary');if(!box){box=document.createElement('div');box.id='orderSummary';box.className='order-summary';box.innerHTML='<p>Your order enquiry is ready. Copy it and send it to SHIFT.GH to confirm availability and delivery. No payment is processed on this demo.</p><textarea readonly aria-label="Order enquiry summary"></textarea><button type="button" class="button button-dark" id="copyOrder">COPY ORDER ENQUIRY</button>';$('#cartDrawer').querySelector('.cart-foot').append(box);box.querySelector('#copyOrder').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(box.querySelector('textarea').value);notify('Order enquiry copied. Send it to SHIFT.GH to confirm.')}catch{box.querySelector('textarea').focus();box.querySelector('textarea').select();notify('Select and copy your order enquiry.')}})}box.querySelector('textarea').value=summary;box.hidden=false;box.scrollIntoView({behavior:'smooth',block:'nearest'})}
  function setFit(index){fitIndex=(index+fitModels.length)%fitModels.length;const model=fitModels[fitIndex];const photo=$('#fitImage');if(photo){photo.src=image(model.photo,1100);photo.alt=model.alt}if($('#fitName'))$('#fitName').textContent=model.name.toUpperCase();if($('#fitDesc'))$('#fitDesc').textContent=model.detail;const number=$('#fitNum');if(number)number.textContent=String(fitIndex+1).padStart(2,'0');$$('.fit-tabs button').forEach((button,i)=>{button.classList.toggle('active',i===fitIndex);button.setAttribute('aria-pressed',String(i===fitIndex))})}
  function renderReviews(){const entries=read(REVIEWS,[]);$('#reviewList').innerHTML=entries.slice(0,5).map(review=>`<article class="review-card"><b>${esc(review.product)}</b><span>${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span><p>${esc(review.text)}</p></article>`).join('')||'<p class="muted">No reviews yet. Be the first to share a note.</p>'}
  function setup(){
    $('#colorFilter').innerHTML='<option value="all">All colours</option>'+[...new Set(products.map(p=>p.color))].sort().map(color=>`<option value="${esc(color)}">${esc(color)}</option>`).join('');
    $('#reviewProduct').innerHTML=products.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('');
    $('#year').textContent=new Date().getFullYear();renderProducts();renderCart();renderReviews();setFit(0);
    ['searchInput','categoryFilter','colorFilter','sortSelect'].forEach(id=>$('#'+id).addEventListener(id==='searchInput'?'input':'change',renderProducts));
    $('#clearFilters').addEventListener('click',()=>{$('#searchInput').value='';$('#categoryFilter').value='all';$('#colorFilter').value='all';$('#sortSelect').value='featured';renderProducts()});
    $('#productGrid').addEventListener('click',event=>{const wish=event.target.closest('[data-wishlist]');if(wish){const id=wish.dataset.wishlist;wishlist=wishlist.includes(id)?wishlist.filter(saved=>saved!==id):[...wishlist,id];try{localStorage.setItem(WISHLIST,JSON.stringify(wishlist))}catch{}wish.textContent=wishlist.includes(id)?'♥':'♡';wish.setAttribute('aria-pressed',String(wishlist.includes(id)));notify(wishlist.includes(id)?'Saved to wishlist.':'Removed from wishlist.');return}const opener=event.target.closest('[data-open]');if(opener){const p=products.find(item=>item.id===opener.dataset.open);if(p)openProduct(p)}});
    $$('[data-category],[data-collection]').forEach(link=>link.addEventListener('click',()=>{const category=link.dataset.category||link.dataset.collection;if(category){$('#categoryFilter').value=category;renderProducts()}}));
    $('#modalSwatches').addEventListener('click',event=>{const button=event.target.closest('[data-variant]');if(!button)return;const variant=products.find(p=>p.id===button.dataset.variant);if(!variant)return;selectedColor=variant.color;activeProduct=variant;$('#modalImage').src=variant.image;$('#modalImage').alt=variant.name;$('#modalName').textContent=variant.name;$('#modalPrice').textContent=money(variant.price);$('#modalAddPrice').textContent=money(variant.price);$('#modalDescription').textContent=variant.description;$('#selectedColorName').textContent=selectedColor;$('#modalSwatches').querySelectorAll('[data-variant]').forEach(swatch=>{swatch.classList.toggle('selected',swatch===button);swatch.setAttribute('aria-pressed',String(swatch===button))})});
    $('#modalSizes').addEventListener('click',event=>{const button=event.target.closest('[data-size]');if(!button)return;selectedSize=button.dataset.size;$('#modalSizes').querySelectorAll('[data-size]').forEach(size=>{size.classList.toggle('selected',size===button);size.setAttribute('aria-pressed',String(size===button))})});
    $('#modalAdd').addEventListener('click',addToBag);$('#closeProduct').addEventListener('click',()=>$('#productDialog').close());
    $('#cartToggle').addEventListener('click',openCart);$('#closeCart').addEventListener('click',closeCart);$('#scrim').addEventListener('click',closeCart);$('#continueShopping').addEventListener('click',closeCart);$('#orderEnquiry').addEventListener('click',createOrderRequest);
    $('#cartItems').addEventListener('click',event=>{const remove=event.target.closest('[data-remove]'),change=event.target.closest('[data-qty]');if(remove)cart.splice(Number(remove.dataset.remove),1);else if(change){const item=cart[Number(change.dataset.index)];item.qty+=Number(change.dataset.qty);if(item.qty<1)cart.splice(Number(change.dataset.index),1)}else if(event.target.id==='emptyShop'){closeCart();return}else return;persistCart();renderCart()});
    $('#fitPrev').addEventListener('click',()=>setFit(fitIndex-1));$('#fitNext').addEventListener('click',()=>setFit(fitIndex+1));$$('.fit-tabs button').forEach(button=>button.addEventListener('click',()=>setFit(Number(button.dataset.fit))));
    let touchStart=0;$('#fitImage').addEventListener('touchstart',event=>touchStart=event.changedTouches[0].clientX,{passive:true});$('#fitImage').addEventListener('touchend',event=>{const delta=event.changedTouches[0].clientX-touchStart;if(Math.abs(delta)>45)setFit(fitIndex+(delta<0?1:-1))},{passive:true});
    $('#menuToggle').addEventListener('click',()=>{const nav=$('#nav');if(!nav)return;const open=nav.classList.toggle('nav-open');$('#menuToggle').setAttribute('aria-expanded',String(open))});
    $('#reviewForm').addEventListener('submit',event=>{event.preventDefault();const product=products.find(p=>p.id===$('#reviewProduct').value);if(!product)return;const entries=read(REVIEWS,[]);entries.unshift({product:product.name,rating:Number($('#reviewRating').value),text:$('#reviewText').value.trim()});localStorage.setItem(REVIEWS,JSON.stringify(entries));$('#reviewText').value='';renderReviews();notify('Review saved in this browser.')});
    document.addEventListener('keydown',event=>{if(event.key==='Escape')closeCart()});
  }
  setup();
})();
