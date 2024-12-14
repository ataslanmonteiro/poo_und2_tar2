const prompt = require("prompt-sync")();
let num = parseInt(prompt("Digite um número: "));

let numPerfeito = 0;
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    numPerfeito += i;
  }
}

if (numPerfeito === num) {
  console.log(`O número ${num} é perfeito.`);
} else {
  console.log(`O número ${num} não é perfeito.`);
}
