/* ==========================================================================
    THEME TOGGLE (DARK / LIGHT)
========================================================================== */
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark_mode");
  if (window.parent && window !== window.parent) {
    if (isDark) {
      window.parent.document.body.classList.add("dark_mode");
    } else {
      window.parent.document.body.classList.remove("dark_mode");
    }
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Restore theme from localstorage
// Runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const toggle = document.getElementById("themeToggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark_mode");
    toggle.checked = true;
  } else {
    document.body.classList.remove("dark_mode");
    toggle.checked = false;
  }

  /* ==========================================================================
    NAVIGATION
========================================================================== */
  // Active style on the right eelement on the navigation bar
  const parentUrl = window.parent.location.href;
  if (parentUrl.includes("dashboard.html")) {
    document.getElementById("nav-dashboard").classList.add("active");
  } else if (parentUrl.includes("ticket.html")) {
    document.getElementById("nav-ticket").classList.add("active");
  } else if (parentUrl.includes("presences.html")) {
    document.getElementById("nav-presence").classList.add("active");
  } else if (parentUrl.includes("calendrier.html")) {
    document.getElementById("nav-calendrier").classList.add("active");
  }
});

/* ==========================================================================
    TOASTS
========================================================================== */

// Variable globale pour stocker le conteneur des toasts (créé une seule fois)
let toastContainer = null;

function showToast(message, extraClasses = "") {
  const fadeDuration = 500; // Durée de l'animation
  const displayDuration = 3000; // Durée d'affichaege
  // Création du conteneur s'il n'existe pas encore dans le DOM
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.classList.add("toastContainer");
    document.body.appendChild(toastContainer);
  }

  // Création de l'élément visuel du toast
  const divToast = document.createElement("div");
  divToast.classList.add("toast");
  if (extraClasses) {
    divToast.classList.add(extraClasses); // Ajoute des classes optionnelles ("success", "error")
  }
  divToast.innerText = message;
  toastContainer.prepend(divToast); // Insère le nouveau toast tout en haut du conteneur

  // Gestion des animations avec des délais (setTimeout)
  setTimeout(() => divToast.classList.add("open"), 10); // Déclenche l'animation d'apparition
  setTimeout(() => divToast.classList.remove("open"), displayDuration); // Retire l'animation après le délai d'affichage
  setTimeout(() => {
    if (divToast.parentNode) {
      toastContainer.removeChild(divToast); // Supprime définitivement l'élément du DOM à la fin
    }
  }, displayDuration + fadeDuration);
}
