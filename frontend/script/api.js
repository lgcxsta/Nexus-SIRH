// Appels vers l'API PHP

async function apiCall(endpoint, method = "GET", data = null) {
  try {
    // Initialisation des options de base de la requête
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Si des données sont fournies et que la méthode permet d'avoir un corps de requête (POST ou PUT)
    if (data && (method === "POST" || method === "PUT")) {
      // On transforme l'objet JavaScript en chaîne de caractères JSON
      options.body = JSON.stringify(data);
    }
    // Exécution de la requête HTTP
    const response = await fetch(endpoint, options);
    // On attend que la réponse soit transformée de JSON vers un objet utilisable en JS
    const result = await response.json();

    // Gestion des erreurs HTTP
    // response.ok est "true" si le code de statut HTTP est entre 200 et 299.
    // Si c'est "false" (ex: 404 Non trouvé, 500 Erreur serveur), on lève une erreur.
    if (!response.ok) {
      throw new Error(result.error || "Une erreur est survenue");
    }

    return result;
  } catch (error) {
    console.error("Erreur de l'Api: ", error);
    // On relance l'erreur pour que le code qui a appelé apiCall() puisse la traiter (ex: afficher un message à l'utilisateur)
    throw error;
  }
}
