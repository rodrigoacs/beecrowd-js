var input = require('fs').readFileSync('beecrowd-js/stdin', 'utf8');
var lines = input.split('\n');

var info1 = lines.shift().split(" ");
var info2 = lines.shift().split(" ");

var x1 = parseFloat(info1.shift());
var y1 = parseFloat(info1.shift());
var x2 = parseFloat(info2.shift());
var y2 = parseFloat(info2.shift());

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));