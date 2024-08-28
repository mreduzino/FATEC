# O algoritmo encontra elementos de A que não estão em B.

def complementar_A_em_B(A, B):
    CAB = []
    C = 0
    for i in range(len(A)):
        Chave = 1
        for j in range(len(B)):
            if A[i] == B[j]:
                Chave = 0
                break
        if Chave == 1:
            C += 1
            CAB.append(A[i])
    return CAB

# # Exemplo de uso:
# A = [1, 2, 3]
# B = [2, 4]
# CAB = complementar_A_em_B(A, B)
# print(CAB)

# Saída: [1, 3]