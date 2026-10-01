<?php
require_once __DIR__ . '/../models/login.php'; // inclut le modèle login

class LoginController {
    // Propriété privée pour stocker l'instance du modèle Login
    private $loginModel;

    // Initialise le contrôleur en lui passant la connexion PDO
    public function __construct($pdo) {
      // Instancie le modèle Login et le stocke dans la propriété
      $this->loginModel = new Login($pdo);
    }

    // vérifie les identifiants d'un utilisateur
    function verify(){
      // Récupère les données brutes envoyées dans le corps de la requête et les décode en tableau PHP
      $data = json_decode(file_get_contents('php://input'), true);
      // Récupère l'email, ou une chaîne vide
      $email = $data['email'] ?? '';
      // Récupère le mot de passe ou une chaîne vide
      $password = $data['password'] ?? '';

      // Appelle le modèle pour chercher l'utilisateur dans la db avec cet email
      $user = $this->loginModel->getUserEmail($email);


  // Vérifie si l'utilisateur existe et si le mot de passe fourni correspond au hash stocké
  if ($user && password_verify($password, $user->password)) {
        // Authentification réussie
        jsonResponse([
          'message' => 'Authentication successful',
          'user' => [
            'id' => $user->user_id,
            'email' => $user->email
          ]
        ]);
      } else {
        // Authentification échouée
        jsonResponse(['error' => 'Invalid credentials'], 401);
      }
    }
}