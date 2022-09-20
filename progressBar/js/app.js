const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const pTag = document.getElementsByTagName("p");
const inputPercent = document.getElementById("percent");
const waveRootTop = $(".wave").style;

inputPercent.addEventListener("change", (e) => {
  for (const index in $$("p")) {
    if (Object.hasOwnProperty.call($$("p"), index)) {
      const aPTag = $$("p")[index];
      aPTag.innerText = e.target.value + "%";
    }
  }
  //circle1
  $(
    "#circle1"
  ).style.backgroundImage = `radial-gradient(var(--white) 0 60px, transparent 60px),conic-gradient(var(--violet) 0 ${e.target.value}%, var(--white) ${e.target.value}%)`;
  //circle2
  $(
    "#circle2"
  ).style.backgroundImage = `radial-gradient(var(--white) 0 60px, transparent 60px),repeating-conic-gradient(var(--white) 0 1%, transparent 1% 5%), repeating-conic-gradient(var(--white) 0 1%, transparent 1.2% 5%),repeating-conic-gradient(transparent 0 ${e.target.value}%, var(--gray) ${e.target.value}% 100%)`;
  //circle3
  $(
    "#circle3"
  ).style.backgroundImage = `radial-gradient(var(--white) 0 60px, transparent 60px), conic-gradient(var(--violet) 0 ${e.target.value}%, var(--white) ${e.target.value}%)`;
  $("span").style.transform = `rotate(${3.6 * e.target.value}deg)`;
  //circle4
  waveRootTop.setProperty("--topWave", `${100 - e.target.value}%`);
});
