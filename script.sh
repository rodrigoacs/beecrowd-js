#!/bin/bash
#script para gerar os arquivos já com a parte que o beecrowd exige
for i in $(seq 1005 1021); do echo "var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');" >> beecrowd-${i}.js; done
