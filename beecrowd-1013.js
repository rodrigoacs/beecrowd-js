var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var info = lines.shift().split(" ");

var A = parseInt(info.shift());
var B = parseInt(info.shift());
var C = parseInt(info.shift());

function maiorEntre(A, B) {
    return ((A + B + Math.abs(A - B)) / 2)
}

var maiorAux = maiorEntre(A, B);
var maior = maiorEntre(maiorAux, C);

console.log(`${maior} eh o maior`);
