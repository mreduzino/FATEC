function sacar(valor) {
    if (valor % 10 !== 0) {
        return "Valor inválido. Insira um valor múltiplo de 10.";
    }

    let notas100 = 0;
    let notas50 = 0;
    let notas10 = 0;

    notas100 = Math.floor(valor / 100);
    valor %= 100;
    notas50 = Math.floor(valor / 50);
    valor %= 50;
    notas10 = Math.floor(valor / 10);
    
    return `Notas de 100: ${notas100}, Notas de 50: ${notas50}, Notas de 10: ${notas10}`;
}

console.log(sacar(380))
console.log(sacar(70))
console.log(sacar(125))