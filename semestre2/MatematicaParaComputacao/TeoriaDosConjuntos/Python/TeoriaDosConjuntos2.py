def carregar_conjunto():
    conjunto = []
    while len(conjunto) < 5:
        elemento = int(input("Digite um elemento (não repetido): "))
        if elemento not in conjunto:
            conjunto.append(elemento)
    return conjunto

def uniao(A, B):
    resultado = A[:]
    for elemento in B:
        if elemento not in resultado:
            resultado.append(elemento)
    return resultado

def intersecao(A, B):
    resultado = []
    for elemento in A:
        if elemento in B:
            resultado.append(elemento)
    return resultado

def diferenca(A, B):
    resultado = []
    for elemento in A:
        if elemento not in B:
            resultado.append(elemento)
    return resultado

def diferenca_simetrica(A, B):
    return diferenca(A, B) + diferenca(B, A)

def potencia_conjunto(conjunto):
    resultado = [[]]
    for elemento in conjunto:
        resultado += [subconjunto + [elemento] for subconjunto in resultado]
    return resultado

def mostrar_conjunto(c):
    return sorted(c)

def main():
    print("Carregando conjunto A:")
    A = carregar_conjunto()
    print("Carregando conjunto B:")
    B = carregar_conjunto()

    print("Conjunto A:", mostrar_conjunto(A))
    print("Conjunto B:", mostrar_conjunto(B))

    uniao_resultado = uniao(A, B)
    intersecao_resultado = intersecao(A, B)
    diferenca_A_B = diferenca(A, B)
    diferenca_B_A = diferenca(B, A)
    dif_simetrica_resultado = diferenca_simetrica(A, B)
    potencia_A = potencia_conjunto(A)

    print("União (A ∪ B):", mostrar_conjunto(uniao_resultado) if uniao_resultado else "VAZIO")
    print("Interseção (A ∩ B):", mostrar_conjunto(intersecao_resultado) if intersecao_resultado else "VAZIO")
    print("Diferença (A - B):", mostrar_conjunto(diferenca_A_B) if diferenca_A_B else "VAZIO")
    print("Diferença (B - A):", mostrar_conjunto(diferenca_B_A) if diferenca_B_A else "VAZIO")
    print("Diferença Simétrica (A ∆ B):", mostrar_conjunto(dif_simetrica_resultado) if dif_simetrica_resultado else "VAZIO")
    print("Potência do conjunto A (P(A)):", potencia_A)

if __name__ == "__main__":
    main()