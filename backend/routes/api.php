<?php
require_once __DIR__ . '/../helpers/response.php';
require_once __DIR__ . '/../controllers/loginController.php';
$pdo = require_once __DIR__ . '/../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];
$url = strtok($_SERVER["REQUEST_URI"], '?');

$loginController = new LoginController($pdo);

if (strpos($url, 'api.php') !== false || $url === '/api/login') {
    if ($method === 'POST') {
        $loginController ->verify();
    } else {
    jsonResponse(["error" => "Méthode non autorisée"], 404);};
} else {
    jsonResponse(["error" => "Route non trouvée"], 404);
}