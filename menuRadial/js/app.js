const $ = document.querySelector.bind(document);
$(".toggle").addEventListener("click", () => {
  $(".menu").classList.toggle("active");
});
