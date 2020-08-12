// Carregar o módulo express
const express = require("express");
// Cria uma variável (constante para sobrescrita de dados) que recebe uma cópia da função express
const app = express();

// Criar rota principal /Insira "localhost:8081" em seu navegador
app.get("/", function(req, res){ //req = requisição; res = resposta
    res.send("Servidor executando!") // envia mensagem ao usuário
});

// Criar nova rota
app.get("/about", function(req, res){
    res.send("Página ABOUT") // envia mensagem ao usuário
});

// Criar nova rota
app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu BLOG") // envia mensagem ao usuário
});

// Abre servidor porta 8081 + função de callback /Deve ser colocada por último
app.listen(8081, function(){
    console.log("Servidor executando na porta 8081!")
});