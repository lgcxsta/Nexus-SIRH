/* ==========================================================================
    THEME TOGGLE (DARK / LIGHT)
========================================================================== */
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark_mode");
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
});
