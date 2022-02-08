var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let entradas = [x, y] = lines[0].split(' ')

if (entradas[0] == 0 && entradas[1] != 0) {
    console.log('Eixo Y');
    return
}
if (entradas[1] == 0 && entradas[0] != 0) {
    console.log('Eixo X');
    return
}
if (entradas[0] == 0 && entradas[1] == 0) {
    console.log('Origem');
    return
}
if (entradas[0] > 0) {
    if (entradas[1] > 0) {
        console.log('Q1');
    } else {
        console.log('Q4');
    }
} else {
    if (entradas[1] > 0) {
        console.log('Q2');
    } else {
        console.log('Q3');
    }
}