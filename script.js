/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


menuToggle.addEventListener(
    "click",
    function () {

        mobileMenu.classList.toggle("active");


        const icon =
            menuToggle.querySelector("i");


        if (
            mobileMenu.classList.contains("active")
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            mobileMenu.classList.remove(
                "active"
            );


            const icon =
                menuToggle.querySelector("i");


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }
    );

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    function() {

        let current = "";


        sections.forEach(
            function(section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function(link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================
   IMAGE LOAD EFFECT
========================================= */

const images =
    document.querySelectorAll("img");


images.forEach(function(image) {

    image.addEventListener(
        "load",
        function() {

            image.classList.add(
                "loaded"
            );

        }
    );

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElements =
    document.querySelectorAll(
        ".current-year"
    );


yearElements.forEach(
    function(element) {

        element.textContent =
            new Date().getFullYear();

    }
);
