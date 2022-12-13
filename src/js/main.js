import development from "./development.js";
import pageAnimation from "./page-animation.js";
import { showPopup, closePopup } from "./popup.js";
import hamburger from "./base/hamburger.js";

development();
hamburger();
// pageAnimation();

// Header Scrolled
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 10) {
    document.querySelector("header").classList.add("header--scrolled");
  } else {
    document.querySelector("header").classList.remove("header--scrolled");
  }
});

// Popup
document.querySelectorAll('button[data-popup], a[data-popup]').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(`#${item.getAttribute('data-popup')}`).classList.add('show')
    document.body.classList.add('modal')
  })
})

// Form
document.querySelectorAll("form").forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(item)
    console.log(formData);
    showPopup(".popup");
  });
});

window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("popup") ||
    e.target.classList.contains("popup__close")
  ) {
    document.querySelectorAll(".popup").forEach(item => {
      item.classList.remove('show')
      document.body.classList.remove('modal')
    });
  }
});
