// Header Hamburger
const hamburger = () => {
  document.querySelector(".header-hamb").addEventListener("click", () => {
    document.body.classList.toggle('menu')
  });
  
  window.addEventListener("click", (e) => {
    if (!document.querySelector(".header").contains(e.target)) {
      document.body.classList.remove('menu')
    }
  });
  
  window.addEventListener('resize', () => {
    document.body.classList.remove('menu')
  })

  const mobileGrid = () => {
    if(window.innerWidth < 1199) {
      document.querySelector('.header-mobile').append(document.querySelector('.header__nav'))
    } else {
      document.querySelector('.header-mobile').before(document.querySelector('.header__nav'))
    }
  
    if(window.innerWidth < 450) {
      document.querySelector('.header-mobile').append(document.querySelector('.header__consultation'))
    } else {
      document.querySelector('.header-mobile').before(document.querySelector('.header__consultation'))
    }
  
    if(window.innerWidth < 767) {
      document.querySelector('.header-mobile').append(document.querySelector('.header__auth'))
    } else {
      document.querySelector('.header-mobile').before(document.querySelector('.header__auth'))
    }
  }

  mobileGrid()
  window.addEventListener('resize', mobileGrid)
}

export default hamburger;
