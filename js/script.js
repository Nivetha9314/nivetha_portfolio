document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // DARK / LIGHT MODE
    // ===============================

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {

        // Check saved theme
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️";
        } else {
            document.body.classList.remove("dark-mode");
            themeToggle.textContent = "🌙";
        }

        themeToggle.addEventListener("click", function () {
            const isDarkMode = document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
            themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
        });
    }


    // ===============================
    // MOBILE MENU
    // ===============================

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });


        // Close menu when clicking a link
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";

            });

        });
    }


    // ===============================
    // CONTACT FORM
    // ===============================

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            formMessage.textContent =
                "Thank you! Your message has been submitted.";

            contactForm.reset();

        });

    }

});