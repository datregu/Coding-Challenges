public class Ejemplo {
    public int suma(int num1, int num2){
        try {
            return num1 + num2;
        } catch (NumberFormatException e){
            System.out.println("Error: Only integers accepted");
        return 0;
        }
    }
}
