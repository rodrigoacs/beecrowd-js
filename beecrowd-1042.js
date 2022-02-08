var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let numeros = [] = lines[0].split(' ').map(parseFloat)
var numerosUnsorted = numeros.slice()

for (let i = 0; i < 3; i++) {
    numeros.sort((a, b) => a - b)
    console.log(numeros[i])
}
console.log();
for (let i = 0; i < 3; i++) {
    console.log(numerosUnsorted[i])
}