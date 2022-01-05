var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var totalVendas = parseFloat(lines.shift());

console.log(`TOTAL = R$ ${((totalVendas * 0.15) + salarioFixo).toFixed(2)}`);