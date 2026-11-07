<?php

$host = "localhost";
$banco = "moviehub";
$usuario = "root";
$senha = "";

$conexao = new mysqli(
    $host,
    $usuario,
    $senha,
    $banco
);

if ($conexao->connect_error) {
    die(json_encode([
        "erro" => "Falha na conexão com o banco"
    ]));
}

$conexao->set_charset("utf8mb4");

?>