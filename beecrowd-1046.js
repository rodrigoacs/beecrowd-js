var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let entradas = lines[0].split(' ').map(parseFloat)
let duracao = 0;

if (entradas[0] >= entradas[1]) {
    duracao = (24 - entradas[0]) + entradas[1]
} else {
    duracao = entradas[1] - entradas[0]
}
console.log(`O JOGO DUROU ${parseInt(duracao)} HORA(S)`);