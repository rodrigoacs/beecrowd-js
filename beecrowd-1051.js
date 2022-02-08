var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines[0])

if (salario < 2000.01) {
    console.log('Isento');
} else if (salario < 3000.01) {
    console.log(`R$ ${((salario - 2000) * 0.08).toFixed(2)}`);
} else if (salario < 4500.01) {
    console.log(`R$ ${(80 + (salario - 3000) * 0.18).toFixed(2)}`);
} else if (salario > 4500) {
    console.log(`R$ ${(350 + (salario - 4500) * 0.28).toFixed(2)}`);
}
//imposto é roubo