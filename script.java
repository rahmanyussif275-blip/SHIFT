
const products = [
  {
    id: 1, name: "Vintage Boxy Graphic Tee", category: "Tops",
    price: 65, rating: 4.8, reviews: 24,
    description: "Relaxed boxy silhouette with vintage-inspired graphic styling. Designed for everyday streetwear.",
    colors: ["Black", "White", "Cream", "Navy"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900",
    extra: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900"
  },
  {
    id: 2, name: "Heavyweight Essential Tee", category: "Tops",
    price: 55, rating: 4.9, reviews: 31,
    description: "Minimal heavyweight round-neck essential. Inspired by premium 240+ GSM streetwear.",
    colors: ["Black", "White", "Charcoal", "Cream", "Olive"],
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900",
    extra: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900"
  },
  {
    id: 3, name: "Thermal Waffle Long Sleeve", category: "Tops",
    price: 70, rating: 4.7, reviews: 12,
    description: "Long-sleeve waffle-knit inspired top with a comfortable textured finish.",
    colors: ["Black", "White", "Cream", "Olive"],
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=900",
    extra: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900"
  },
  {
    id: 4, name: "Oversized Street Hoodie", category: "Tops",
    price: 120, rating: 4.9, reviews: 45,
    description: "Oversized hoodie with a relaxed streetwear silhouette and comfortable construction.",
    colors: ["Black", "Grey", "Cream", "Navy"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900",
    extra: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=900"
  },
  {
    id: 5, name: "Premium Zip-Up Hoodie", category: "Tops",
    price: 130, rating: 4.8, reviews: 19,
    description: "Versatile zip-up hoodie with a relaxed everyday fit.",
    colors: ["Black", "Grey", "Cream"],
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=900",
    extra: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900"
  },
  {
    id: 6, name: "Classic Crewneck Sweatshirt", category: "Tops",
    price: 95, rating: 4.6, reviews: 17,
    description: "Clean crewneck sweatshirt with a relaxed silhouette.",
    colors: ["Black", "White", "Grey", "Olive"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900",
    extra: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=900"
  },
  {
    id: 7, name: "Retro Oversized Sports Jersey", category: "Tops",
    price: 90, rating: 4.9, reviews: 37,
    description: "Oversized sports-inspired jersey drawing from retro football, basketball and racing culture.",
    colors: ["Black", "White", "Red", "Blue"],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900",
    extra: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900"
  },
  {
    id: 8, name: "Baggy Wide-Leg Jeans", category: "Bottoms",
    price: 150, rating: 4.9, reviews: 29,
    description: "Relaxed wide-leg denim with a contemporary oversized silhouette.",
    colors: ["Light Wash", "Faded Black", "Indigo", "Distressed"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900",
    extra: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900"
  },
  {
    id: 9, name: "Stacked Denim Jeans", category: "Bottoms",
    price: 165, rating: 4.7, reviews: 16,
    description: "Stacked denim design with a longer streetwear-inspired leg profile.",
    colors: ["Black", "Blue", "Indigo"],
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900",
    extra: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900"
  },
  {
    id: 10, name: "Utility Cargo Pants", category: "Bottoms",
    price: 135, rating: 4.8, reviews: 22,
    description: "Functional cargo-inspired trousers with relaxed proportions.",
    colors: ["Black", "Olive", "Khaki", "Grey"],
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900",
    extra: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900"
  },
  {
    id: 11, name: "Baggy Sweatpants & Joggers", category: "Bottoms",
    price: 100, rating: 4.8, reviews: 26,
    description: "Comfort-focused relaxed sweatpants with an easy everyday silhouette.",
    colors: ["Black", "Grey", "Cream", "Navy"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=900",
    extra: "https://images.unsplash.com/photo-1506629905607-d9c36f1a7c20?w=900"
  },
  {
    id: 12, name: "Baggy Denim Jorts", category: "Bottoms",
    price: 85, rating: 4.7, reviews: 14,
    description: "Relaxed denim shorts with a baggy streetwear-inspired cut.",
    colors: ["Blue", "Black", "Light Wash"],
    image: "https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?w=900",
    extra: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900"
  },
  {
    id: 13, name: "Cargo & Athletic Mesh Shorts", category: "Bottoms",
    price: 75, rating: 4.8, reviews: 21,
    description: "Relaxed utility and athletic-inspired shorts for everyday comfort.",
    colors: ["Black", "Olive", "Grey", "Navy"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900",
    extra: "https://images.unsplash.com/photo-1506629905607-d9c36f1a7c20?w=900"
  }
];

const colorHex = {
  "Black": "#141414",
  "White": "#ffffff",
  "Cream": "#f6e8d0",
  "Navy": "#1e2640",
  "Charcoal": "#424242",
  "Olive": "#65734c",
  "Grey": "#929292",
  "Red": "#b52b32",
  "Blue": "#355c91",
  "Light Wash": "#9bb8ce",
  "Faded Black": "#393939",
  "Indigo": "#303c60",
  "Distressed": "#8293a0",
  "Khaki": "#b5a47b"
};

let cart = JSON.parse(localStorage.getItem("shift-cart") || "[]");
let currentProduct = null;
let selectedColor = "";
let selectedSize = "M";
let selectedFit = "all";
let currentImage = "";

function saveCart() {
  localStorage.setItem("shift-cart", JSON.stringify(cart));
  document.getElementById("cart-count").textContent =
    cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderProducts(category = "All") {
  const grid = document.getElementById("product-grid");

  const filtered = products.filter(p =>
    category === "All" ||
    (category === "Tops" && p.category === "Tops") ||
    (category === "Bottoms" && p.category === "Bottoms")
  );

  grid.innerHTML = filtered.map(p => `
    <article class="product-card" onclick="openProduct(${p.id})">
      <div class="product-photo">
        <img src="${p.image}" alt="${p.name} product photograph"
             loading="lazy">
        <span class="product-category">${p.category}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>★ ${p.rating} · ${p.reviews} reviews</p>
        <p class="product-price">GH₵ ${p.price.toFixed(2)}</p>
      </div>
    </article>
  `).join("");

  document.getElementById("product-total").textContent =
    `${filtered.length} pieces`;
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b =>
      b.classList.remove("active")
    );
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

function openProduct(id) {
  currentProduct = products.find(p => p.id === id);
  selectedColor = currentProduct.colors[0];
  selectedSize = "M";
  selectedFit = "all";
  currentImage = currentProduct.image;

  document.getElementById("product-page").classList.add("show");
  document.body.style.overflow = "hidden";

  renderProductDetail();
  window.scrollTo(0, 0);
}

function closeProduct() {
  document.getElementById("product-page").classList.remove("show");
  document.body.style.overflow = "";
}

function renderProductDetail() {
  const p = currentProduct;

  const detail = document.getElementById("product-detail");

  detail.innerHTML = `
    <div class="detail-layout">
      <div>
        <div class="detail-main-image">
          <img id="main-product-image" src="${currentImage}"
               alt="${p.name}">
        </div>

        <div class="detail-thumbnails">
          <img class="selected" src="${p.image}"
               onclick="changeImage('${p.image}',this)">
          <img src="${p.extra}"
               onclick="changeImage('${p.extra}',this)">
        </div>
      </div>

      <div class="detail-info">
        <p class="eyebrow">${p.category} / SHIFT COLLECTION</p>
        <h1>${p.name}</h1>
        <p>★ ${p.rating} (${p.reviews} ratings)</p>
        <div class="detail-price">GH₵ ${p.price.toFixed(2)}</div>
        <p class="detail-description">${p.description}</p>

        <div class="option-label">SELECT COLOUR: <span id="color-name">${selectedColor}</span></div>
        <div class="color-options">
          ${p.colors.map(c => `
            <button class="color-option ${c === selectedColor ? "selected" : ""}"
              style="background:${colorHex[c] || "#888"}"
              title="${c}" onclick="selectColor('${c}')"></button>
          `).join("")}
        </div>

        <p class="option-label">SELECT SIZE</p>
        <div class="size-options">
          ${["S","M","L","XL","XXL"].map(s => `
            <button class="size-option ${s === selectedSize ? "selected" : ""}"
              onclick="selectSize('${s}')">${s}</button>
          `).join("")}
        </div>

        <p class="option-label">QUANTITY</p>
        <input id="quantity" class="quantity-input" type="number"
          value="1" min="1" max="20">

        <div class="detail-actions">
          <button class="primary-button" onclick="addToCart()">
            ADD TO BAG
          </button>
        </div>
        <p class="small-note">Prices are displayed in Ghana cedis.</p>
      </div>
    </div>

    <section class="fit-section">
      <p class="eyebrow">FIND YOUR PERFECT FIT</p>
      <h2>See it. Imagine it. Wear it.</h2>
      <p>Explore how this style looks across different body types.</p>

      <div class="fit-controls">
        <button class="active" onclick="selectFit('all',this)">SWIPE ALL</button>
        <button onclick="selectFit('slim',this)">SLIM</button>
        <button onclick="selectFit('normal',this)">NORMAL</button>
        <button onclick="selectFit('fat',this)">PLUS SIZE</button>
      </div>

      <div class="model-gallery" id="model-gallery">
        ${modelCards()}
      </div>
      <p class="fit-note">
        Model previews are illustrative fit references, not a live virtual
        try-on. Upload approved photographs of models wearing each actual
        SHIFT garment to make these previews product-specific.
      </p>
    </section>

    <section class="review-section">
      <p class="eyebrow">CUSTOMER EXPERIENCE</p>
      <h2>Customer reviews</h2>
      <div class="rating-summary" id="rating-summary"></div>
      <div id="review-list"></div>

      <h3 style="margin-top:30px">Write a review</h3>
      <form class="review-form" onsubmit="submitReview(event)">
        <input id="review-name" placeholder="Your name" required>
        <select id="review-rating" required>
          <option value="5">★★★★★ - Excellent</option>
          <option value="4">★★★★ - Very good</option>
          <option value="3">★★★ - Good</option>
          <option value="2">★★ - Fair</option>
          <option value="1">★ - Poor</option>
        </select>
        <textarea id="review-text" placeholder="Share your experience..."
          required></textarea>
        <button class="primary-button" type="submit">SUBMIT REVIEW</button>
      </form>
      <p class="small-note">
        Demo reviews are stored in this browser. They are not verified
        purchases and are not shared between customers.
      </p>
    </section>
  `;

  renderReviews();
}

function changeImage(url, element) {
  currentImage = url;
  document.getElementById("main-product-image").src = url;

  document.querySelectorAll(".detail-thumbnails img").forEach(img =>
    img.classList.remove("selected")
  );

  element.classList.add("selected");
}

function selectColor(color) {
  selectedColor = color;

  document.querySelectorAll(".color-option").forEach(btn => {
    btn.classList.toggle("selected", btn.title === color);
  });

  document.getElementById("color-name").textContent = color;

  // Approximate colour preview. For accurate colour variants,
  // upload a separate photograph for every product colour.
  const image = document.getElementById("main-product-image");
  image.style.filter = getColorFilter(color);
}

function getColorFilter(color) {
  const filters = {
    Black: "brightness(.55) saturate(.8)",
    White: "brightness(1.25) saturate(.2)",
    Cream: "sepia(.3) brightness(1.08)",
    Navy: "sepia(.3) hue-rotate(175deg) saturate(1.5)",
    Olive: "sepia(.5) hue-rotate(25deg) saturate(1.2)",
    Grey: "grayscale(.8)",
    Charcoal: "grayscale(.8) brightness(.7)",
    Red: "sepia(.5) saturate(3) hue-rotate(310deg)",
    Blue: "sepia(.3) saturate(2) hue-rotate(175deg)",
    "Light Wash": "grayscale(.3) brightness(1.15)",
    "Faded Black": "grayscale(.7) brightness(.65)",
    Indigo: "sepia(.4) hue-rotate(175deg)",
    Distressed: "grayscale(.4) brightness(1.1)",
    Khaki: "sepia(.5) saturate(.8)",
    "Faded Black": "grayscale(.7) brightness(.65)"
  };

  return filters[color] || "none";
}

function selectSize(size) {
  selectedSize = size;

  document.querySelectorAll(".size-option").forEach(btn => {
    btn.classList.toggle("selected", btn.textContent === size);
  });
}

// Replace these example portrait URLs with three approved
// African male model photographs for each garment.
const modelPhotos = {
  slim: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  normal: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  fat: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
};

function modelCards() {
  const models = [
    { type: "slim", label: "SLIM FIT" },
    { type: "normal", label: "REGULAR BUILD" },
    { type: "fat", label: "PLUS SIZE" }
  ];

  return models
    .filter(m => selectedFit === "all" || selectedFit === m.type)
    .map(m => `
      <article class="model-card">
        <img src="${modelPhotos[m.type]}" alt="${m.label} model preview"
             loading="lazy">
        <h3>${m.label}</h3>
      </article>
    `).join("");
}

function selectFit(fit, button) {
  selectedFit = fit;

  document.querySelectorAll(".fit-controls button").forEach(btn =>
    btn.classList.remove("active")
  );

  button.classList.add("active");

  const gallery = document.getElementById("model-gallery");
  gallery.classList.toggle("single", fit !== "all");
  gallery.innerHTML = modelCards();
}

// REVIEWS

function getReviews() {
  return JSON.parse(
    localStorage.getItem("shift-reviews-" + currentProduct.id) || "[]"
  );
}

function renderReviews() {
  const reviews = getReviews();
  const summary = document.getElementById("rating-summary");
  const list = document.getElementById("review-list");

  const average = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : currentProduct.rating;

  summary.innerHTML =
    `★ ${average.toFixed(1)} / 5 <span style="font-size:13px;color:#888">(${reviews.length} customer-submitted reviews in this browser)</span>`;

  list.innerHTML = reviews.length
    ? reviews.map(r => `
      <article class="review-item">
        <h4>${escapeHTML(r.name)} · ${"★".repeat(r.rating)}</h4>
        <p>${escapeHTML(r.text)}</p>
      </article>
    `).join("")
    : "<p>No customer-submitted reviews yet. Be the first to review!</p>";
}

function submitReview(event) {
  event.preventDefault();

  const name = document.getElementById("review-name").value.trim();
  const rating = Number(document.getElementById("review-rating").value);
  const review = document.getElementById("review-text").value.trim();

  if (!name || !review || rating < 1 || rating > 5) return;

  const reviews = getReviews();

  reviews.unshift({
    name,
    rating,
    text: review
  });

  localStorage.setItem(
    "shift-reviews-" + currentProduct.id,
    JSON.stringify(reviews)
  );

  event.target.reset();
  renderReviews();
  alert("Your review has been added to this browser!");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// SHOPPING BAG

function addToCart() {
  const quantity = Math.max(
    1,
    Math.min(20, parseInt(document.getElementById("quantity").value) || 1)
  );

  const existing = cart.find(item =>
    item.id === currentProduct.id &&
    item.color === selectedColor &&
    item.size === selectedSize
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
  }

  saveCart();
  alert("Added to your SHIFT shopping bag!");
}

function openCart() {
  closeProduct();

  document.getElementById("cart-page").classList.add("show");
  document.body.style.overflow = "hidden";
  renderCart();
}

function closeCart() {
  document.getElementById("cart-page").classList.remove("show");
  document.body.style.overflow = "";
}

function renderCart() {
  const container = document.getElementById("cart-items");

  if (!cart.length) {
    container.innerHTML = "<p>Your shopping bag is empty.</p>";
  } else {
    container.innerHTML = cart.map((item, index) => `
      <div class="cart-row">
        <img src="${item.image}" alt="${escapeHTML(item.name)}">
        <div style="flex:1">
          <h4>${escapeHTML(item.name)}</h4>
          <p>${escapeHTML(item.color)} / ${escapeHTML(item.size)}</p>
          <p>Quantity: ${item.quantity}</p>
          <strong>GH₵ ${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
        <button onclick="removeCartItem(${index})">REMOVE</button>
      </div>
    `).join("");
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function checkout() {
  if (!cart.length) {
    alert("Your shopping bag is empty.");
    return;
  }

  const lines = cart.map(item =>
    `${item.name} | ${item.color} | Size ${item.size} | Qty ${item.quantity}`
  ).join("\n");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const message =
    `Hello SHIFT! I would like to place an order:\n\n${lines}\n\nTotal: GH₵ ${total.toFixed(2)}`;

  // Replace with your official business WhatsApp number.
  const whatsappNumber = "";

  if (!/^\d{10,15}$/.test(whatsappNumber)) {
    alert("Online checkout is not configured yet. Add your official WhatsApp business number in script.js.");
    return;
  }

  window.open(
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

saveCart();
renderProducts();
