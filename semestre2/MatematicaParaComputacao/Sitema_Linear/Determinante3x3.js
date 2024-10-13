// Coeficientes do sistema de 3x3
var a1 = 2, b1 = 3, c1 = -1, d1 = 3;
var a2 = 1, b2 = -2, c2 = 3, d2 = 4;
var a3 = 5, b3 = 4, c3 = 1, d3 = 5;

// Passo 1: Calcular o determinante da matriz principal (D)
var D = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);

console.log("Determinante da matriz 3x3: " + D);

// Verificação se o determinante da matriz principal é diferente de zero
if (D === 0) {
    // Determinante da matriz principal é zero, verificar mais detalhes
    var Dx = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
    var Dy = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
    var Dz = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);

    if (Dx === 0 && Dy === 0 && Dz === 0) {
        console.log("\nSistema indeterminado: infinitas soluções.");
    } else {
        console.log("\nSistema inconsistente: sem solução.");
    }
} else {
    // Passo 2: Calcular os determinantes de x (Dx), y (Dy) e z (Dz)
    var Dx = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
    var Dy = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
    var Dz = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);

    // Passo 3: Calcular as soluções para x, y e z
    var x = `${Dx} / ${D} ou ${(Dx/D).toFixed(2)}`;
    var y = `${Dy} / ${D} ou ${(Dy/D).toFixed(2)}`;	
    var z = `${Dz} / ${D} ou ${(Dz/D).toFixed(2)}`;

    // Exibir os resultados
    console.log("\nSolução do sistema:");
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("z = " + z);
}