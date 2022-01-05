var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var salario = parseFloat(lines.shift());

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${(horasTrabalhadas * salario).toFixed(2)}`);