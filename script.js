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

  function renderProducts() {
    // Displays the products on the website.
  }

})();
