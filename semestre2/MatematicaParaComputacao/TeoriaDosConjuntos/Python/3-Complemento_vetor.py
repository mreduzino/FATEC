# O algoritmo ordena o vetor A em ordem crescente usando o método de ordenação por troca (semelhante ao bubble sort).

def classificar_vetor(A):
    n = len(A)
    for i in range(n - 1):
        for j in range(i + 1, n):
            if A[i] > A[j]:
                A[i], A[j] = A[j], A[i]
    return A

# Exemplo de uso:
# A = [3, 1, 4, 2]
# A = classificar_vetor(A)
# print(A)

# Saída: [1, 2, 3, 4]