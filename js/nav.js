const header = document.querySelector("header");
const menuButton = document.querySelector("nav button");
const menu = document.querySelector(".menu");
const menuAnchors = menu.querySelectorAll("a");

menuButton.onclick = function () {
  menuButton.classList.toggle("open");
  menu.classList.toggle("open");
};

menuAnchors.forEach(function (anchor) {
  anchor.onclick = function () {
    menuButton.classList.remove("open");
    menu.classList.remove("open");
  };
});

const toggleMenuButtonVisibilityOnScroll = function () {
  if (window.scrollY >= 160) {
    header.classList.add("with-nav-button");
    menuButton.classList.add("show");
  } else {
    header.classList.remove("with-nav-button");
    menuButton.classList.remove("show");
    menuButton.classList.remove("open");
    menu.classList.remove("open");

  }
};

window.addEventListener("scroll", toggleMenuButtonVisibilityOnScroll);
