import $ from 'jquery';




/*---------- Navbar Shrink ----------
// Keep track of the last scroll position
let lastScroll = 0;

// Select the header element
const header = document.querySelector("header");

// Listen for scroll events
window.addEventListener("scroll", function () {
    // Get the current scroll position
    let currentScroll = window.pageYOffset;

    // If the current scroll position is greater than the last scroll position, the user is scrolling down
    if (currentScroll > lastScroll) {
        // Hide the header
        header.style.transform = "translateY(-100%)";
    } else {
        // Show the header
        header.style.transform = "translateY(0)";
    }

    // If the user has scrolled past the top of the page
    if (currentScroll > 80) {
        // Add the "navbar-shrink" class to the header
        header.classList.add("header-shrink");
    } else {
        // Remove the "navbar-shrink" class from the header
        header.classList.remove("header-shrink");
    }

    // Update the last scroll position
    lastScroll = currentScroll;
});*/

/*---------- Navbar Shrink ----------*/
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 40 && $(window).width() > 1200) {
        if ($(".overlay").hasClass("overlay--active")) { }
        else {
            $("header").addClass("header-shrink");
        }
    }
    else {
        $("header").removeClass("header-shrink");
    }
});

/*---------- Mobile Menu ----------*/

const list = document.querySelectorAll(".list");
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));


/*---------- Theme Toggle ----------

function toggleTheme() {
    if (localStorage.getItem("shala-theme") !== null) {
        if (localStorage.getItem("shala-theme") == "light") {
            $("body").addClass("light");
        }
        else {
            $("body").removeClass("light");
        }
    }
    updateIcon();
}
toggleTheme();

$(".toggle-theme").on("click", function () {
    $("body").toggleClass("light");
    if ($("body").hasClass("light")) {
        localStorage.setItem("shala-theme", "light");
    }
    else {
        localStorage.setItem("shala-theme", "dark");
    }
    updateIcon();
});


function updateIcon() {
    if ($("body").hasClass("light")) {
        $(".toggle-theme i").addClass("fa-moon");
        $(".toggle-theme i").removeClass("fa-sun");
    }
    else {
        $(".toggle-theme i").addClass("fa-sun");
        $(".toggle-theme i").removeClass("fa-moon");
    }
}*/



getComputedStyle(document.documentElement).getPropertyValue("--sab");