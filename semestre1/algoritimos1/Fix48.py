def autenticar_usuario():
    # Credenciais do professor autorizado
    usuario_autorizado = "professor"
    senha_autorizada = "senha123"

    # Solicita o nome de usuário e a senha
    usuario = input("Digite o nome de usuário: ")
    senha = input("Digite a senha: ")

    # Verifica se as credenciais estão corretas
    if usuario == usuario_autorizado and senha == senha_autorizada:
        return True
    else:
        return False

def calcular_media(np1, np2):
    return (np1 * 4 + np2 * 6) / 10

def determinar_conceito(media):
    if 9.0 <= media <= 10.0:
        return 'A', 'APROVADO'
    elif 7.0 <= media < 9.0:
        return 'B', 'APROVADO'
    elif 3.0 <= media < 7.0:
        return 'C', 'EXAME'
    else:
        return 'D', 'DP'

def main():
    # Autenticação do usuário
    if not autenticar_usuario():
        print("Acesso negado! Usuário ou senha incorretos.")
        return

    # Solicita o nome do aluno e as notas das duas avaliações
    nome = input("Digite o nome do aluno: ")
    np1 = float(input("Digite a nota da primeira avaliação (NP1): "))
    np2 = float(input("Digite a nota da segunda avaliação (NP2): "))

    # Calcula a média geral
    media = calcular_media(np1, np2)

    # Determina o conceito do aluno
    conceito, situacao = determinar_conceito(media)

    # Exibe os resultados
    print("\nNome: Marcelo Henrique Reduzino, RA: [Seu RA], Turma: [Sua Turma]\n")
    print(f"Nome do aluno: {nome}")
    print(f"Nota da primeira avaliação (NP1): {np1}")
    print(f"Nota da segunda avaliação (NP2): {np2}")
    print(f"Média Geral (MG): {media:.2f}")
    print(f"Conceito: {conceito}")
    print(f"Situação: {situacao}")

if __name__ == "__main__":
    main()