valor = int(input("Digitar um valor: "))

print("\nDesenvolvido por:\nMarcelo Henrique Reduzino RA:1051392411005\nNathan Ferracini Batista RA:1051392411008\n")

if valor % 10 == 0:
    print("\nÉ divisivel por 10")
if valor % 5 == 0:
    print("\nÉ divisivel por 5")
if valor % 2 == 0:
    print("\nÉ divisivel por 2")
else:
    print("\nNão é divisível por 10, 5 ou 2")