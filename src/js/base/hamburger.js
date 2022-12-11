// Header Hamburger
const hamburger = () => {
  document.querySelector(".header-hamb").addEventListener("click", () => {
    document.querySelector(".header-hamb").classList.toggle("active");
    document.querySelector(".header-nav").classList.toggle("show");
  });
  
  window.addEventListener("click", (e) => {
    if (!document.querySelector(".header").contains(e.target)) {
      document.querySelector(".header-hamb").classList.remove("active");
      document.querySelector(".header-nav").classList.remove("show");
    }
  });
}

export default hamburger;
