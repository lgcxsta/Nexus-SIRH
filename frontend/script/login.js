document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // empêche le rechargement de la page par défaut

      // récupère les valeurs des inputs
      const email = document.getElementById("formEmail").value;
      const password = document.getElementById("formPwd").value;

      try {
        const response = await apiCall("../backend/routes/api.php", "POST", {
          email: email,
          password: password,
        });
        console.log("Succès: ", response.message);
        window.location.href = "../frontend/pages/mainboard.html";
      } catch (error) {
        alert("Erreur de connecion: " + error.message);
        document.getElementById("formPwd").value = "";
      }
    });
  }
});
