var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var idade = parseInt(lines.shift());

var ano = idade / 365;
var aux = idade % 365;
var mes = aux / 30;
dia = aux % 30;

console.log(`${parseInt(ano)} ano(s)`);
console.log(`${parseInt(mes)} mes(es)`);
console.log(`${parseInt(dia)} dia(s)`);