const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número para ver a tabuada: "));

if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
} else {

  console.log("Tabuada do ${numero}:");
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}`);
  }
}