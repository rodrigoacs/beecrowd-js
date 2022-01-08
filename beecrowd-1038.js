var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores = lines.shift().split(" ");
var codigo = parseInt(valores.shift());
var qtde = parseInt(valores.shift());

switch (codigo) {
    case 1:
        console.log(`Total: R$ ${(qtde * 4).toFixed(2)}`);
        break;
    case 2:
        console.log(`Total: R$ ${(qtde * 4.5).toFixed(2)}`);
        break;
    case 3:
        console.log(`Total: R$ ${(qtde * 5).toFixed(2)}`);
        break;
    case 4:
        console.log(`Total: R$ ${(qtde * 2).toFixed(2)}`);
        break;
    case 5:
        console.log(`Total: R$ ${(qtde * 1.5).toFixed(2)}`);
        break;
}