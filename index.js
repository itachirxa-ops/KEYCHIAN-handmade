// 1. Mobile Menu Logic
let menu = document.querySelector("#toggler");
let navbar = document.querySelector(".navbar");

// When the user scrolls, hide the menu (common UX practice)
window.onscroll = () => {
  menu.checked = false;
};

// 2. Add to Cart Logic
// This finds all your "add to cart" buttons
const cartButtons = document.querySelectorAll(".cart-btn");
let cartCount = 0;

cartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents the page from jumping up
    cartCount++;

    // Find the "cart" icon in the header and update it
    const cartIcon = document.querySelector(".fa-shopping-cart");
    cartIcon.style.color = "pink"; // Visual feedback

    alert("Added to cart! Total items: " + cartCount);
  });
});

// 3. Smooth Scrolling for Navigation Links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
