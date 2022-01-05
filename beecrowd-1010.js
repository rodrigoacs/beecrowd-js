var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Peca1 = lines.shift().split(" ");
var Peca2 = lines.shift().split(" ");

var codigoPeca1 = parseInt(Peca1.shift());
var qtdePeca1 = parseInt(Peca1.shift());
var precoPeca1 = parseFloat(Peca1.shift());

var codigoPeca2 = parseInt(Peca2.shift());
var qtdePeca2 = parseInt(Peca2.shift());
var precoPeca2 = parseFloat(Peca2.shift());

console.log(`VALOR A PAGAR: R$ ${(qtdePeca1 * precoPeca1 + qtdePeca2 * precoPeca2).toFixed(2)}`);