// Função que carrega o modúlo
var Sum = require("./somar")
var Sub = require("./subtrair")
var Mult = require("./multiplicar")
var Div = require("./dividir")

console.log("Adição: 10 + 2 = " + Sum.somar(10,2))
console.log("Subtração: 10 - 2 = " + Sub.subtrair(10,2))
console.log("Multiplicação: 10 * 2 = " + Mult.multiplicar(10,2))
console.log("Divisão: 10 / 2 = " + Div.dividir(10,2))