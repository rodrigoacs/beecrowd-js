var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines[0].split(' ').map(parseFloat)
numeros.sort((a, b) => a - b)
let A = numeros[2]
let B = numeros[1]
let C = numeros[0]

if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO');
    return
}
if (Math.pow(A, 2) == (Math.pow(B, 2) + Math.pow(C, 2))) {
    console.log('TRIANGULO RETANGULO');
}
if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
    console.log('TRIANGULO OBTUSANGULO');
}
if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) {
    console.log('TRIANGULO ACUTANGULO');
}
if (A == B && B == C) {
    console.log('TRIANGULO EQUILATERO');
    return
}
if (A == B || A == C || B == C) {
    console.log('TRIANGULO ISOSCELES');
}