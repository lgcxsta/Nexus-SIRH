<?php
// Inclut les utilitaires, le contrôleur et initialise la connexion avec la db
require_once __DIR__ . '/../helpers/response.php';
require_once __DIR__ . '/../controllers/loginController.php';
$pdo = require_once __DIR__ . '/../config/database.php';

// Récupère la méthode http utilisé (post, delete, put,...)
$method = $_SERVER['REQUEST_METHOD'];
// récupère l'url demandée et ignore tout se qui se trouve après un ? (paramètres d'URL)
$url = strtok($_SERVER["REQUEST_URI"], '?');

// Instancie le contrôleur de connexion en lui passant la connexion BDD
$loginController = new LoginController($pdo);

// vérifie si l'url contient api.php ou est /api/login
if (strpos($url, 'api.php') !== false || $url === '/api/login') {
    if ($method === 'POST') {
        $loginController ->verify(); // appelle la méthode de vérification du contrôleur
    } else {
    jsonResponse(["error" => "Méthode non autorisée"], 405);};
} else {
    jsonResponse(["error" => "Route non trouvée"], 404);
}