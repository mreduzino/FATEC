nome = input("Digite o nome: ")
ra = input("Digite o RA: ")
nota1 = float(input("Digite a nota 1: "))
nota2 = float(input("Digite a nota 2: "))

def calcular_media(nota1, nota2):
    return (nota1+nota2)/2

media = calcular_media(nota1, nota2)

if media>=7:
    print(f"Parabéns, você está aprovado!\nMédia: {media:.1f}.")
else:
    print(f"Você ainda tem uma chance! Estude mais para o exame.\nMédia: {media:.1f}")