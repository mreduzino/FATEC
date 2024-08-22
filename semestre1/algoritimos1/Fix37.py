salario = float(input("Digite o salario: "))

print("\nDesenvolvido por:\nMarcelo Henrique Reduzino RA:1051392411005\nNathan Ferracini Batista RA:1051392411008\n")

if salario <= 1500.00:
    print(salario*1.2)
elif salario <2500.00:
    print(salario*1.1)
else:
    print(salario*1.05)