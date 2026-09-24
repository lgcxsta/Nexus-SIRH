// Appels vers l'API PHP

async function apiCall(endpoint, method = "GET", data = null) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (data && (method === "POST" || method === "PUT")) {
      options.body = JSON.stringify(data);
    }
    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Une erreur est survenue");
    }

    return result;
  } catch (error) {
    console.error("Erreur de l'Api: ", error);
    throw error;
  }
}
