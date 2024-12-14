const promt = require("prompt-sync")();
let num1 = parseInt(promt("Digite o primeiro número: "));
let num2 = parseInt(promt("Digite o segundo número: "));
for (let i = num1; i <= num2; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
