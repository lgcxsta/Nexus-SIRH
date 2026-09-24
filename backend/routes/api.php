<?php

require_once __DIR__ . '/../backend/controllers/loginController.php';

$method = $_SERVER['REQUEST_METHOD'];
$url = strtok($_SERVER["REQUEST_URI"], '?');

$loginController = new LoginController($pdo);

if ($url === '/api/login') {
    if ($method === 'POST') {
        $loginController ->verify();
    } else {
    jsonResponse(["error" => "Méthode non autorisée"], 404);};
} else {
    jsonResponse(["error" => "Route non trouvée"], 404);
}