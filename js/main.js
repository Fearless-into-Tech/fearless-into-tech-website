const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.onclick = function () {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
};

const typed = new Typed("#typed", {
  strings: ["Motivating", "Empowering", "Driving Change"],
  backSpeed: 40,
  typeSpeed: 40,
  loop: true,
});
