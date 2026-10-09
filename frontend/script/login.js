// Attend que la page HTML soit entièrement chargée avant d'exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  // Vérifie si le formulaire de connexion est bien présent sur la page
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Empêche le rechargement classique de la page lors de la soumission

      // Récupère les valeurs des champs email et mot de passe
      const email = document.getElementById("formEmail").value;
      const password = document.getElementById("formPwd").value;

      try {
        // Envoie les données au backend via une fonction asynchrone (apiCall)
        const response = await apiCall("../backend/routes/api.php", "POST", {
          email: email,
          password: password,
        });

        console.log("Succès: " + response.message);
        showToast("Succès: \n" + response.message, "success"); // Affiche un toast de succès

        // Redirige l'utilisateur vers le tableau de bord après la connexion
        window.location.href = "../frontend/pages/dashboard.html";
      } catch (error) {
        // En cas d'échec de la connexion, affiche un toast d'erreur et vide le champ mot de passe
        showToast("Erreur de connexion : \n " + error.message, "error");
        console.log("Erreur de connexion : \n " + error.message);
        document.getElementById("formPwd").value = "";
      }
    });
  }
});
