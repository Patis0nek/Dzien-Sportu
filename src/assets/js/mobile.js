/*const doc = document;
const menuOpen = doc.querySelector(".hamburger");
const overlay = doc.querySelector(".overlay");
const menu = doc.querySelector(".cta");
const hm = doc.querySelector(".home");
const linia1 = doc.querySelector(".line-1");
const linia2 = doc.querySelector(".line-2");
const linia3 = doc.querySelector(".line-3");

menuOpen.addEventListener("click", () => {
    if ($(".overlay").hasClass("overlay--active")) {
        linia1.classList.remove("ac");
        linia2.classList.remove("ac");
        linia3.classList.remove("ac");
        overlay.classList.remove("overlay--active");
        $("header").css("background-color", "var(--gray2)");
        $("header").css("box-shadow", "none)");
        menu.classList.remove("move");
        if ($(this).scrollTop() > 40) {
            $("header").addClass("header-shrink");
        }
    }
    else {
        linia1.classList.add("ac");
        linia2.classList.add("ac");
        linia3.classList.add("ac");
        overlay.classList.add("overlay--active");
        $("header").css("background-color", "transparent");
        $("header").css("box-shadow", "none");
        menu.classList.add("move");
    }
});

hm.addEventListener("click", () => {
    if ($(".overlay").hasClass("overlay--active")) {
        linia1.classList.remove("ac");
        linia2.classList.remove("ac");
        linia3.classList.remove("ac");
        overlay.classList.remove("overlay--active");
        $("header").css("background-color", "var(--gray2)");
        menu.classList.remove("move");
        if ($(this).scrollTop() > 40) {
            $("header").addClass("header-shrink");
        }
    }
});*/