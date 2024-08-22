valor = float(input("Digite o valor: "))
if valor >= 300:
    desconto = 0.2
elif valor >= 200:
    desconto = 0.1
else:
    desconto = 0.05

valorfinal = valor-valor*desconto

print("\nDesenvolvido por:\nMarcelo Henrique Reduzino RA:1051392411005\nNathan Ferracini Batista RA:1051392411008\n")

print("Valor Total: R$",valor)
print("Valor à Pagar: R$",valorfinal)