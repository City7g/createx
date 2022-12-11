const showPopup = (popupName) => {
  const widthScroll = window.innerWidth - document.body.scrollWidth;

  if (widthScroll > 0) {
    document.querySelector('body').classList.add("no-scroll");
  }

  document.querySelector(popupName).classList.add("show");
  setTimeout(() => {
    document.querySelector(popupName).style.opacity = 1;
  }, 10);
};

const closePopup = (popupName, isFirstPopup = true) => {
  popupName.style.opacity = 0;

  // document.body.style.overflow = isFirstPopup ? "" : "hidden";

  if (isFirstPopup) {
    document.querySelector('body').classList.remove("no-scroll");
  }

  setTimeout(() => {
    popupName.classList.remove("show");
  }, 300);
};

export { showPopup, closePopup };
