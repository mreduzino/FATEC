def modulo(valor):
    return abs(valor)

def diferenca(valor1, valor2):
    return valor1 - valor2

def dividir_por_cinco(valor):
    return valor / 5

valor = float(input("Digite um valor: "))

if valor < 0:
    print(f"O módulo do valor é: {modulo(valor)}")

elif valor > 10:
    outro_valor = float(input("Digite outro valor: "))  # Solicita outro valor
    print(f"A diferença entre os valores é: {diferenca(valor, outro_valor)}")

else:
    print(f"O valor dividido por 5 é: {dividir_por_cinco(valor)}")