// ==============================
// Mobile Navigation
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==============================
// Sticky Navbar
// ==============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.padding = "15px 10%";
        navbar.style.background = "#020617";
        navbar.style.boxShadow = "0 0 20px rgba(0,0,0,.5)";
    } else {
        navbar.style.padding = "20px 10%";
        navbar.style.background = "#020617";
    }

});

// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// Fade Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: .2
});

document.querySelectorAll(".skill-card,.project,.timeline-item,.service-card,.certificate-card")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==============================
// Typing Effect
// ==============================

const typingText = document.querySelector(".hero-content h2");

if (typingText) {

    const words = [
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Designer"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {

        currentWord = words[wordIndex];

        if (!isDeleting) {

            typingText.textContent =
                currentWord.substring(0, letterIndex++);

            if (letterIndex > currentWord.length) {

                isDeleting = true;

                setTimeout(type, 1200);

                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(0, letterIndex--);

            if (letterIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, isDeleting ? 60 : 120);

    }

    type();

}

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "scrollTop";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Skill Card Hover
// ==============================

document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==============================
// Project Card Animation
// ==============================

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.boxShadow =
            "0 0 30px rgba(56,189,248,.6)";

    });

    project.addEventListener("mouseleave", () => {

        project.style.boxShadow =
            "0 0 0 rgba(0,0,0,0)";

    });

});

// ==============================
// Welcome Message
// ==============================

window.addEventListener("load", () => {

    console.log("Welcome to Barath's Portfolio 🚀");

});