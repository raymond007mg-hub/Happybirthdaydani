const startButton = document.getElementById("startButton");
const firstMemory = document.getElementById("firstMemory");

const backgroundMusic =
    document.getElementById("backgroundMusic");


// =================================
// BOTÓN COMENZAR
// =================================

startButton.addEventListener("click", function () {

    // Iniciar música
    backgroundMusic.play();

    // Ir al primer recuerdo
    firstMemory.scrollIntoView({
        behavior: "smooth"
    });

});


// =================================
// ANIMACIONES AL HACER SCROLL
// =================================

const animatedSections = document.querySelectorAll(
    ".memory, .gallery-section, .counter-section, .final-message, .photo-final-section, .playlist-section"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);


animatedSections.forEach((section) => {

    observer.observe(section);

});

// =================================
// CONTADOR DE DÍAS
// =================================

const startDate = new Date("2026-06-10");
const today = new Date();

const difference = today - startDate;

const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

document.getElementById("daysCounter").textContent = days;

// =================================
// SPOTIFY
// =================================

const spotifyButton =
    document.getElementById("spotifyButton");

const spotifyURL =
    "https://open.spotify.com/playlist/24F4KpgiIAULHEVtYZBDrA?si=t0RVNzROQFW93LgdowTPOA&utm_source=copy-link&pt=370601be86ffd27af392b90e7a0d3309&pi=5LMYQIIvR1CgI";

spotifyButton.addEventListener("click", function () {

    window.open(
        spotifyURL,
        "_blank"
    );

});

// =================================
// BARRA DE PROGRESO
// =================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${scrollPercentage}%`;

});
