import math

def calcular_tinta(area):
    cobertura_por_litro = 6
    return area / cobertura_por_litro

def calcular_latas(tinta_necessaria):
    litros_por_lata = 18
    preco_por_lata = 80
    latas_necessarias = math.ceil(tinta_necessaria / litros_por_lata)
    custo = latas_necessarias * preco_por_lata
    return latas_necessarias, custo

def calcular_galoes(tinta_necessaria):
    litros_por_galao = 3.6
    preco_por_galao = 35
    galoes_necessarios = math.ceil(tinta_necessaria / litros_por_galao)
    custo = galoes_necessarios * preco_por_galao
    return galoes_necessarios, custo

def calcular_misto(tinta_necessaria):
    litros_por_lata = 18
    litros_por_galao = 3.6
    preco_por_lata = 80
    preco_por_galao = 35
    latas_necessarias = tinta_necessaria // litros_por_lata
    resto = tinta_necessaria % litros_por_lata
    galoes_necessarios = math.ceil(resto / litros_por_galao)
    custo = (latas_necessarias * preco_por_lata) + (galoes_necessarios * preco_por_galao)
    return latas_necessarias, galoes_necessarios, custo

# Entrada do usuário
area = float(input("Informe o tamanho da área a ser pintada em metros quadrados: "))
tinta_necessaria = calcular_tinta(area) * 1.1  # Adicionando 10% de folga

# Calculando para cada situação
latas, custo_latas = calcular_latas(tinta_necessaria)
galoes, custo_galoes = calcular_galoes(tinta_necessaria)
latas_mistas, galoes_mistas, custo_misto = calcular_misto(tinta_necessaria)

# Exibindo os resultados
print(f"Opção apenas com latas de 18L: {latas} latas - R$ {custo_latas:.2f}")
print(f"Opção apenas com galões de 3,6L: {galoes} galões - R$ {custo_galoes:.2f}")
print(f"Opção mista: {latas_mistas} latas e {galoes_mistas} galões - R$ {custo_misto:.2f}")