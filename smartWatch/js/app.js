const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/*===CHANGE #bg HEIGHT===*/
const resizeObs = new ResizeObserver(() => {
  $("#bg").style = `height: ${$("header").offsetHeight + "px"};
   top: 70%;`;
});
resizeObs.observe($("header"));
/*===FAQ SHOW/HIDE===*/
const questions = $$(".faq .questions-grp .question");
for (const index in questions) {
  if (Object.hasOwnProperty.call(questions, index)) {
    const question = questions[index];
    question.addEventListener("click", () => {
      question.classList.toggle("active");
    });
  }
}
/*===CTA ANIMATE===*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 5110) $(".cta").classList.add("scroll");
  if (window.scrollY > 5500 || window.scrollY < 4500) $(".cta").classList.remove("scroll");
});
/*===SCREENSHOTS CHANGE ORDER===*/
// const scsImgs = $$(".scs-img label");
// let isChecked = false;
const scsImgs = $(".scs-imgs");
const scsControls = $$(".scs-control input[type='radio']");
