const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const resizeObs = new ResizeObserver(() => {
  $("#bg").style = `height: ${$("header").offsetHeight + "px"};
   top: 70%;`;
});
resizeObs.observe($("header"));
const questions = $$(".faq .questions-grp .question");
for (const index in questions) {
  if (Object.hasOwnProperty.call(questions, index)) {
    const question = questions[index];
    question.addEventListener("click", () => {
      question.classList.toggle("active");
    });
  }
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 5110) $(".cta").classList.add("scroll");
  if (window.scrollY > 5500 || window.scrollY < 4500) $(".cta").classList.remove("scroll");
});
