var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notaA = parseFloat(lines.shift());
var notaB = parseFloat(lines.shift());
var notaC = parseFloat(lines.shift());

console.log(`MEDIA = ${((notaA * 2 + notaB * 3 + notaC * 5) / 10).toFixed(1)}`);