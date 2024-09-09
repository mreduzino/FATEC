# Carregar conjunto A
conjunto_a = set()
print("Carregar conjunto A:")
while len(conjunto_a) < 5:
    elemento = int(input(f"Digite um elemento (faltam {5 - len(conjunto_a)}): "))
    conjunto_a.add(elemento)
conjunto_a = list(conjunto_a)

# Imprimir conjunto A
print(f"Conjunto A: {sorted(conjunto_a)}")

# Carregar conjunto B
conjunto_b = set()
print("Carregar conjunto B:")
while len(conjunto_b) < 5:
    elemento = int(input(f"Digite um elemento (faltam {5 - len(conjunto_b)}): "))
    conjunto_b.add(elemento)
conjunto_b = list(conjunto_b)

# Imprimir conjunto B
print(f"Conjunto B: {sorted(conjunto_b)}")

# União
uniao = conjunto_a[:]
for i in range(5):
    elemento = conjunto_b[i]
    found = False
    for j in range(len(uniao)):
        if uniao[j] == elemento:
            found = True
            break
    if not found:
        uniao.append(elemento)

# Imprimir União
print(f"União: {sorted(uniao)}")

# Interseção
intersecao = []
for i in range(5):
    elemento_a = conjunto_a[i]
    for j in range(5):
        if elemento_a == conjunto_b[j]:
            intersecao.append(elemento_a)
            break

# Imprimir Interseção
print(f"Interseção: {sorted(intersecao) if intersecao else 'VAZIO'}")

# Diferença A - B
a_menos_b = []
for i in range(5):
    elemento_a = conjunto_a[i]
    found = False
    for j in range(5):
        if elemento_a == conjunto_b[j]:
            found = True
            break
    if not found:
        a_menos_b.append(elemento_a)

# Imprimir Diferença A - B
print(f"A - B: {sorted(a_menos_b) if a_menos_b else 'VAZIO'}")

# Diferença B - A
b_menos_a = []
for i in range(5):
    elemento_b = conjunto_b[i]
    found = False
    for j in range(5):
        if elemento_b == conjunto_a[j]:
            found = True
            break
    if not found:
        b_menos_a.append(elemento_b)

# Imprimir Diferença B - A
print(f"B - A: {sorted(b_menos_a) if b_menos_a else 'VAZIO'}")

# Diferença Simétrica A ∆ B
diferenca_simetrica_ab = a_menos_b[:]
for i in range(len(b_menos_a)):
    elemento = b_menos_a[i]
    found = False
    for j in range(len(diferenca_simetrica_ab)):
        if diferenca_simetrica_ab[j] == elemento:
            found = True
            break
    if not found:
        diferenca_simetrica_ab.append(elemento)

# Imprimir Diferença Simétrica A ∆ B
print(f"A ∆ B: {sorted(diferenca_simetrica_ab) if diferenca_simetrica_ab else 'VAZIO'}")