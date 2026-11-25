(() => {
  "use strict";

  const money = value => `GH₵${Number(value).toFixed(2)}`;

  const products = [
    {
      id: 1,
      name: "Vintage Graphic Boxy Tee",
      category: "tops",
      price: 65,
      colors: ["Black", "Cream", "White"]
    },
    {
      id: 2,
      name: "Puff Print Street Tee",
      category: "tops",
      price: 70,
      colors: ["Black", "White"]
    }
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  let cartCount = 0;

  function renderProducts() {
    const topsGrid = document.getElementById("topsGrid");
    const bottomsGrid = document.getElementById("bottomsGrid");

    if (!topsGrid || !bottomsGrid) return;

    topsGrid.replaceChildren();
    bottomsGrid.replaceChildren();

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      const title = document.createElement("h3");
      title.textContent = product.name;

      const price = document.createElement("p");
      price.className = "product-price";
      price.textContent = money(product.price);

      const options = document.createElement("div");
      options.className = "product-options";

      const colorLabel = document.createElement("label");
      const colorSelect = document.createElement("select");
      colorSelect.setAttribute("aria-label", `Color for ${product.name}`);
      product.colors.forEach(color => {
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.append(option);
      });
      colorLabel.append("Color ", colorSelect);

      const sizeLabel = document.createElement("label");
      const sizeSelect = document.createElement("select");
      sizeSelect.setAttribute("aria-label", `Size for ${product.name}`);
      sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.append(option);
      });
      sizeLabel.append("Size ", sizeSelect);

      const addButton = document.createElement("button");
      addButton.type = "button";
      addButton.className = "add-to-bag";
      addButton.textContent = "Add to Bag";
      addButton.addEventListener("click", () => {
        cartCount += 1;
        const cartCountElement = document.getElementById("cartCount");
        if (cartCountElement) cartCountElement.textContent = String(cartCount);
        addButton.textContent = "Added";
        window.setTimeout(() => {
          addButton.textContent = "Add to Bag";
        }, 900);
      });

      options.append(colorLabel, sizeLabel);
      card.append(title, price, options, addButton);

      if (product.category === "tops") {
        topsGrid.append(card);
      } else {
        bottomsGrid.append(card);
      }
    });
  }

  function setupControls() {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    if (menuToggle && mainNav) {
      menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });
    }

    const searchToggle = document.getElementById("searchToggle");
    if (searchToggle) {
      searchToggle.addEventListener("click", () => {
        const shop = document.getElementById("shop");
        if (shop) shop.scrollIntoView({ behavior: "smooth" });
      });
    }

    const cartToggle = document.getElementById("cartToggle");
    if (cartToggle) {
      cartToggle.addEventListener("click", () => {
        const count = document.getElementById("cartCount")?.textContent || "0";
        window.alert(`Your bag has ${count} item${count === "1" ? "" : "s"}.`);
      });
    }

    document.querySelectorAll(".desktop-nav a").forEach(link => {
      link.addEventListener("click", () => {
        if (mainNav) mainNav.classList.remove("open");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  renderProducts();
  setupControls();
})();
