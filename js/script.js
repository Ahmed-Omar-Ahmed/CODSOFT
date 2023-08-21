const menuBTN = document.getElementById("Menu");
const icon = document.querySelector("#Menu i");
const menu = document.querySelector(".mobile-sidebar");

menuBTN.addEventListener("click", () => {
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
  menu.classList.toggle("visible");
});

document.addEventListener("scroll", () => {
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-xmark");
  menu.classList.remove("visible");
});
