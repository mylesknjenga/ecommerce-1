//Responsive mobile hamburger menu

const hamburger = document.getElementById("hamburger-menu");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
});