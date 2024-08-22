valor = int(input("Digite um valor de 1 à 9, exceto 5: "))

import math

if valor in [1, 2, 3]:
    print(f"{valor} elevado ao quadrado é {valor ** 2}.")
elif valor in [4, 9]:
    print(f"A raiz quadrada de {valor} é {math.sqrt(valor)}")
elif valor in [6, 7, 8]:
    print(f"{valor} dividido por 9 é {valor/9}.")
else:
    print("Valor fora do intervalo válido (1 à 9, exceto 5).")