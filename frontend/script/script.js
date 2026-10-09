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
