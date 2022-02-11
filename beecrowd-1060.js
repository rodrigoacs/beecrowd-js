var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let contador = 0

for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].replace('\r', '')
}

for (let i = 0; i < lines.length; i++) {
    if (lines[i] > 0) {
        contador++;
    }
}

console.log(`${contador} valores positivos`);
