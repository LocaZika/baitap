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
const scsControl = $$(".scs-control input[type='radio']");
const scsImgs = $$(".scs-imgs label");
for (const index in scsControl) {
  if (Object.hasOwnProperty.call(scsControl, index)) {
    const radio = scsControl[index];
    radio.addEventListener("change", () => {
      switch (radio.checked) {
        case $("#scs-ctrl1").checked:
          $("#scs-img1").style.left = "50%";
          $("#scs-img1").style.scale = "105%";
          $("#scs-img1").style.opacity = "1";
          $("#scs-img2").style.left = "30%";
          $("#scs-img2").style.scale = "100%";
          $("#scs-img2").style.opacity = ".75";
          $("#scs-img3").style.left = "10%";
          $("#scs-img3").style.scale = "100%";
          $("#scs-img3").style.opacity = ".5";
          $("#scs-img4").style.left = "70%";
          $("#scs-img4").style.scale = "100%";
          $("#scs-img4").style.opacity = ".75";
          $("#scs-img5").style.left = "90%";
          $("#scs-img5").style.scale = "100%";
          $("#scs-img5").style.opacity = ".5";
          break;
        case $("#scs-ctrl2").checked:
          $("#scs-img1").style.left = "10%";
          $("#scs-img1").style.scale = "100%";
          $("#scs-img1").style.opacity = ".5";
          $("#scs-img2").style.left = "50%";
          $("#scs-img2").style.scale = "105%";
          $("#scs-img2").style.opacity = "1";
          $("#scs-img3").style.left = "30%";
          $("#scs-img3").style.scale = "100%";
          $("#scs-img3").style.opacity = ".75";
          $("#scs-img4").style.left = "70%";
          $("#scs-img4").style.scale = "100%";
          $("#scs-img4").style.opacity = ".75";
          $("#scs-img5").style.left = "90%";
          $("#scs-img5").style.scale = "100%";
          $("#scs-img5").style.opacity = ".5";
          break;
        case $("#scs-ctrl3").checked:
          $("#scs-img1").style.left = "10%";
          $("#scs-img1").style.scale = "100%";
          $("#scs-img1").style.opacity = ".5";
          $("#scs-img2").style.left = "30%";
          $("#scs-img2").style.scale = "100%";
          $("#scs-img2").style.opacity = ".75";
          $("#scs-img3").style.left = "50%";
          $("#scs-img3").style.scale = "105%";
          $("#scs-img3").style.opacity = "1";
          $("#scs-img4").style.left = "70%";
          $("#scs-img4").style.scale = "100%";
          $("#scs-img4").style.opacity = ".75";
          $("#scs-img5").style.left = "90%";
          $("#scs-img5").style.scale = "100%";
          $("#scs-img5").style.opacity = ".5";
          break;
        case $("#scs-ctrl4").checked:
          $("#scs-img1").style.left = "10%";
          $("#scs-img1").style.scale = "100%";
          $("#scs-img1").style.opacity = ".5";
          $("#scs-img2").style.left = "30%";
          $("#scs-img2").style.scale = "100%";
          $("#scs-img2").style.opacity = ".75";
          $("#scs-img3").style.left = "70%";
          $("#scs-img3").style.scale = "100%";
          $("#scs-img3").style.opacity = ".75";
          $("#scs-img4").style.left = "50%";
          $("#scs-img4").style.scale = "105%";
          $("#scs-img4").style.opacity = "1";
          $("#scs-img5").style.left = "90%";
          $("#scs-img5").style.scale = "100%";
          $("#scs-img5").style.opacity = "5";
          break;
        case $("#scs-ctrl5").checked:
          $("#scs-img1").style.left = "10%";
          $("#scs-img1").style.scale = "100%";
          $("#scs-img1").style.opacity = ".5";
          $("#scs-img2").style.left = "30%";
          $("#scs-img2").style.scale = "100%";
          $("#scs-img2").style.opacity = ".75";
          $("#scs-img3").style.left = "90%";
          $("#scs-img3").style.scale = "100%";
          $("#scs-img3").style.opacity = ".5";
          $("#scs-img4").style.left = "70%";
          $("#scs-img4").style.scale = "100%";
          $("#scs-img4").style.opacity = ".75";
          $("#scs-img5").style.left = "50%";
          $("#scs-img5").style.scale = "105%";
          $("#scs-img5").style.opacity = "1";
          break;

        default:
          break;
      }
    });
  }
}
/*===TESTIMONIAL ANIMATE===*/
const contentTestimonial = async () => {
  const getFile = await fetch("./js/database.json");
  const getData = await getFile.json();
  // console.log(getData);
  const firstPerson = getData[Object.keys(getData)[1]];
  console.log(getData[Object.keys(getData)[1]]);
  for (let i = 0; i < Object.keys(getData).length; i++) {
    let person = getData[Object.keys(getData)[i]];

    $("#next").addEventListener("click", () => {
      if (i == Object.keys(getData).length - 1) {
        $(".comment p").innerText = firstPerson.narrative;
        $(".person-name h3").innerText = firstPerson.name;
        $(".person-name p").innerText = firstPerson.position;
      } else {
        $(".comment p").innerText = person.narrative;
        $(".person-name h3").innerText = person.name;
        $(".person-name p").innerText = person.position;
      }
    });
  }
};
contentTestimonial();
