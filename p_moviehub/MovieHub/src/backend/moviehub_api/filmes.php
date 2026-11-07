<?php

header("Content-Type: application/json; charset=UTF-8");

require_once "conexao.php";

$metodo = $_SERVER["REQUEST_METHOD"];

if ($metodo === "GET") {

    $sql = "SELECT
                id,
                nome,
                nota,
                descricao,
                DATE_FORMAT(data_lancamento, '%d/%m/%Y')
                AS dataLancamento
            FROM filmes
            ORDER BY id DESC";
            
    $resultado = $conexao->query($sql);

    $filmes = [];

    while ($linha = $resultado->fetch_assoc()) {
        $filmes[] = $linha;
    }

    echo json_encode($filmes);

} elseif ($metodo === "POST") {

    $dados = json_decode(file_get_contents("php://input"), true);

    $nome = $dados["nome"] ?? "";
    $nota = $dados["nota"] ?? 0;
    $descricao = $dados["descricao"] ?? "";
    $data = $dados["dataLancamento"] ?? "";

    $partes = explode("/", $data);

    if (count($partes) === 3) {
        $data = $partes[2] . "-" . $partes[1] . "-" . $partes[0];
    }

    $sql = "INSERT INTO filmes
            (nome, nota, descricao, data_lancamento)
            VALUES (?, ?, ?, ?)";

    $stmt = $conexao->prepare($sql);

    $stmt->bind_param(
        "sdss",
        $nome,
        $nota,
        $descricao,
        $data
    );

    if ($stmt->execute()) {
        echo json_encode([
            "sucesso" => true,
            "id" => $conexao->insert_id
        ]);
    } else {
        http_response_code(500);

        echo json_encode([
            "sucesso" => false,
            "erro" => "Não foi possível cadastrar o filme"
        ]);
    }

} else {

    http_response_code(405);

    echo json_encode([
        "erro" => "Método não permitido"
    ]);

}

$conexao->close();

?>