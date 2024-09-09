def carregar_conjunto():
    conjunto = set()
    while len(conjunto) < 5:
        elemento = int(input("Digite um elemento (não repetido): "))
        conjunto.add(elemento)
    return conjunto

def mostrar_conjunto(c):
    return sorted(list(c))

def potencia_conjunto(conjunto):
    from itertools import chain, combinations
    return list(chain.from_iterable(combinations(conjunto, r) for r in range(len(conjunto)+1)))

def main():
    print("Carregando conjunto A:")
    A = carregar_conjunto()
    print("Carregando conjunto B:")
    B = carregar_conjunto()

    print("Conjunto A:", mostrar_conjunto(A))
    print("Conjunto B:", mostrar_conjunto(B))

    uniao = A | B
    intersecao = A & B
    diferenca_A_B = A - B
    diferenca_B_A = B - A
    dif_simetrica = A ^ B
    potencia_A = potencia_conjunto(A)

    print("União (A ∪ B):", mostrar_conjunto(uniao) if uniao else "VAZIO")
    print("Interseção (A ∩ B):", mostrar_conjunto(intersecao) if intersecao else "VAZIO")
    print("Diferença (A - B):", mostrar_conjunto(diferenca_A_B) if diferenca_A_B else "VAZIO")
    print("Diferença (B - A):", mostrar_conjunto(diferenca_B_A) if diferenca_B_A else "VAZIO")
    print("Diferença Simétrica (A ∆ B):", mostrar_conjunto(dif_simetrica) if dif_simetrica else "VAZIO")
    print("Potência do conjunto A (P(A)):", potencia_A)

if __name__ == "__main__":
    main()