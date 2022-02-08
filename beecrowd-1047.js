var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let entradas = lines[0].split(' ').map(parseFloat)
let hrInical = entradas[0]
let minInicial = entradas[1]
let hrFinal = entradas[2]
let minFinal = entradas[3]

hrInical *= 60
hrFinal *= 60
minInicial += hrInical
minFinal += hrFinal

if (minFinal <= minInicial) {
    minFinal += 1440
}

console.log(`O JOGO DUROU ${parseInt((minFinal - minInicial) / 60)} HORA(S) E ${parseInt((minFinal - minInicial) % 60)} MINUTO(S)`);