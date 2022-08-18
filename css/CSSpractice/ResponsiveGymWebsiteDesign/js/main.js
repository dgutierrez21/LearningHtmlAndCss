// =============== SHOW MENU ===============

const navToggle = document.querySelector("#nav-toggle"),
  navMenu = document.querySelector("#nav-menu"),
  navClose = document.querySelector("#nav-close");

//   MENU SHOW
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav-menu-active");
  });
}

//   MENU HIDDEN
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-active");
  });
}

// =============== REMOVE MENU MOBILE ===============

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("nav-menu-active");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
