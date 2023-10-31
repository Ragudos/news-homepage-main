const closeNavBtn = document.getElementById("closenav");
const openNavBtn = document.getElementById("opennav");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("mobilenav-overlay");

closeNavBtn?.addEventListener("click", closeNav);

openNavBtn?.addEventListener("click", () => {
    navbar.style.setProperty("--_x", "0%");
    overlay.setAttribute("data-open", "true");
    openNavBtn.setAttribute("aria-expanded", "true");
});

overlay?.addEventListener("click", closeNav);

function closeNav() {
    navbar.style.setProperty("--_x", "100%");
    openNavBtn.setAttribute("aria-expanded", "false");
    overlay.removeAttribute("data-open");
}

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) {
        closeNav();
    } 
});
