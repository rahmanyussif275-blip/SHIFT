
const money = value => `GH₵${Number(value).toFixed(2)}`;

const stockImages = {
  tee: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  hoodie: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
  shirt: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
  jeans: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
  pants: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=85",
  model: "https://images.unsplash.com/photo-1529139574466-a303027c1d8?auto=format&fit=crop&w=900&q=85"
};

// Temporary image references only. Replace these with photographs
// of the exact SHIFT products before accepting customer orders.
const products = [
  // TOPS — 20
  {id:1,name:"Vintage Graphic Boxy Tee",category:"tops",type:"Graphic T-shirt",price:65,image:stockImages.tee,tag:"BESTSELLER",colors:["Black","Cream","White"],description:"A relaxed boxy graphic tee designed for everyday streetwear."},
  {id:2,name:"Puff Print Street Tee",category:"tops",type:"Graphic T-shirt",price:70,image:stockImages.tee,tag:"NEW",colors:["Black","White"],description:"Bold puff-print inspired streetwear styling."},
  {id:3,name:"Retro Washed Graphic Tee",category:"tops",type:"Graphic T-shirt",price:70,image:stockImages.tee,colors:["Charcoal","Olive","Cream"],description:"A vintage-inspired graphic tee with a relaxed silhouette."},
  {id:4,name:"Oversized Essential Tee",category:"tops",type:"Plain T-shirt",price:55,image:stockImages.tee,colors:["Black","White","Cream","Olive"],description:"An everyday oversized essential."},
  {id:5,name:"Heavyweight 240 GSM Tee",category:"tops",type:"Heavyweight T-shirt",price:70,image:stockImages.tee,colors:["Black","White","Charcoal"],description:"A heavyweight-inspired basic for a structured look."},
  {id:6,name:"Essential Cream Tee",category:"tops",type:"Plain T-shirt",price:55,image:stockImages.tee,colors:["Cream","White","Black"],description:"A clean minimal tee for everyday wear."},
  {id:7,name:"Minimal Chest Logo Tee",category:"tops",type:"Plain T-shirt",price:60,image:stockImages.tee,colors:["Black","White","Navy"],description:"Minimal chest-detail styling."},
  {id:8,name:"Waffle Knit Long Sleeve",category:"tops",type:"Long-sleeve T-shirt",price:70,image:stockImages.shirt,colors:["Cream","Black","Olive"],description:"Textured waffle-knit inspired long-sleeve top."},
  {id:9,name:"Thermal Long Sleeve Tee",category:"tops",type:"Long-sleeve T-shirt",price:70,image:stockImages.shirt,colors:["Charcoal","Cream"],description:"A comfortable long-sleeve layer."},
  {id:10,name:"Oversized Pullover Hoodie",category:"tops",type:"Hoodie",price:70,image:stockImages.hoodie,tag:"POPULAR",colors:["Black","Navy","Cream"],description:"A relaxed pullover hoodie with a streetwear silhouette."},
  {id:11,name:"Essential Zip Hoodie",category:"tops",type:"Zip-up Hoodie",price:70,image:stockImages.hoodie,colors:["Black","Grey","Cream"],description:"A versatile zip-up layer."},
  {id:12,name:"Minimal Logo Hoodie",category:"tops",type:"Hoodie",price:70,image:stockImages.hoodie,colors:["Black","Navy"],description:"A clean hoodie with minimal branding."},
  {id:13,name:"Classic Crewneck Sweatshirt",category:"tops",type:"Sweatshirt",price:70,image:stockImages.hoodie,colors:["Charcoal","Cream","Navy"],description:"A simple crewneck sweatshirt."},
  {id:14,name:"Oversized Crewneck",category:"tops",type:"Sweatshirt",price:70,image:stockImages.hoodie,colors:["Black","Olive"],description:"An oversized everyday crewneck."},
  {id:15,name:"Retro Football Jersey",category:"tops",type:"Sports Jersey",price:70,image:stockImages.shirt,tag:"SPORT",colors:["Navy","White","Black"],description:"A retro-inspired sports jersey."},
  {id:16,name:"Basketball Mesh Jersey",category:"tops",type:"Sports Jersey",price:70,image:stockImages.shirt,colors:["Black","White"],description:"A relaxed basketball-inspired mesh jersey."},
  {id:17,name:"Racing Graphic Jersey",category:"tops",type:"Sports Jersey",price:70,image:stockImages.shirt,colors:["Black","Red","White"],description:"Motorsport-inspired graphic styling."},
  {id:18,name:"Classic Flannel Shirt",category:"tops",type:"Button Shirt",price:70,image:stockImages.shirt,colors:["Navy","Black","Cream"],description:"A casual flannel-inspired button shirt."},
  {id:19,name:"Denim Overshirt",category:"tops",type:"Overshirt",price:70,image:stockImages.shirt,colors:["Blue","Black"],description:"A versatile denim-inspired layering piece."},
  {id:20,name:"Utility Workwear Shirt",category:"tops",type:"Overshirt",price:70,image:stockImages.shirt,colors:["Olive","Black","Cream"],description:"A utility-inspired overshirt."},

  // BOTTOMS — 20
  {id:21,name:"Baggy Wide-Leg Jeans",category:"bottoms",type:"Denim",price:70,image:stockImages.jeans,tag:"BESTSELLER",colors:["Light Blue","Black","Indigo"],description:"Relaxed wide-leg denim styling."},
  {id:22,name:"Faded Black Baggy Jeans",category:"bottoms",type:"Denim",price:70,image:stockImages.jeans,colors:["Faded Black"],description:"A faded black denim look."},
  {id:23,name:"Raw Indigo Wide Jeans",category:"bottoms",type:"Denim",price:70,image:stockImages.jeans,colors:["Indigo"],description:"A deep indigo inspired denim style."},
  {id:24,name:"Distressed Street Jeans",category:"bottoms",type:"Denim",price:70,image:stockImages.jeans,colors:["Blue","Black"],description:"A distressed streetwear-inspired denim look."},
  {id:25,name:"Stacked Denim Jeans",category:"bottoms",type:"Denim",price:70,image:stockImages.jeans,colors:["Blue","Black"],description:"A stacked-leg denim silhouette."},
  {id:26,name:"Relaxed Stacked Jeans",category:"bottoms",type:"Denim",price:70,image:stockImages.jeans,colors:["Light Blue","Charcoal"],description:"A relaxed stacked denim fit."},
  {id:27,name:"Utility Cargo Pants",category:"bottoms",type:"Cargo Pants",price:70,image:stockImages.pants,tag:"POPULAR",colors:["Olive","Black","Khaki"],description:"Utility-inspired cargo trousers."},
  {id:28,name:"Parachute Cargo Pants",category:"bottoms",type:"Parachute Pants",price:70,image:stockImages.pants,colors:["Black","Grey","Olive"],description:"Relaxed parachute-inspired trousers."},
  {id:29,name:"Multi-Pocket Cargo Pants",category:"bottoms",type:"Cargo Pants",price:70,image:stockImages.pants,colors:["Black","Khaki"],description:"A functional multi-pocket streetwear look."},
  {id:30,name:"Relaxed Utility Trousers",category:"bottoms",type:"Cargo Pants",price:70,image:stockImages.pants,colors:["Olive","Charcoal"],description:"Relaxed utility-inspired trousers."},
  {id:31,name:"Baggy Fleece Sweatpants",category:"bottoms",type:"Sweatpants",price:65,image:stockImages.pants,colors:["Black","Grey","Cream"],description:"Comfortable baggy sweatpants."},
  {id:32,name:"Cuffed Everyday Joggers",category:"bottoms",type:"Joggers",price:60,image:stockImages.pants,colors:["Black","Grey"],description:"Everyday cuffed joggers."},
  {id:33,name:"Relaxed Straight Sweatpants",category:"bottoms",type:"Sweatpants",price:65,image:stockImages.pants,colors:["Charcoal","Navy"],description:"Straight-leg relaxed sweatpants."},
  {id:34,name:"Minimal Logo Joggers",category:"bottoms",type:"Joggers",price:60,image:stockImages.pants,colors:["Black","Olive"],description:"Minimal everyday joggers."},
  {id:35,name:"Baggy Denim Jorts",category:"bottoms",type:"Denim Shorts",price:65,image:stockImages.jeans,colors:["Light Blue","Black"],description:"Relaxed baggy denim shorts."},
  {id:36,name:"Distressed Denim Jorts",category:"bottoms",type:"Denim Shorts",price:65,image:stockImages.jeans,colors:["Blue","Black"],description:"Distressed denim shorts."},
  {id:37,name:"Utility Cargo Shorts",category:"bottoms",type:"Cargo Shorts",price:60,image:stockImages.pants,colors:["Olive","Black","Khaki"],description:"Casual cargo shorts with utility styling."},
  {id:38,name:"Everyday Cargo Shorts",category:"bottoms",type:"Cargo Shorts",price:60,image:stockImages.pants,colors:["Black","Cream"],description:"Simple utility-inspired shorts."},
  {id:39,name:"Athletic Mesh Shorts",category:"bottoms",type:"Athletic Shorts",price:55,image:stockImages.pants,colors:["Black","Navy","White"],description:"Lightweight athletic-inspired mesh shorts."},
  {id:40,name:"Street Sport Shorts",category:"bottoms",type:"Athletic Shorts",price:55,image:stockImages.pants,colors:["Black","Grey"],description:"Relaxed sports-inspired shorts."}
];

const sizes = ["S","M","L","XL","XXL"];
const colorHex = {
  Black:"#141414", White:"#ffffff", Cream:"#f6e8d0",
  Charcoal:"#44464b", Olive:"#66704b", Navy:"#1e2640",
  Grey:"#929292", Khaki:"#b6a17b", "Light Blue":"#9ebbd2",
  Blue:"#426b9a", Indigo:"#243b65", "Faded Black":"#3b3b3b",
  Red:"#a52c2c"
};

let activeFilter = "all";
let activeProduct = null;
let selectedColor = "";
let selectedSize = "";
let selectedFit = "slim";
let cart = JSON.parse(localStorage.getItem("shiftCart") || "[]");

const $ = id => document.getElementById(id);

function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2300);
}

function saveCart() {
  localStorage.setItem("shiftCart", JSON.stringify(cart));
  updateCart();
}

function renderProducts() {
  let list = [...products];

  if (activeFilter !== "all") {
    list = list.filter(p => p.category === activeFilter);
  }

  const search = $("searchInput").value.trim().toLowerCase();
  if (search) {
    list = list.filter(p =>
      `${p.name} ${p.type} ${p.description}`.toLowerCase().includes(search)
    );
  }

  const sort = $("sortSelect").value;
  if (sort === "low") list.sort((a,b) => a.price - b.price);
  if (sort === "high") list.sort((a,b) => b.price - a.price);
  if (sort === "name") list.sort((a,b) => a.name.localeCompare(b.name));

  $("topsGrid").innerHTML = "";
  $("bottomsGrid").innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
        <button class="quick-add" type="button">VIEW PRODUCT ↗</button>
      </div>
      <div class="product-meta">
        <h3>${product.name}</h3>
        <p>${product.type}</p>
        <div class="product-price">
          <span>${money(product.price)}</span>
          <button type="button" aria-label="View ${product.name}">+</button>
        </div>
      </div>`;
    card.addEventListener("click", () => openProduct(product.id));
    if (product.category === "tops") $("topsGrid").appendChild(card);
    else $("bottomsGrid").appendChild(card);
  });

  $("tops").style.display = activeFilter === "bottoms" ? "none" : "";
  $("bottoms").style.display = activeFilter === "tops" ? "none" : "";
}

function openProduct(id) {
  activeProduct = products.find(p => p.id === id);
  if (!activeProduct) return;

  selectedColor = activeProduct.colors[0];
  selectedSize = "";
  selectedFit = "slim";

  $("detailCategory").textContent = activeProduct.type.toUpperCase();
  $("detailName").textContent = activeProduct.name;
  $("detailPrice").textContent = money(activeProduct.price);
  $("addPrice").textContent = money(activeProduct.price);
  $("detailDescription").textContent = activeProduct.description;
  $("detailImage").src = activeProduct.image;

  $("detailColors").innerHTML = activeProduct.colors.map(color => `
    <button class="color-chip ${color === selectedColor ? "selected" : ""}"
      style="background:${colorHex[color] || "#aaa"}"
      title="${color}" aria-label="${color}" data-color="${color}"></button>
  `).join("");

  $("detailSizes").innerHTML = sizes.map(size => `
    <button class="size-chip" data-size="${size}">${size}</button>
  `).join("");

  document.querySelectorAll("#fitTabs button").forEach(button => {
    button.classList.toggle("active", button.dataset.fit === selectedFit);
  });

  updateFitPreview();
  $("productModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function updateFitPreview() {
  const fitDescriptions = {
    slim: "Slim fit preview — a closer silhouette.",
    regular: "Regular fit preview — a balanced everyday silhouette.",
    relaxed: "Relaxed fit preview — a looser streetwear silhouette."
  };

  // Temporary model reference. Replace with actual SHIFT fit photographs.
  $("fitImage").src = stockImages.model;
  $("fitCaption").textContent = fitDescriptions[selectedFit];
}

function closeModal(id) {
  $(id).classList.remove("open");
  document.body.style.overflow = "";
}

function addToCart(product, color, size) {
  const existing = cart.find(item =>
    item.id === product.id && item.color === color && item.size === size
  );

  if (existing) existing.quantity += 1;
  else cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    color,
    size,
    quantity: 1
  });

  saveCart();
  toast("Added to your bag.");
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  $("cartCount").textContent = count;
  $("drawerCount").textContent = `(${count})`;
  $("cartTotal").textContent = money(total);

  if (!cart.length) {
    $("cartItems").innerHTML = `<p class="empty-cart">Your bag is empty. Find something you love.</p>`;
  } else {
    $("cartItems").innerHTML = cart.map((item, index) => `
      <div class="cart-line">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.color} / Size ${item.size}</p>
          <p>${money(item.price)}</p>
          <div class="quantity-controls">
            <button data-action="minus" data-index="${index}">−</button>
            <span>${item.quantity}</span>
            <button data-action="plus" data-index="${index}">+</button>
          </div>
        </div>
        <button class="remove-item" data-action="remove" data-index="${index}">×</button>
      </div>
    `).join("");
  }
}

function openCart() {
  $("cartBackdrop").classList.add("open");
  $("cartDrawer").classList.add("open");
}

function closeCart() {
  $("cartBackdrop").classList.remove("open");
  $("cartDrawer").classList.remove("open");
}

function checkoutEnquiry() {
  if (!cart.length) {
    toast("Your bag is empty.");
    return;
  }

  // Add SHIFT's real WhatsApp number, including country code, below.
  const whatsappNumber = "";

  if (!whatsappNumber) {
    toast("WhatsApp number has not been configured yet.");
    return;
  }

  const lines = cart.map(item =>
    `${item.quantity} x ${item.name} | ${item.color} | Size ${item.size} | ${money(item.price * item.quantity)}`
  );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = [
    "Hello SHIFT.GH, I would like to enquire about this order:",
    "",
    ...lines,
    "",
    `Subtotal: ${money(total)}`,
    "",
    "Please confirm availability and delivery details."
  ].join("\n");

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener"
  );
}

// PRODUCT DETAIL EVENTS
$("detailColors").addEventListener("click", event => {
  const button = event.target.closest("[data-color]");
  if (!button) return;
  selectedColor = button.dataset.color;
  document.querySelectorAll(".color-chip").forEach(el =>
    el.classList.toggle("selected", el.dataset.color === selectedColor)
  );
});

$("detailSizes").addEventListener("click", event => {
  const button = event.target.closest("[data-size]");
  if (!button) return;
  selectedSize = button.dataset.size;
  document.querySelectorAll(".size-chip").forEach(el =>
    el.classList.toggle("selected", el.dataset.size === selectedSize)
  );
});

$("fitTabs").addEventListener("click", event => {
  const button = event.target.closest("[data-fit]");
  if (!button) return;
  selectedFit = button.dataset.fit;
  document.querySelectorAll("#fitTabs button").forEach(el =>
    el.classList.toggle("active", el === button)
  );
  updateFitPreview();
});

$("addToCart").addEventListener("click", () => {
  if (!selectedSize) {
    toast("Please select a size.");
    return;
  }
  addToCart(activeProduct, selectedColor, selectedSize);
  closeModal("productModal");
});

// FILTERS
$("filterTabs").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(el =>
    el.classList.toggle("active", el === button)
  );
  renderProducts();
});

$("sortSelect").addEventListener("change", renderProducts);
$("searchButton").addEventListener("click", renderProducts);
$("searchInput").addEventListener("input", renderProducts);
$("searchToggle").addEventListener("click", () => $("searchPanel").classList.toggle("open"));

// CART EVENTS
$("cartToggle").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("cartBackdrop").addEventListener("click", closeCart);
$("continueShopping").addEventListener("click", closeCart);
$("whatsappCheckout").addEventListener("click", checkoutEnquiry);

$("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const index = Number(button.dataset.index);
  const item = cart[index];
  if (!item) return;

  if (button.dataset.action === "plus") item.quantity += 1;
  if (button.dataset.action === "minus") item.quantity -= 1;
  if (button.dataset.action === "remove" || item.quantity <= 0) cart.splice(index, 1);

  saveCart();
});

// MODAL CLOSE
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => closeModal(button.dataset.close));
});

document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) closeModal(backdrop.id);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal-backdrop.open").forEach(el => closeModal(el.id));
    closeCart();
  }
});

// MOBILE MENU
$("menuToggle").addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.toggle("open");
});

document.querySelectorAll(".desktop-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".desktop-nav").classList.remove("open");
  });
});

// REVIEWS — LOCAL BROWSER STORAGE ONLY
function getReviews() {
  return JSON.parse(localStorage.getItem("shiftReviews") || "[]");
}

function renderReviews() {
  const reviews = getReviews();
  $("reviewList").innerHTML = reviews.length
    ? reviews.map(review => `
      <div class="review-item">
        <strong>${escapeHTML(review.name)}</strong>
        <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}</div>
        <p>${escapeHTML(review.text)}</p>
      </div>
    `).join("")
    : `<p class="small-note">No customer reviews yet.</p>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);
}

$("reviewForm").addEventListener("submit", event => {
  event.preventDefault();
  const reviews = getReviews();
  reviews.unshift({
    name: $("reviewName").value.trim(),
    rating: Number($("reviewRating").value),
    text: $("reviewText").value.trim()
  });
  localStorage.setItem("shiftReviews", JSON.stringify(reviews));
  $("reviewForm").reset();
  renderReviews();
  toast("Review saved on this device.");
});

// NEWSLETTER DEMO
$("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  $("newsletterMessage").textContent =
    "Thanks for your interest! Newsletter sign-up is a demo and does not send emails yet.";
  $("newsletterForm").reset();
});

$("year").textContent = new Date().getFullYear();

renderProducts();
updateCart();
renderReviews();
