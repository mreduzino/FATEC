# O algoritmo insere elementos em um vetor A de 5 posições, garantindo que não haja repetição. Ele utiliza uma variável Chave para verificar se o valor já existe no vetor antes de inseri-lo.

def inserir_elementos():
    A = [None] * 5
    C = 0
    
    while C < 5:
        if C == 0:
            A[C] = int(input("Digite um valor: "))
            C += 1
        else:
            Chave = 0
            valor = int(input("Digite um valor: "))
            for i in range(C):
                if A[i] == valor:
                    Chave = 1
                    break
            if Chave == 0:
                A[C] = valor
                C += 1
            else:
                print("Valor já existe. Tente outro valor.")
    
    return A

A = inserir_elementos()
print(A)

# Exemplo de uso:
# A = inserir_elementos()  # Execute e insira valores manualmente.