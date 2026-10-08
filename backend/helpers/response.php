<?php
// fonction qui renvoie les réponses en format json
function jsonResponse($data, $status = 200) {
    http_response_code($status); // définit le code de statut http (404 = non trouvé)
    header("Content-Type: application/json"); // indique au navigateur que le contenu renvoyer est du json
    echo json_encode($data); // convertie le tableau php ($data) en chaîne de caractere json (et l'affiche)
    exit;
}
