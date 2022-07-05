const body = document.querySelector("body");
const menuButton = document.querySelector("nav button");
const menu = document.querySelector(".menu");
const menuAnchors = menu.querySelectorAll("a");

const minWindowWidthForInlineMenu = 768;
const minScrollYForVisibleMenuButton = 160;

const isMenuOpen = () => menuButton.ariaExpanded === "true";

const openMenu = () => {
  body.style.overflow = "hidden";
  menuButton.classList.add("open");
  menuButton.ariaExpanded = "true";
  menu.classList.add("open");
};

const closeMenu = () => {
  body.style.overflow = "auto";
  menuButton.classList.remove("open");
  menuButton.ariaExpanded = "false";
  menu.classList.remove("open");
};

menuButton.onclick = function () {
  if (isMenuOpen()) {
    closeMenu();
  } else {
    openMenu();
  }
};

menuAnchors.forEach(function (anchor) {
  anchor.onclick = function () {
    closeMenu();
  };
});

const handleKeydownEventsWhenMenuIsOpen = function (event) {
  if (!isMenuOpen()) {
    return;
  }

  if (event.key === "Escape") {
    closeMenu();
    return;
  }

  // Trap focus within the menu
  if (event.key === "Tab") {
    const focusedElement = document.activeElement;
    const firstFocusableElement = menuButton;
    const lastFocusableElement = menuAnchors[menuAnchors.length - 1];

    if (event.shiftKey && focusedElement === firstFocusableElement) {
      lastFocusableElement.focus();
      event.preventDefault();
      return;
    }

    if (!event.shiftKey && focusedElement === lastFocusableElement) {
      firstFocusableElement.focus();
      event.preventDefault();
      return;
    }
  }
};
document.addEventListener("keydown", handleKeydownEventsWhenMenuIsOpen);

const toggleMenuButtonVisibilityOnScroll = function () {
  if (window.scrollY >= minScrollYForVisibleMenuButton) {
    menuButton.classList.add("show");
  } else {
    menuButton.classList.remove("show");
    closeMenu();
  }
};

document.addEventListener("scroll", toggleMenuButtonVisibilityOnScroll);

window.addEventListener("resize", function () {
  if (
    window.innerWidth >= minWindowWidthForInlineMenu &&
    window.scrollY < minScrollYForVisibleMenuButton
  ) {
    closeMenu();
  }
});
