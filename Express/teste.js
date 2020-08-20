// Conectar Sequelize com o Mysql
const Sequelize = require("sequelize");
const sequelize = new Sequelize('teste','root','123456',{
    host:'localhost',
    dialect:'mysql'
}) // faz a conexão com um database criado no banco Mysql
// parâmetros: teste = database; root = nome de usuário do meu banco; senha de conexão ao Mysql; objeto tipo json para saber onde estou executando; tipo de banco de dados que você quer se conectar;

// Testar se a conexão deu certo -- Apresentar mensagem na tela usando then (se deu certo) e catch (se deu errado)
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})