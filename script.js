// MENU DE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-times");

    } else {

        icon.classList.remove("fa-times");

        icon.classList.add("fa-bars");

    }

});


// FERMER LE MENU APRÈS UN CLIC

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");

        icon.classList.add("fa-bars");

    });

});


// ANNÉE AUTOMATIQUE DANS LE FOOTER

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


console.log("Portfolio d'Abdon Keny chargé avec succès !");