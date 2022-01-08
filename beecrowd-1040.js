var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores = lines.shift().split(" ");
const A = parseFloat(valores.shift());
const B = parseFloat(valores.shift());
const C = parseFloat(valores.shift());
const D = parseFloat(valores.shift());

const media = ((A * 2) + (B * 3) + (C * 4) + (D)) / 10;
console.log(`Media: ${parseFloat(media).toFixed(1)}`);

if (media >= 7.0) {
    console.log('Aluno aprovado.');
} else if (media >= 5 && media <= 6.9) {
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${parseFloat(lines).toFixed(1)}`);
    const novaMedia = (parseFloat(lines) + media) / 2;
    if (novaMedia > 5.0) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.');
    }
    console.log(`Media final: ${(novaMedia).toFixed(1)}`);
} else {
    console.log('Aluno reprovado.');
}