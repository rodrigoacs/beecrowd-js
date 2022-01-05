var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());

console.log(`A=${(Math.pow(raio, 2) * Math.PI.toFixed(5)).toFixed(4)}`);
