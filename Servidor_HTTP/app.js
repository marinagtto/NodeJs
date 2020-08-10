// Cria variável HTTP
var http = require('http')

// Abre servidor e informa a porta pra abrir
http.createServer(function(req,res){ // req = requisição; res = resposta
    res.end("Servidor executando!") // envia mensagem ao usuário
}).listen(8081)
console.log("O servidor está executando!") // Insira "localhost:8081" em seu navegador