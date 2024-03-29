const closeBtn = document.querySelector('ion-icon[name = "close-outline"]');
const menuBtn = document.querySelector('ion-icon[name = "menu-outline"]');
const header = document.querySelector("header");
const year = document.querySelector(".year");
const allLinks = document.querySelectorAll("a");

function openMenu() {
  header.classList.add("nav-open");
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
}

function closeMenu() {
  header.classList.remove("nav-open");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block ";
}

allLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

menuBtn.addEventListener("click", () => {
  openMenu();
});

closeBtn.addEventListener("click", () => {
  closeMenu();
});

window.addEventListener("load", () => {
  year.textContent = new Date().getFullYear();
});
