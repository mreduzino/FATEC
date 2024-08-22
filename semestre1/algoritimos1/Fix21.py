# Solicitando ao usuário que forneça três valores numéricos
valor1 = int(input("Digite o primeiro valor: "))
valor2 = int(input("Digite o segundo valor: "))
valor3 = int(input("Digite o terceiro valor: "))

# Multiplicando os três valores
multiplicacao = valor1 * valor2 * valor3

# Calculando a média aritmética da multiplicação dos três valores
# Neste caso específico, a "média" é o próprio resultado da multiplicação, considerando que é um único valor
media_aritmetica = multiplicacao  # A média de um único valor é ele mesmo

# Exibindo o resultado
print(f"A média aritmética da multiplicação de {valor1}, {valor2} e {valor3} é: {media_aritmetica}")