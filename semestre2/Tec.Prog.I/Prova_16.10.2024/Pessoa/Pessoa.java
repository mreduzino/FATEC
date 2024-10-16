package Pessoa;
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