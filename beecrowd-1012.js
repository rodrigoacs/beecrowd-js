var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var info = lines.shift().split(" ");

var A = parseFloat(info.shift());
var B = parseFloat(info.shift());
var C = parseFloat(info.shift());

console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(Math.PI.toFixed(5) * Math.pow(C, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((A + B) * C) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(Math.pow(B, 2)).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);