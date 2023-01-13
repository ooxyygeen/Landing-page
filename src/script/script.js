const menu = document.querySelector(".mobile-menu");
const menuButtons = document.querySelectorAll(".mobile-menu-button img");
const body = document.querySelector("body");
const header = document.querySelector("header");

function toggleMenu() {
    let status = window.getComputedStyle(menu, null).getPropertyValue("display");
    if (status === "none") {
        menu.style.display = "flex";
        menuButtons[0].style.display = "none";
        menuButtons[1].style.display = "flex";
        body.style.overflow = "hidden";
    } else {
        menu.style.display = "none";
        menuButtons[1].style.display = "none";
        menuButtons[0].style.display = "flex";
        body.style.overflow = "visible";
    }
}


document.addEventListener("scroll", function () {
    if (window.scrollY > 700) {
        header.classList.add("header-blur");
    } else {
        header.classList.remove("header-blur");
    }
});