const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const resizeObs = new ResizeObserver(() => {
  $("#bg").style.height = $("header").offsetHeight + $(".hiw").offsetHeight / 3 + "px";
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
});
