const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.onclick = function () {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
};
