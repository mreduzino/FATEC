// Alunos: Marcelo Henrique Reduzino e Gustavo Silva de Carvalho

function decimalToBinary(decNumber) {
    let stack = [];
    let binaryString = '';
    
    while (decNumber > 0) {
      stack.push(decNumber % 2);
      decNumber = Math.floor(decNumber / 2);
    }
    
    while (stack.length > 0) {
      binaryString += stack.pop();
    }
    
    return binaryString || '0';
  }
  
  // Exemplos de uso
  console.log(decimalToBinary(233)); // Deve imprimir: 11101001
  console.log(decimalToBinary(10));  // Deve imprimir: 1010
  console.log(decimalToBinary(1000)); // Deve imprimir: 1111101000