import java.util.Scanner;

public class SistemaLinearCramer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Matriz dos coeficientes
        double[][] A = new double[3][3];
        // Vetor dos termos independentes
        double[] B = new double[3];
        
        // Entrada de dados
        System.out.println("Digite os coeficientes do sistema linear 3x3:");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.printf("A[%d][%d]: ", i+1, j+1);
                A[i][j] = scanner.nextDouble();
            }
            System.out.printf("B[%d]: ", i+1);
            B[i] = scanner.nextDouble();
        }
        
        // Cálculo do determinante da matriz A
        double detA = determinante(A);
        
        // Verificação da existência de solução
        if (detA == 0) {
            // Cálculo do determinante de uma matriz variável (por exemplo, Ax)
            double[][] Ax = new double[3][3];
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    Ax[i][j] = (j == 0) ? B[i] : A[i][j];
                }
            }
            double detAx = determinante(Ax);
            
            if (detAx == 0) {
                System.out.println("O sistema é indeterminado.");
            } else {
                System.out.println("O sistema não tem solução.");
            }
        } else {
            // Cálculo das soluções usando o método de Cramer
            double x = determinanteCramer(A, B, 0) / detA;
            double y = determinanteCramer(A, B, 1) / detA;
            double z = determinanteCramer(A, B, 2) / detA;
            
            System.out.println("Soluções:");
            System.out.printf("x = %.4f\n", x);
            System.out.printf("y = %.4f\n", y);
            System.out.printf("z = %.4f\n", z);
        }
        
        scanner.close();
    }
    
    // Método para calcular o determinante de uma matriz 3x3
    public static double determinante(double[][] matriz) {
        return matriz[0][0] * (matriz[1][1] * matriz[2][2] - matriz[1][2] * matriz[2][1])
             - matriz[0][1] * (matriz[1][0] * matriz[2][2] - matriz[1][2] * matriz[2][0])
             + matriz[0][2] * (matriz[1][0] * matriz[2][1] - matriz[1][1] * matriz[2][0]);
    }
    
    // Método para calcular o determinante da matriz de Cramer
    public static double determinanteCramer(double[][] A, double[] B, int col) {
        double[][] temp = new double[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                temp[i][j] = (j == col) ? B[i] : A[i][j];
            }
        }
        return determinante(temp);
    }
}