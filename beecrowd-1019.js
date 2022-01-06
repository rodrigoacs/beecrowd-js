var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var duracao = parseInt(lines.shift());

var horas = duracao / 3600;
var aux = duracao % 3600;
var minutos = aux / 60;
var segundos = aux % 60;

console.log(`${parseInt(horas)}:${parseInt(minutos)}:${parseInt(segundos)}`);