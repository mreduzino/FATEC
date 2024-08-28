# O algoritmo cria um vetor X a partir de A, contendo apenas elementos não repetidos. Ele percorre o vetor A e adiciona elementos únicos ao vetor X.

def formar_vetor_X(A):
    X = []
    C = 0
    X.append(A[0])
    
    for i in range(1, len(A)):
        Chave = 0
        for j in range(C + 1):
            if A[i] == X[j]:
                Chave = 1
                break
        if Chave == 0:
            C += 1
            X.append(A[i])
    
    return X

# Exemplo de uso:
# A = [1, 2, 2, 3, 4]
# X = formar_vetor_X(A)
# print(X)

# Saída: [1, 2, 3, 4]