 ## 3- script.js
```javascript
// Scroll animation
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.7)";
  }
});

// Simple welcome message
console.log("Welcome To Ganna Portfolio");
```