<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "lista_tarefas";

$pdo = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);

if (!function_exists('limparPost')) {
    function limparPost($dado) {
        $dado = trim($dado);
        $dado = stripslashes($dado);
        $dado = htmlspecialchars($dado);
        return $dado;
    }
}
?>
