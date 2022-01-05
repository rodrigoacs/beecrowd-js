var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distanciaTotal = parseInt(lines.shift());
var combustivelGasto = parseFloat(lines.shift());

console.log(`${(distanciaTotal / combustivelGasto).toFixed(3)} km/l`);