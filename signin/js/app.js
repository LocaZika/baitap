const $ = document.querySelector.bind(document);
const signInForm = $(".signin-form");
const signUpForm = $(".signup-form");
const signUpButton1 = $("#btn-signup-form1");
const signUpButton2 = $("#btn-signup-form2");
const signUpButton3 = $("#btn-signup-form3");

/* OPEN DOOR */
signUpButton1.addEventListener("click", () => {
  signInForm.style = "";
  signUpForm.style = "";
  setTimeout(() => {
    signInForm.style.transformOrigin = "left";
    signInForm.style.transform = "perspective(1200px) rotateY(20deg)";
    setTimeout(() => {
      signInForm.style = "";
    }, 1000);
    signUpForm.style.transformOrigin = "left";
    signUpForm.style.transform = "perspective(1200px) rotateY(45deg)";
    signUpForm.style.left = "0";
    setTimeout(() => {
      signUpForm.style.left = "0";
      signUpForm.style.transform = "perspective(1200px) rotateY(0deg)";
    }, 500);
  }, 1000);
});
/* MOVE TOP AND LEFT */
signUpButton2.addEventListener("click", () => {
  signInForm.style = "";
  signUpForm.style = "";
  setTimeout(() => {
    signInForm.style.transformOrigin = "left";
    signInForm.style.transform = "perspective(1200px) rotateY(20deg)";
    setTimeout(() => {
      signInForm.style = "";
    }, 1000);
    setTimeout(() => {
      signUpForm.style.left = "0";
      signUpForm.style.transform = "perspective(1200px) rotateY(0deg)";
      signUpForm.style.zIndex = "3";
      setTimeout(() => {
        signUpForm.style.left = "50%";
      }, 1000);
    }, 1000);
  }, 1000);
});
/* TURN THE PAGE  */
signUpButton3.addEventListener("click", () => {
  signInForm.style = "";
  signUpForm.style = "";
  setTimeout(() => {
    signUpForm.style.transformOrigin = "right";
    signUpForm.style.transform = "perspective(1200px) rotateY(180deg)";
    setTimeout(() => {
      setTimeout(() => {
        signUpForm.style.transformOrigin = "left";
        signUpForm.style.transform = "perspective(1200px) rotateY(360deg)";
      }, 100);
      signUpForm.style.zIndex = "3";
    }, 500);
  }, 1000);
});
