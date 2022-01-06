var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());
var qtde100 = valor / 100;
var novaQtde = valor % 100;

var qtde50 = novaQtde / 50;
novaQtde = novaQtde % 50;

var qtde20 = novaQtde / 20;
novaQtde = novaQtde % 20;

var qtde10 = novaQtde / 10;
novaQtde = novaQtde % 10;

var qtde5 = novaQtde / 5;
novaQtde = novaQtde % 5;

var qtde2 = novaQtde / 2;
novaQtde = novaQtde % 2;

console.log(valor);
console.log(`${parseInt(qtde100)} nota(s) de R$ 100,00`);
console.log(`${parseInt(qtde50)} nota(s) de R$ 50,00`);
console.log(`${parseInt(qtde20)} nota(s) de R$ 20,00`);
console.log(`${parseInt(qtde10)} nota(s) de R$ 10,00`);
console.log(`${parseInt(qtde5)} nota(s) de R$ 5,00`);
console.log(`${parseInt(qtde2)} nota(s) de R$ 2,00`);
console.log(`${parseInt(novaQtde)} nota(s) de R$ 1,00`);