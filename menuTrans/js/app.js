const divEl = document.querySelectorAll(".container div");
// const divChild =
const span = document.getElementById("bg");
for (let i = 0, divChild = document.querySelectorAll(".navbar div"); i < divChild.length; i++) {
  document.querySelectorAll(".navbar div")[i].onmouseover = (i) => {
    span.style.left = i * 25 + "%";
  };
}
