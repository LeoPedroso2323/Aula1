
const terminal = require('prompt-sync')();

let tamanho = parseFloat(terminal('\nDigite o tamanho da lista: ')); // terminal
let lista = [];

for (let i = 0; i < tamanho; i++){
    let numeros = parseFloat(terminal('\nDigite o tamanho da lista: ')); // terminal
    lista.push(numeros);
} 

console.log('\Lista: ', lista, '\n');