import htmlTag from "./htmlTag.mjs";
import handle from "./handle.mjs";
import navigator from "./navigator.mjs";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const menu = $(".menu");
const body = $("body");
body.appendChild(navigator);
/*===NAVBAR TOGGLE===*/
$(".toggle").addEventListener("click", () => {
  $(".toggle").classList.toggle("open");
});
/*===NAVBAR MOUSE MOVE===*/
const leftToRight = () => {
  if (menu.classList.contains("rightToLeft") == true) {
    menu.classList.remove("rightToLeft");
    menu.classList.add("leftToRight");
  } else {
    menu.classList.add("leftToRight");
  }
};
const rightToLeft = () => {
  if (menu.classList.contains("leftToRight")) {
    menu.classList.remove("leftToRight");
    menu.classList.add("rightToLeft");
  } else {
    menu.classList.add("rightToLeft");
  }
};
// menu.addEventListener("mousemove", handle.mouseXEvent(rightToLeft(), leftToRight()));
leftToRight();
