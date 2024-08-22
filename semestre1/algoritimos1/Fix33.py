Nome=input("Digite o nome: ")
RA=input("Digite o RA: ")
n1=int(input("Digitar a primera nota: "))
n2=int(input("Digitar a segunda nota: "))
media = (n1+n2)/2

print("\nDesenvolvido por:\nMarcelo Henrique Reduzino RA:1051392411005\nNathan Ferracini Batista RA:1051392411008\n")

if media >= 5:
    print("Parabéns, você aproveitou a sua chance! Está aprovado.")
else:
    print("Estude mais para a próxima. Você não alcançou o mínimo necessário.")