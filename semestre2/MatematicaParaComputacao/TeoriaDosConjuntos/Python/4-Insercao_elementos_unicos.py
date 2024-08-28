# O algoritmo une dois vetores A e B em um vetor U. Ele assume que A e B têm o mesmo tamanho n.

def unir_vetores(A, B):
    n = len(A)
    U = [0] * (2 * n)
    for i in range(n):
        U[i] = A[i]
        U[i + n] = B[i]
    return U

# Exemplo de uso:
# A = [1, 2, 3]
# B = [4, 5, 6]
# U = unir_vetores(A, B)
# print(U)

# Saída: [1, 2, 3, 4, 5, 6]