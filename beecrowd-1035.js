var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores = lines.shift().split(" ");
const A = parseInt(valores.shift());
const B = parseInt(valores.shift());
const C = parseInt(valores.shift());
const D = parseInt(valores.shift());

const teste1 = B > C;
const teste2 = D > A;
const teste3 = (C + D) > (A + B);
const teste4 = C > 0 && D > 0;
const teste5 = A % 2 == 0;
const testeFinal = teste1 && teste2 && teste3 && teste4 && teste5;

const resultado = testeFinal ? 'Valores aceitos' : 'Valores nao aceitos';

console.log(resultado);