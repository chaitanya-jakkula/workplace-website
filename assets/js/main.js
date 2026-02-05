/* =========================================================
   ICONS
=========================================================*/
lucide.createIcons();

/* =========================================================
   SMOOTH SCROLL (NO HASHES)
=========================================================*/
document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.scroll);
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

/* Prevent accidental hash changes */
window.addEventListener("hashchange", () => {
    history.replaceState(null, null, " ");
});

/* =========================================================
   HAMBURGER MENU
=========================================================*/
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("show");
});

/* Close menu on link click */
document.querySelectorAll(".navbar__link").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        navLinks.classList.remove("show");
    });
});

/* =========================================================
   BACK TO TOP BUTTON
=========================================================*/
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================================
   FADE-IN ON SCROLL
=========================================================*/
const fadeElements = document.querySelectorAll(".section--fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.15 });

fadeElements.forEach(el => observer.observe(el));

/* =========================================================
   CONTACT FORM SUCCESS + RESET
=========================================================*/
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const resetBtn = document.getElementById("resetForm");

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    setTimeout(() => {
        contactForm.style.display = "none";
        formSuccess.style.display = "block";
    }, 300);
});

resetBtn.addEventListener("click", () => {
    formSuccess.style.display = "none";
    contactForm.style.display = "flex";
    contactForm.reset();

    contactForm.style.animation = "fadeScale 0.5s ease";
    setTimeout(() => contactForm.style.animation = "", 600);
});

/* =========================================================
   ALWAYS LOAD AT TOP ON REFRESH
=========================================================*/
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
    setTimeout(() => window.scrollTo(0, 0), 10);
});