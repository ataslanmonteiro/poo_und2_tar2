const prompt = require("prompt-sync")();
let num = parseInt(prompt("Digite um número: "));

let primo = true;
if (num <= 1) {
  primo = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log(`O número ${num} é primo.`);
} else {
  console.log(`O número ${num} não é primo.`);
}
