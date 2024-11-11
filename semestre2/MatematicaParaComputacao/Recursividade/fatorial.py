#Representa conceito de recursividade em programação.

numero = int(input("Digite um número: "))

def fatorial(n):
    if n == 0:
        return 1
    else:
        return n * fatorial(n-1)
    
print(fatorial(numero))