<?php
require_once __DIR__ . '/../models/login.php';

class LoginController {
    private $loginModel;

    public function __construct($pdo) {
      $this->loginModel = new Login($pdo);
    }

    function verify(){
      $data = json_decode(file_get_contents('php://input'), true);
      $email = $data['email'] ?? '';
      $password = $data['password'] ?? '';

      $user = $this->loginModel->getUserEmail($email);

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