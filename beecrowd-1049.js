var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].replace('\r', '')
}

if (lines[0] == 'vertebrado') {
    if (lines[1] == 'ave') {
        if (lines[2] == 'carnivoro') {
            console.log('aguia');
        } else {
            console.log('pomba');
        }
    } else {
        if (lines[2] == 'onivoro') {
            console.log('homem');
        } else {
            console.log('vaca');
        }
    }
} else {
    if (lines[1] == 'inseto') {
        if (lines[2] == 'hematofago') {
            console.log('pulga');
        } else {
            console.log('lagarta');
        }
    } else {
        if (lines[2] == 'hematofago') {
            console.log('sanguessuga');
        } else {
            console.log('minhoca');
        }
    }
}
