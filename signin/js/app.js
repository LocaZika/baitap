const $ = document.querySelector.bind(document);
const signInForm = $(".signin-form");
const signUpForm = $(".signup-form");
const signUpButton = $(".signup > button");

signUpButton.addEventListener("click", () => {
  signInForm.style.transformOrigin = "left";
  signInForm.style.transform = "perspective(1200px) rotateY(20deg)";
  setTimeout(() => {
    signInForm.style = "";
  }, 1000);
});
