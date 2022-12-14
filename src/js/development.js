const development = () => {
  // Prevent All Links
  document.querySelectorAll('a[href="#"]').forEach((item) => [
    item.addEventListener("click", (e) => {
      e.preventDefault();
    }),
  ]);

  // Device Width
  const deviceWidth = document.createElement("div");
  deviceWidth.style.position = "fixed";
  deviceWidth.style.zIndex = "100000";
  deviceWidth.style.right = "20px";
  deviceWidth.style.bottom = "20px";
  deviceWidth.style.background = "white";
  deviceWidth.style.padding = "2px 8px";
  deviceWidth.style.border = "1px solid black";
  deviceWidth.style.borderRadius = "2px";
  deviceWidth.textContent = window.innerWidth
  document.querySelector("body").append(deviceWidth);

  window.addEventListener("resize", () => {
    deviceWidth.textContent = window.innerWidth;
  });

  // Add Grid
  const addGrid = () => {
    const gridItemNav = document.createElement("a");
    gridItemNav.setAttribute("href", "#grid");
    gridItemNav.classList.add("header-nav__link");
    gridItemNav.textContent = "Grid";
    document
      .querySelector(".header .header-nav__link:last-child")
      .after(gridItemNav);
  
    gridItemNav.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("body").classList.toggle("grid");
    });
  }
  // addGrid()

  // Fixed Grid
  // document.body.style.setProperty("--screen-width", document.body.scrollWidth + "px");
  // window.addEventListener('resize', () => {
  //   document.body.style.setProperty("--screen-width", document.body.scrollWidth + "px");
  // })
};

export default development;
