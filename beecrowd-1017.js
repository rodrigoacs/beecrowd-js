var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempoGasto = parseInt(lines.shift());
var velocidadeMedia = parseInt(lines.shift());

var distancia = tempoGasto * velocidadeMedia;

console.log((distancia / 12).toFixed(3));