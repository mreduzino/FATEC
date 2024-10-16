# **Nome completo do aluno:** Marcelo Henrique Reduzino

## Questões Práticas

### Questão 1: Classe Pessoa com IMC

```Java
public class Pessoa {
    private double altura;
    private double peso;

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public void setPeso(double peso) {
        if (peso > 0 && peso <= 200) {
            this.peso = peso;
        } else {
            System.out.println("Peso inválido, digite novamente.");
        }
    }

    public double getAltura() {
        return altura;
    }

    public double getPeso() {
        return peso;
    }

    public boolean calculeIMC() {
        double imc = peso / (altura * altura);
        return imc >= 18.5 && imc <= 24.9;
    }
}

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
```

### Questão 2: Lista de Nomes

```Java
javaCopiarimport java.util.ArrayList;
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
```

### Questão 3: Classe Calculadora

```Java
javaCopiarpublic class Calculadora {
    public double somar(double a, double b) {
        return a + b;
    }

    public double subtrair(double a, double b) {
        return a - b;
    }

    public double multiplicar(double a, double b) {
        return a * b;
    }

    public double dividir(double a, double b) {
        if (b != 0) {
            return a / b;
        } else {
            System.out.println("Divisão por zero não é permitida.");
            return 0;
        }
    }

    public static void main(String[] args) {
        Calculadora calc = new Calculadora();
        System.out.println("Soma: " + calc.somar(5, 3));
        System.out.println("Subtração: " + calc.subtrair(5, 3));
        System.out.println("Multiplicação: " + calc.multiplicar(5, 3));
        System.out.println("Divisão: " + calc.dividir(5, 3));
    }
}
```

### Questão 4: Classe ContaBancaria

```Java
javaCopiarpublic class ContaBancaria {
    private String numeroDaConta;
    private double saldo;

    public ContaBancaria(String numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = 0;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito realizado. Saldo atual: " + saldo);
        } else {
            System.out.println("Valor de depósito inválido.");
        }
    }

    public void sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            saldo -= valor;
            System.out.println("Saque realizado. Saldo atual: " + saldo);
        } else {
            System.out.println("Saque não permitido. Saldo insuficiente ou valor inválido.");
        }
    }

    public void verSaldo() {
        System.out.println("Saldo atual: " + saldo);
    }

    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria("123456");
        conta.depositar(1000);
        conta.sacar(500);
        conta.verSaldo();
    }
}
```

## Respostas Dissertativas

### Questão 5:

Sim, é possível, porém é uma boa prática utilizar o pacote para melhor organização do código. Costumo usar o VSCode o que permite fazer sem pacote, mas é necessário depois rodar o javac pra criar o .class, e depois java NomeDoArquivo.java pra rodar.

### Questão 6:

O Paradigma de Orientação a Objetos (POO) organiza o software em torno de objetos que encapsulam dados e comportamentos. Na minha opinião isso facilita bastante pois podemos pensar nos objetos como o mundo real. Os conceitos principais incluem encapsulamento, herança, polimorfismo e abstração.

### Questão 7:

O modelo antigo era chamado modelo procedural. A programação procedural foca em funções que operam sobre dados, resultando em código linear o que considero muito mais difícil. A POO organiza o código em objetos, promovendo modularidade, reutilização e melhor manutenção.

### Questão 8: Inovações e Benefícios da POO

A POO trouxe a modelagem de problemas reais com objetos. Os benefícios incluem reutilização de código, facilidade de manutenção, melhor organização e abstração, deixando o código mais parecido com a linguagem do mundo real.

### Questão 9: Classe e Objeto

Uma classe é um molde que define as propriedades e comportamentos de um objeto. Um objeto é uma instância concreta de uma classe, representando algo de forma específica.

### Questão 10: Encapsulamento de Classes

Encapsular classes protege os dados internos, garantindo que sejam acessados apenas através de métodos controlados. Isso mantém a integridade dos dados e facilita a manutenção do código.