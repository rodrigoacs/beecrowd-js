var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let numeros = [] = lines[0].split(' ').map(parseFloat)
let a = numeros[0]
let b = numeros[1]
let c = numeros[2]

if (Math.abs(b - c) < a && a < b + c) {
    if (Math.abs(a - c) < b && b < a + c) {
        if (Math.abs(a - b) < c && c < a + b) {
            console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
        }
    }
} else {
    console.log(`Area = ${(((a + b) * c) / 2).toFixed(1)}`);
}
