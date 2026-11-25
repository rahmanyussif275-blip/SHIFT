
"use strict";

/* ==========================================
   SHIFT — COMPLETE STORE FRONTEND
   20 TOPS + 20 BOTTOMS
   ========================================== */

const products = [
  // TOPS — 20 PRODUCTS
  {id:1,name:"Boxy Vintage Graphic Tee",slug:"boxy-vintage-tee",category:"Tops",price:65,colors:["Black","White","Cream","Navy"]},
  {id:2,name:"Heavyweight Plain Black Tee",slug:"heavyweight-black-tee",category:"Tops",price:60,colors:["Black"]},
  {id:3,name:"Heavyweight White Tee",slug:"heavyweight-white-tee",category:"Tops",price:60,colors:["White"]},
  {id:4,name:"Heavyweight Charcoal Tee",slug:"heavyweight-charcoal-tee",category:"Tops",price:60,colors:["Charcoal"]},
  {id:5,name:"Heavyweight Cream Tee",slug:"heavyweight-cream-tee",category:"Tops",price:60,colors:["Cream"]},
  {id:6,name:"Heavyweight Olive Tee",slug:"heavyweight-olive-tee",category:"Tops",price:60,colors:["Olive"]},
  {id:7,name:"Puff Print Street Tee",slug:"puff-print-tee",category:"Tops",price:75,colors:["Black","White","Cream"]},
  {id:8,name:"Vintage Washed Graphic Tee",slug:"vintage-wash-tee",category:"Tops",price:75,colors:["Black","Grey","Blue"]},
  {id:9,name:"Minimal Logo Oversized Tee",slug:"minimal-logo-tee",category:"Tops",price:65,colors:["Black","White","Navy"]},
  {id:10,name:"Abstract Graphic Tee",slug:"abstract-graphic-tee",category:"Tops",price:70,colors:["Black","White","Cream"]},
  {id:11,name:"Waffle Knit Long Sleeve",slug:"waffle-knit-tee",category:"Tops",price:80,colors:["Black","Cream","Olive"]},
  {id:12,name:"Thermal Long Sleeve Tee",slug:"thermal-long-sleeve",category:"Tops",price:85,colors:["Black","White","Grey"]},
  {id:13,name:"Oversized Black Hoodie",slug:"black-hoodie",category:"Tops",price:120,colors:["Black"]},
  {id:14,name:"Oversized Cream Hoodie",slug:"cream-hoodie",category:"Tops",price:120,colors:["Cream"]},
  {id:15,name:"Oversized Grey Hoodie",slug:"grey-hoodie",category:"Tops",price:120,colors:["Grey"]},
  {id:16,name:"Premium Zip Up Hoodie",slug:"zip-up-hoodie",category:"Tops",price:135,colors:["Black","Grey","Cream"]},
  {id:17,name:"Classic Crewneck Sweatshirt",slug:"crewneck-sweatshirt",category:"Tops",price:100,colors:["Black","White","Grey"]},
  {id:18,name:"Retro Football Jersey",slug:"football-jersey",category:"Tops",price:95,colors:["Black","White","Blue"]},
  {id:19,name:"Retro Basketball Jersey",slug:"basketball-jersey",category:"Tops",price:95,colors:["Black","White","Red"]},
  {id:20,name:"Vintage Racing Jersey",slug:"racing-jersey",category:"Tops",price:105,colors:["Black","White","Red"]},

  // BOTTOMS — 20 PRODUCTS
  {id:21,name:"Baggy Light Wash Jeans",slug:"light-wash-jeans",category:"Bottoms",price:150,colors:["Light Wash"]},
  {id:22,name:"Baggy Faded Black Jeans",slug:"faded-black-jeans",category:"Bottoms",price:150,colors:["Faded Black"]},
  {id:23,name:"Raw Indigo Wide Leg Jeans",slug:"raw-indigo-jeans",category:"Bottoms",price:160,colors:["Indigo"]},
  {id:24,name:"Distressed Baggy Jeans",slug:"distressed-jeans",category:"Bottoms",price:165,colors:["Blue","Black"]},
  {id:25,name:"Stacked Black Denim Jeans",slug:"stacked-black-jeans",category:"Bottoms",price:170,colors:["Black"]},
  {id:26,name:"Stacked Blue Denim Jeans",slug:"stacked-blue-jeans",category:"Bottoms",price:170,colors:["Blue"]},
  {id:27,name:"Classic Utility Cargo Pants",slug:"utility-cargo-pants",category:"Bottoms",price:140,colors:["Black","Olive","Khaki"]},
  {id:28,name:"Olive Cargo Pants",slug:"olive-cargo-pants",category:"Bottoms",price:140,colors:["Olive"]},
  {id:29,name:"Black Parachute Pants",slug:"black-parachute-pants",category:"Bottoms",price:145,colors:["Black"]},
  {id:30,name:"Grey Parachute Pants",slug:"grey-parachute-pants",category:"Bottoms",price:145,colors:["Grey"]},
  {id:31,name:"Baggy Black Sweatpants",slug:"black-sweatpants",category:"Bottoms",price:110,colors:["Black"]},
  {id:32,name:"Baggy Grey Sweatpants",slug:"grey-sweatpants",category:"Bottoms",price:110,colors:["Grey"]},
  {id:33,name:"Cream Baggy Sweatpants",slug:"cream-sweatpants",category:"Bottoms",price:110,colors:["Cream"]},
  {id:34,name:"Cuffed Black Joggers",slug:"black-joggers",category:"Bottoms",price:100,colors:["Black"]},
  {id:35,name:"Relaxed Grey Joggers",slug:"grey-joggers",category:"Bottoms",price:100,colors:["Grey"]},
  {id:36,name:"Baggy Blue Denim Jorts",slug:"blue-jorts",category:"Bottoms",price:90,colors:["Blue"]},
  {id:37,name:"Faded Black Denim Jorts",slug:"black-jorts",category:"Bottoms",price:90,colors:["Black"]},
  {id:38,name:"Utility Cargo Shorts",slug:"cargo-shorts",category:"Bottoms",price:85,colors:["Black","Olive","Khaki"]},
  {id:39,name:"Black Athletic Mesh Shorts",slug:"mesh-shorts",category:"Bottoms",price:75,colors:["Black"]},
  {id:40,name:"Oversized Sports Shorts",slug:"sports-shorts",category:"Bottoms",price:80,colors:["Black","Navy","Grey"]}
].map(product => ({
  ...product,
  image:`assets/products/${product.slug}.jpg`,
  description:`Discover the ${product.name} from SHIFT. A streetwear essential designed for contemporary style and everyday comfort.`,
  rating:0,
  reviews:0
}));

/* ==========================================
   COLOUR DEFINITIONS
   ========================================== */

const colorHex = {
  Black:"#141414",
  White:"#ffffff",
  Cream:"#f6e8d0",
  Navy:"#1e2640",
  Charcoal:"#424242",
  Olive:"#65734c",
  Grey:"#929292",
  Red:"#b52b32",
  Blue:"#355c91",
  "Light Wash":"#a5c3d9",
  "Faded Black":"#454545",
  Indigo:"#303c60",
  Khaki:"#b5a47b"
};

/* ==========================================
   STATE
   ========================================== */

let cart = loadStorage("shift-cart",[]);
let currentProduct = null;
let selectedColor = "";
let selectedSize = "M";
let selectedFit = "all";
let activeFilter = "All";
let quantity = 1;

const modelPhotos = {
  slim:"assets/models/slim.jpg",
  normal:"assets/models/normal.jpg",
  fat:"assets/models/plus-size.jpg"
};

function loadStorage(key,fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key,value) {
  localStorage.setItem(key,JSON.stringify(value));
}

function money(value) {
  return `GH₵ ${Number(value).toFixed(2)}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g,char=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",
    '"':"&quot;","'":"&#39;"
  })[char]);
}

/* ==========================================
   PRODUCT CATALOGUE
   ========================================== */

function renderProducts(category="All") {
  activeFilter=category;

  const grid=document.getElementById("product-grid");
  if(!grid) return;

  const filtered=products.filter(p=>
    category==="All" || p.category===category
  );

  grid.innerHTML=filtered.map(p=>`
    <article class="product-card" onclick="openProduct(${p.id})">
      <div class="product-photo">
        <img
          src="${p.image}"
          alt="${escapeHTML(p.name)} — clothing only"
          loading="lazy"
          onerror="this.onerror=null;this.src='assets/products/product-placeholder.jpg';"
        >
        <span class="product-category">${p.category}</span>
      </div>
      <div class="product-info">
        <h3>${escapeHTML(p.name)}</h3>
        <p>${p.rating ? `★ ${p.rating} · ${p.reviews} reviews` : "New arrival"}</p>
        <p class="product-price">${money(p.price)}</p>
      </div>
    </article>
  `).join("");

  const total=document.getElementById("product-total");
  if(total) total.textContent=`${filtered.length} products`;
}

/* ==========================================
   CATEGORY FILTERS
   ========================================== */

document.querySelectorAll(".filter").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>
      b.classList.remove("active")
    );
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

/* ==========================================
   PRODUCT DETAILS
   ========================================== */

function openProduct(id) {
  currentProduct=products.find(p=>p.id===id);
  if(!currentProduct) return;

  selectedColor=currentProduct.colors[0];
  selectedSize="M";
  selectedFit="all";
  quantity=1;

  document.getElementById("product-page").classList.add("show");
  document.body.style.overflow="hidden";

  renderProductDetail();
  document.getElementById("product-page").scrollTop=0;
}

function closeProduct() {
  document.getElementById("product-page").classList.remove("show");
  document.body.style.overflow="";
}

function renderProductDetail() {
  const p=currentProduct;
  const detail=document.getElementById("product-detail");

  detail.innerHTML=`
    <div class="detail-layout">
      <div>
        <div class="detail-main-image">
          <img id="main-product-image"
            src="${p.image}"
            alt="${escapeHTML(p.name)}"
            onerror="this.onerror=null;this.src='assets/products/product-placeholder.jpg';">
        </div>
      </div>

      <div class="detail-info">
        <p class="eyebrow">${p.category} / SHIFT COLLECTION</p>
        <h1>${escapeHTML(p.name)}</h1>
        <p>${p.rating ? `★ ${p.rating}` : "New arrival"}</p>
        <div class="detail-price">${money(p.price)}</div>
        <p class="detail-description">${escapeHTML(p.description)}</p>

        <p class="option-label">COLOUR: <span id="color-name">${selectedColor}</span></p>
        <div class="color-options">
          ${p.colors.map(c=>`
            <button class="color-option ${c===selectedColor?"selected":""}"
              style="background:${colorHex[c]||"#888"}"
              title="${c}" aria-label="${c}"
              onclick="selectColor('${c}')"></button>
          `).join("")}
        </div>

        <p class="option-label">SIZE</p>
        <div class="size-options">
          ${["S","M","L","XL","XXL"].map(s=>`
            <button class="size-option ${s==="M"?"selected":""}"
              onclick="selectSize('${s}')">${s}</button>
          `).join("")}
        </div>

        <p class="option-label">QUANTITY</p>
        <input id="quantity" class="quantity-input"
          type="number" min="1" max="20" value="1">

        <div class="detail-actions">
          <button class="primary-button" onclick="addToCart()">
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>

    <section class="fit-section">
      <p class="eyebrow">SHIFT FIT EXPERIENCE</p>
      <h2>Find your perfect fit.</h2>
      <p>Explore three different body types.</p>

      <div class="fit-controls">
        <button class="active" onclick="selectFit('all',this)">VIEW ALL</button>
        <button onclick="selectFit('slim',this)">SLIM</button>
        <button onclick="selectFit('normal',this)">NORMAL</button>
        <button onclick="selectFit('fat',this)">PLUS SIZE</button>
      </div>

      <div id="model-gallery" class="model-gallery">
        ${modelCards()}
      </div>

      <p class="fit-note">
        Illustrative body previews. Actual garment-specific fit
        photography must be uploaded for accurate virtual fitting.
      </p>
    </section>

    <section class="review-section">
      <p class="eyebrow">CUSTOMER FEEDBACK</p>
      <h2>Reviews & ratings</h2>
      <div id="rating-summary"></div>
      <div id="review-list"></div>

      <h3>Write a review</h3>
      <form class="review-form" onsubmit="submitReview(event)">
        <input id="review-name" placeholder="Your name" required>
        <select id="review-rating">
          <option value="5">★★★★★ Excellent</option>
          <option value="4">★★★★ Very good</option>
          <option value="3">★★★ Good</option>
          <option value="2">★★ Fair</option>
          <option value="1">★ Poor</option>
        </select>
        <textarea id="review-text" placeholder="Your experience..."
          required></textarea>
        <button class="primary-button" type="submit">SUBMIT REVIEW</button>
      </form>
      <p class="small-note">Demo reviews are saved locally in this browser.</p>
    </section>
  `;

  renderReviews();
}

/* ==========================================
   COLOUR SELECTION
   ========================================== */

function selectColor(color) {
  if(!currentProduct.colors.includes(color)) return;

  selectedColor=color;

  document.querySelectorAll(".color-option").forEach(btn=>{
    btn.classList.toggle("selected",btn.title===color);
  });

  document.getElementById("color-name").textContent=color;

  // Accurate colour images can be stored separately.
  // Example: assets/products/black-hoodie-black.jpg
  const variantImage=
    `assets/products/${currentProduct.slug}-${color.toLowerCase().replace(/\s+/g,"-")}.jpg`;

  const image=document.getElementById("main-product-image");

  image.onerror=()=>{
    image.onerror=null;
    image.src=currentProduct.image;
  };

  image.src=variantImage;
  image.style.filter="none";
}

/* ==========================================
   SIZE SELECTION
   ========================================== */

function selectSize(size) {
  selectedSize=size;

  document.querySelectorAll(".size-option").forEach(btn=>{
    btn.classList.toggle("selected",btn.textContent===size);
  });
}

/* ==========================================
   BODY FIT PREVIEW
   ========================================== */

function modelCards() {
  const models=[
    {type:"slim",label:"SLIM BUILD"},
    {type:"normal",label:"NORMAL BUILD"},
    {type:"fat",label:"PLUS SIZE"}
  ];

  return models
    .filter(m=>selectedFit==="all"||selectedFit===m.type)
    .map(m=>`
      <article class="model-card">
        <img src="${modelPhotos[m.type]}"
          alt="${m.label} African male model wearing a SHIFT outfit"
          loading="lazy"
          onerror="this.onerror=null;this.src='assets/models/model-placeholder.jpg';">
        <h3>${m.label}</h3>
      </article>
    `).join("");
}

function selectFit(fit,button) {
  selectedFit=fit;

  document.querySelectorAll(".fit-controls button").forEach(b=>
    b.classList.remove("active")
  );

  button.classList.add("active");

  const gallery=document.getElementById("model-gallery");

  gallery.classList.toggle("single",fit!=="all");
  gallery.innerHTML=modelCards();
}

/* ==========================================
   CUSTOMER REVIEWS
   ========================================== */

function getReviews() {
  return loadStorage(`shift-reviews-${currentProduct.id}`,[]);
}

function renderReviews() {
  const reviews=getReviews();

  const average=reviews.length
    ?reviews.reduce((sum,r)=>sum+r.rating,0)/reviews.length
    :0;

  document.getElementById("rating-summary").innerHTML=`
    <div class="rating-summary">
      ${reviews.length?`★ ${average.toFixed(1)} / 5`:"No customer ratings yet"}
      <span>(${reviews.length} reviews)</span>
    </div>
  `;

  document.getElementById("review-list").innerHTML=
    reviews.length
    ?reviews.map(r=>`
      <article class="review-item">
        <h4>${escapeHTML(r.name)} · ${"★".repeat(r.rating)}</h4>
        <p>${escapeHTML(r.text)}</p>
      </article>
    `).join("")
    :"<p>Be the first to review this product.</p>";

  // Update the catalogue rating for this session.
  currentProduct.rating=average;
  currentProduct.reviews=reviews.length;
}

function submitReview(event) {
  event.preventDefault();

  const name=document.getElementById("review-name").value.trim();
  const rating=Number(document.getElementById("review-rating").value);
  const text=document.getElementById("review-text").value.trim();

  if(!name||!text||rating<1||rating>5) return;

  const reviews=getReviews();

  reviews.unshift({
    name,
    rating,
    text,
    date:new Date().toISOString()
  });

  saveStorage(`shift-reviews-${currentProduct.id}`,reviews);

  event.target.reset();
  renderReviews();
  alert("Thank you for reviewing SHIFT!");
}

/* ==========================================
   SHOPPING CART
   ========================================== */

function saveCart() {
  saveStorage("shift-cart",cart);

  const count=cart.reduce((sum,item)=>sum+item.quantity,0);
  const counter=document.getElementById("cart-count");

  if(counter) counter.textContent=count;
}

function addToCart() {
  if(!currentProduct) return;

  const input=document.getElementById("quantity");

  quantity=Math.max(1,Math.min(20,parseInt(input.value)||1));

  const existing=cart.find(item=>
    item.id===currentProduct.id &&
    item.color===selectedColor &&
    item.size===selectedSize
  );

  if(existing) {
    existing.quantity+=quantity;
  } else {
    cart.push({
      id:currentProduct.id,
      name:currentProduct.name,
      image:currentProduct.image,
      price:currentProduct.price,
      color:selectedColor,
      size:selectedSize,
      quantity
    });
  }

  saveCart();
  alert("Successfully added to your SHIFT bag!");
}

function openCart() {
  closeProduct();

  document.getElementById("cart-page").classList.add("show");
  document.body.style.overflow="hidden";

  renderCart();
}

function closeCart() {
  document.getElementById("cart-page").classList.remove("show");
  document.body.style.overflow="";
}

function renderCart() {
  const container=document.getElementById("cart-items");

  if(!cart.length) {
    container.innerHTML="<p>Your SHIFT bag is empty.</p>";
  } else {
    container.innerHTML=cart.map((item,index)=>`
      <div class="cart-row">
        <img src="${item.image}"
          alt="${escapeHTML(item.name)}"
          onerror="this.onerror=null;this.src='assets/products/product-placeholder.jpg';">

        <div style="flex:1">
          <h4>${escapeHTML(item.name)}</h4>
          <p>${escapeHTML(item.color)} / Size ${escapeHTML(item.size)}</p>
          <p>Quantity: ${item.quantity}</p>
          <strong>${money(item.price*item.quantity)}</strong>
        </div>

        <button onclick="removeCartItem(${index})">REMOVE</button>
      </div>
    `).join("");
  }

  const total=cart.reduce(
    (sum,item)=>sum+item.price*item.quantity,0
  );

  document.getElementById("cart-total").textContent=total.toFixed(2);
}

function removeCartItem(index) {
  cart.splice(index,1);
  saveCart();
  renderCart();
}

/* ==========================================
   WHATSAPP ORDER CHECKOUT
   ========================================== */

function checkout() {
  if(!cart.length) {
    alert("Your shopping bag is empty.");
    return;
  }

  // Enter your official WhatsApp number here.
  // Ghana example format: 233XXXXXXXXX
  const whatsappNumber="";

  if(!/^\d{10,15}$/.test(whatsappNumber)) {
    alert("SHIFT WhatsApp checkout has not been configured yet.");
    return;
  }

  const items=cart.map(item=>
    `${item.name} | ${item.color} | ${item.size} | Qty: ${item.quantity}`
  ).join("\n");

  const total=cart.reduce(
    (sum,item)=>sum+item.price*item.quantity,0
  );

  const message=
    `Hello SHIFT! I want to order:\n\n${items}\n\nTotal: ${money(total)}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

/* ==========================================
   INITIALIZE WEBSITE
   ========================================== */

function initializeSHIFT() {
  saveCart();
  renderProducts("All");

  console.log("SHIFT initialized successfully.");
  console.log("Total products:",products.length);
  console.log("Tops:",products.filter(p=>p.category==="Tops").length);
  console.log("Bottoms:",products.filter(p=>p.category==="Bottoms").length);
}

initializeSHIFT();
