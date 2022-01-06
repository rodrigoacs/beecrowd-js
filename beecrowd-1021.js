var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines.shift());

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log('NOTAS:');
notas.forEach(n => {
    console.log(`${parseInt(valor / n)} nota(s) de R$ ${n.toFixed(2)}`);
    valor %= n;
});

console.log('MOEDAS:');
moedas.forEach(n => {
    console.log(`${parseInt(valor / n)} moeda(s) de R$ ${n.toFixed(2)}`);
    valor = (valor % n) + 0.00001;
    /* esse 0.00001 faz o programa ser aceito pelo site, não sei porque
    achei essa solução no stackoverflow (https://pt.stackoverflow.com/questions/420472/uri-online-judge-1021-wrong-answer-100-javascript)*/
});