valor = int(input("Digite um valor: "))

print("\nDesenvolvido por:\nMarcelo Henrique Reduzino RA:1051392411005\nNathan Ferracini Batista RA:1051392411008\n")

if valor in [1, 2, 3]:
    print(valor,"ao quadrado =",valor ** 2)
elif valor in [4, 9]:
    print("Raiz Quadrada de",valor,"=",valor ** 0.5)
elif valor in [6, 7, 8]:
    print(valor,"dividido por 9 =", valor / 9)
else:
    print("Valor não contemplado nas condições.")