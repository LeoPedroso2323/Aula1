
const terminal = require('prompt-sync')();

let celsius = parseFloat(terminal('\nDigite a temperatura em celsius: '));

fahreinheit = ((celsius * 9/5) + 32);

console.log('\A temperatura em fahreinheits: ', fahreinheit, '\n');