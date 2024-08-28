# O algoritmo encontra a intersecção de dois vetores A e B. Se não houver intersecção, exibe "Intersecção vazia".

def intersecao_vetores(A, B):
    IT = []
    C = 0
    for i in range(len(A)):
        for j in range(len(B)):
            if A[i] == B[j]:
                C += 1
                IT.append(A[i])
                break
    if C == 0:
        print("Intersecção vazia")
    else:
        print("Intersecção:", IT)

# # Exemplo de uso:
# A = [1, 2, 3]
# B = [2, 3, 4]
# intersecao_vetores(A, B)

# Saída: Intersecção: [2, 3]