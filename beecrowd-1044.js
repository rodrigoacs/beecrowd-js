var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines[0].split(' ').map(parseFloat)

numeros.sort((x, y) => x - y)
if (Number.isInteger(numeros[1] / numeros[0])) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}