
// menu icon toggle
const menuToggle = document.querySelector(".menu-icon");
// menu
const menuSidebar = document.querySelector(".menu-container");


// menu event listener
menuToggle.addEventListener("click", function () {
    menuSidebar.classList.toggle("show-menu-container");
});