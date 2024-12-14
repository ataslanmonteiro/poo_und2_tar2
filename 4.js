const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
for (let i = num1; i <= num2; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
