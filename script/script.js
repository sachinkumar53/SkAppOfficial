document.getElementById('nav-title').innerText = document.title

const nav = document.querySelector("#navigation");
const title = document.querySelector("#nav-title");
const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  nav.classList.toggle("active");
  title.classList.toggle("active");
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function openApp(pkgName) {
  const url = 'https://play.google.com/store/apps/details?id='+pkgName;
  window.open(url, '_blank').focus();
 }
 
