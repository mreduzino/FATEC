function fibonacci(n) {
if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(fibonacci(3)); // Saída: 2
console.log(fibonacci(7)); // Saída: 13
console.log(fibonacci(9)); // Saída: 34