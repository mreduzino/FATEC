valor = float(input("Digite um valor: "))

print("\nDesenvolvido por:\nMarcelo Henrique Reduzino RA:1051392411005\nNathan Ferracini Batista RA:1051392411008\n")

if valor <0: 
    print(valor *-1)
elif valor >10:
    valor2=float(input("Digitar outro valor: "))
    print("A diferença entre ",valor," e ",valor2," é :",valor - valor2)
else: 
    print(valor /5)