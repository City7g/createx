import development from "./development.js";
import { showPopup, closePopup } from "./popup.js";
import hamburger from "./base/hamburger.js";
// import barba from '@barba/core'
// import gsap from 'gsap'

development();
hamburger();

// barba.init({
//   transitions: [{
//     name: 'opacity-transition',
//     leave(data) {
//       return gsap.to(data.current.container, {
//         opacity: 0,
//         duration: 0.3
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0,
//         duration: 0.3
//       });
//     }
//   }]
// })

// Header Scrolled
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 10) {
    document.querySelector("header").classList.add("header--scrolled");
  } else {
    document.querySelector("header").classList.remove("header--scrolled");
  }
});

// Popup
document.querySelectorAll("form").forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(item)
    console.log(formData);
    showPopup(".popup");
  });

  // document.querySelector(".popup").addEventListener("scroll", (e) => {
  //   console.log(e);
  // });
});

window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("popup") ||
    e.target.classList.contains("popup__close")
  ) {
    document.querySelectorAll(".popup").forEach((item) => closePopup(item));
  }
});
