import java.util.ArrayList;
import java.util.Scanner;

public class ListaNomes {
    public static void main(String[] args) {
        ArrayList<String> nomes = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        boolean exit = false;

        while (!exit) {
            System.out.println("Escolha uma opção:");
            System.out.println("1. Inserir nome");
            System.out.println("2. Apagar nome");
            System.out.println("3. Consultar tamanho da lista");
            System.out.println("4. Pesquisar nome");
            System.out.println("5. Imprimir lista");
            System.out.println("6. Limpar lista");
            System.out.println("7. Encerrar programa");
            System.out.print("Opção: ");
            int opcao = scanner.nextInt();
            scanner.nextLine(); // Limpar o buffer

            switch (opcao) {
                case 1:
                    System.out.print("Digite o nome a ser inserido: ");
                    String nome = scanner.nextLine();
                    nomes.add(nome);
                    break;
                case 2:
                    System.out.print("Digite o nome a ser apagado: ");
                    nome = scanner.nextLine();
                    nomes.remove(nome);
                    break;
                case 3:
                    System.out.println("Tamanho da lista: " + nomes.size());
                    break;
                case 4:
                    System.out.print("Digite o nome a ser pesquisado: ");
                    nome = scanner.nextLine();
                    if (nomes.contains(nome)) {
                        System.out.println("Nome encontrado.");
                    } else {
                        System.out.println("Nome não encontrado.");
                    }
                    break;
                case 5:
                    System.out.println("Lista de nomes: " + nomes);
                    break;
                case 6:
                    nomes.clear();
                    System.out.println("Lista limpa.");
                    break;
                case 7:
                    exit = true;
                    System.out.println("Programa encerrado.");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }
        }
        scanner.close();
    }
}