def calcular_desconto(valor_compra):
    if valor_compra > 300:
        desconto = 0.2
    elif 200 <= valor_compra <= 299.99:
        desconto = 0.1
    else:
        desconto = 0.05
    return desconto*valor_compra

def calcular_valor_final(valor_compra, valor_desconto):
    return valor_compra-valor_desconto

valor_compra = float(input("Digite o valor da compra: "))

valor_desconto = calcular_desconto(valor_compra)
valor_final = calcular_valor_final(valor_compra, valor_desconto)

print(f"Valor do desconto: R$ {valor_desconto:.2f}")
print(f"Valor final a pagar: R$ {valor_final:.2f}")