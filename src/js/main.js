import development from "./development.js"
import pageAnimation from "./page-animation.js"
import hamburger from "./base/hamburger.js"

// development();
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
    if (document.querySelector(`#${item.getAttribute('data-popup')}`)) {
      document.querySelector(`#${item.getAttribute('data-popup')}`).classList.add('show')
      document.body.classList.add('modal')
    }
  })
})

// Change type password
document.querySelectorAll('.label-input__show').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    if (item.previousElementSibling.type === 'password') {
      item.previousElementSibling.type = 'text'
      item.querySelector('span').classList.add('icon-closed-eye')
      item.querySelector('span').classList.remove('icon-eye')
    } else {
      item.previousElementSibling.type = 'password'
      item.querySelector('span').classList.add('icon-eye')
      item.querySelector('span').classList.remove('icon-closed-eye')
    }
  })
})

// Form
document.querySelectorAll("form").forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(item)
    console.log(formData);
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

document.querySelectorAll('.accordion').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.accordion').forEach(i => {
      if (i === item) {
        i.classList.toggle('active')
      } else {
        i.classList.remove('active')
      }
    })
  })
})

document.querySelectorAll('.tab').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    document.querySelectorAll('.tab').forEach(i => i.classList.remove('active'))
    item.classList.add('active')
  })
})

// document.querySelector('.slider-navigation__prev').addEventListener('click', () => {
//   console.log(document.querySelector('.slider-navigation__prev'));
//   document.querySelector('.section-testimonials__slider').scrollTo({left: 1, top: 0, behavior: 'smooth'})
// })
// document.querySelector('.slider-navigation__next').addEventListener('click', () => {
//   console.log(document.querySelector('.slider-navigation__prev'));
//   document.querySelector('.section-testimonials__slider').scrollTo({left: 1000, top: 0, behavior: 'smooth'})
// })
// document.querySelectorAll('.slider-pagination__item').forEach((item, index) => {
//   item.addEventListener('click', () => {
//     document.querySelector('.section-testimonials__slider').scrollTo({left: index * 1000, top: 0, behavior: 'smooth'})
//   })
// })