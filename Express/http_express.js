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

// Criar nova rota com parâmetros - Os parâmetros são inseridos após os dois pontos do olá
app.get("/ola/:nome/:cargo", function(req, res){ // /Insira "localhost:8081/ola/marina/profe" em seu navegador
 // res.send(req.params); // apresenta todos os parâmetros na mensagem
    res.send("<h1> Olá " + req.params.nome + "</h1>"+"\n<h2> Seu cargo é: " + req.params.cargo + "</h2>");  // Adiciona HTML e apresenta os parâmetros nome e cargo
    // Só pode chamar a função send uma vez!
});

// Abre servidor porta 8081 + função de callback /Deve ser colocada por último
app.listen(8081, function(){
    console.log("Servidor executando na porta 8081!")
});

// Para reiniciar o servidor automaticamente, instalar o nodemon e ao executar utilizar nodemon ao invés de node
// npm install nodemon -g