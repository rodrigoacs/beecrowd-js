var input = require('fs').readFileSync('beecrowd-js/stdin', 'utf8');
var lines = input.split('\n');

const valores = lines.shift().split(" ");
const A = parseFloat(valores.shift());
const B = parseFloat(valores.shift());
const C = parseFloat(valores.shift());

const delta = (Math.pow(B, 2)) - 4 * A * C;
const denominador = 2 * A;

if (delta < 0 || denominador === 0) {
    console.log('Impossivel calcular');
} else {
    const raiz1 = (-B + Math.sqrt(delta)) / denominador;
    const raiz2 = (-B - Math.sqrt(delta)) / denominador;
    console.log('R1 =', raiz1.toFixed(5));
    console.log('R2 =', raiz2.toFixed(5));
}