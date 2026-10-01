<?php

class Login {
    private $pdo; // stock la connexion à la base de donnée

    public function __construct($pdo) { // s'execute quand ont crée une instance de la classe (ex: new Login($pdo))
        $this->pdo = $pdo; // assigne le pdo a la propriété privée
    }

    // recupére les utilisateurs en fonction de leurs emails
    public function getUserEmail($email){ 
        $query = $this->pdo->prepare("SELECT * FROM users WHERE email = :email"); // prépare une requête sql
        $query-> execute(  // execute la requête sql
            ['email' => $email] // remplace :email par la valeur passée en paramètres
        );
        return $query->fetch(PDO::FETCH_OBJ);
         // récupère le premier résultat sous forme d'objet (FETCH_OBJ) et le retourne
    }
}