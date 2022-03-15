const navLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  console.log("clicked");
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");
});
