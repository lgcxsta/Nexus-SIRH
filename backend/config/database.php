<?php
$config = require __DIR__ . '/config.php'; // inclut le fichier config.php, stocke l'objet retourné dans $config

// crée une instance pdo (php data object) pour se connecter a mysql
$pdo = new PDO("mysql:host=$config->host;port=$config->port;dbname=$config->dbname;charset=$config->charset", $config->username, $config->password, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION // si la requête écoue, crée une erreur
]);

return $pdo;