#Recebendo o valor da compra
valor_compra = float(input("Insira o valor da compra: "))

#Definindo faixas de desconto
def calcular_desconto():
    if  valor_compra > 300:
        return valor_compra*0.20
    elif valor_compra > 200:
        return valor_compra*0.15
    elif valor_compra > 100:
        return valor_compra*0.10
    else:
        return 0

print(f"Baseado no valor da compra, o desconto é de R$: {calcular_desconto():.2f}")    