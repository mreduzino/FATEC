package Pessoa;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Pessoa pessoa = new Pessoa();
        boolean exit = false;

        while (!exit) {
            System.out.println("Menu:");
            System.out.println("1. Cadastrar Pessoa");
            System.out.println("2. Encerrar Programa");
            System.out.print("Escolha uma opção: ");
            int opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.print("Digite a altura (em metros): ");
                    double altura = scanner.nextDouble();
                    pessoa.setAltura(altura);

                    System.out.print("Digite o peso (em kg): ");
                    double peso = scanner.nextDouble();
                    pessoa.setPeso(peso);

                    if (pessoa.getPeso() > 0 && pessoa.getPeso() <= 200) {
                        if (pessoa.calculeIMC()) {
                            System.out.println("PESO_NORMAL");
                        } else {
                            System.out.println("SOBREPESO");
                        }
                    }
                    break;

                case 2:
                    exit = true;
                    System.out.println("Programa encerrado.");
                    break;

                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
        scanner.close();
    }
}