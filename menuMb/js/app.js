import htmlTag from "./htmlTag.mjs";
import handle from "./handle.mjs";
import navigator from "./navigator.mjs";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/*===IMPORT MODULE ===*/
const body = $("body");
body.appendChild(navigator);
const menu = $(".menu");
const menuItem = $(".menu li");
/*===NAVBAR TOGGLE===*/
$(".toggle").addEventListener("click", () => {
  $(".toggle").classList.toggle("open");
});
/*===NAVBAR MOUSE MOVE===*/
let bfValue = 0;
let afValue = 0;
const navbarBfRotate = () => {
  bfValue == 0 ? (bfValue = 1) : (bfValue = 0);
  menuItem.style.setProperty("--navbar-bf-rotate3D", bfValue);
};
const navbarAfRotate = () => {
  afValue == 0 ? (afValue = 1) : (afValue = 0);
  menuItem.style.setProperty("--navbar-af-rotate3D", afValue);
};
const leftToRight = () => {
  if (menu.classList.contains("rightToLeft") == true) {
    menu.classList.remove("rightToLeft");
    menu.classList.add("leftToRight");
    navbarBfRotate();
  } else {
    menu.classList.add("leftToRight");
    navbarBfRotate();
  }
};
const rightToLeft = () => {
  if (menu.classList.contains("leftToRight")) {
    menu.classList.remove("leftToRight");
    menu.classList.add("rightToLeft");
    navbarAfRotate();
  } else {
    menu.classList.add("rightToLeft");
    navbarAfRotate();
  }
};
let currentX = "",
  oldX = 0;
menu.addEventListener("mousemove", (e) => {
  oldX > e.pageX ? (currentX = "left") : (currentX = "right");
  currentX == "left" ? rightToLeft() : leftToRight();
  oldX = e.pageX;
});
