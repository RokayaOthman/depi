// read id from URL
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

console.log("product id:", id);

// example products database
const products = [
  {
    id: 1,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$67",
    image: "/src/assets/products/img-11.png",
    description: "Comfortable cotton T-shirt designed for everyday wear.",
  },
  {
    id: 2,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$67",
    image: "/src/assets/products/img-7.png",
    description: "Comfortable cotton T-shirt designed for everyday wear.",
  },
  {
    id: 3,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$67",
    image: "/src/assets/products/img-4.png",
    description: "Comfortable cotton T-shirt designed for everyday wear.",
  },
  {
    id: 4,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$67",
    image: "/src/assets/products/img-5.png",
    description: "Comfortable cotton T-shirt designed for everyday wear.",
  },
  {
    id: 5,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$67",
    image: "/src/assets/products/img-6.png",
    description: "Comfortable cotton T-shirt designed for everyday wear.",
  },
  {
    id: 6,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$67",
    image: "/src/assets/products/img-9.png",
    description: "Comfortable cotton T-shirt designed for everyday wear.",
  },
  {
    id: 7,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: "$67",
    image: "/src/assets/products/img-2.png",
    description: "Comfortable cotton T-shirt designed for everyday wear.",
  },
];

// find the clicked product
const product = products.find((p) => p.id === id);

// update UI
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = product.price;
document.getElementById("product-image").src = product.image;
document.getElementById("product-description").textContent =
  product.description;

const buyNowButton = document.getElementById("buy-now-button");

const sizeButtons = document.querySelectorAll(".size-btn");
let selectedSize = null;
let finalsize = "XL";
sizeButtons.forEach((btn) => {
  // unselect the button if already selected
  btn.addEventListener("click", () => {
    if (selectedSize === btn.textContent) {
      btn.classList.remove("bg-red-500");
      selectedSize = null;
      return;
    }
    sizeButtons.forEach((b) => b.classList.remove("bg-red-500"));

    btn.classList.add("bg-red-500");
    selectedSize = btn.textContent;
  });
});

const cartCounterElement = document.querySelector(".cart-counter");
let cartCounter = Number(localStorage.getItem("cartCounter")) || 0
buyNowButton.addEventListener("click", () => {
  if (selectedSize == null) {
    alert("choose a size please");
    return;
  }
  cartCounter++;
  localStorage.setItem("cartCounter", cartCounter);
  cartCounterElement.textContent = cartCounter;
  console.log("Added size:", selectedSize);
});

cartCounterElement.textContent = cartCounter;

