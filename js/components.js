async function loadComponent(elementId, file) {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const base = window.location.pathname.includes("/alanjobeofficial/")
            ? "/alanjobeofficial/"
            : "/";

        const response = await fetch(base + file);

        if (!response.ok) {
            throw new Error(`Failed to load ${base + file}`);
        }

        element.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
}

function setActiveNavigation() {
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const links = document.querySelectorAll("#site-header .nav-link");

    links.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === currentPage
        );
    });
}

async function initializeComponents() {
    const base = window.location.pathname.includes("/alanjobeofficial/")
        ? "/alanjobeofficial/"
        : "/";

    await loadComponent("site-header", "components/header.html");
    await loadComponent("site-footer", "components/footer.html");

    setActiveNavigation();
}

document.addEventListener("DOMContentLoaded", initializeComponents);
