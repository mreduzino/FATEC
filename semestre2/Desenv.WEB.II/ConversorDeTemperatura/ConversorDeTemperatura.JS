const prompt = require('prompt-sync')();

function CelsiusFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(1);
}

let celsius = parseFloat(prompt("Insira a temperatura em graus Celsius: "));

console.log("A temperatura em Fahrenheit é: " + CelsiusFahrenheit(celsius) + "°F");