import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MathUtilsTest {
@Test
    void sumar_enteros(){
    //Arrange
    int num1 = 4;
    int num2 = 4;
    Ejemplo mathUtils = new Ejemplo();
    // Act
    int result = mathUtils.suma(num1, num2);
    // Assert
    int expectedSum = num1 + num2;
    assertEquals(expectedSum, result);
}
    void sumar_decimales(){
        //Arrange
        int num1 = 4.2;
        int num2 = 4.1;
        Ejemplo mathUtils = new Ejemplo();
        // Act
        int result = mathUtils.suma(num1, num2);
        // Assert
        int expectedSum = num1 + num2;
        assertEquals(expectedSum, result);
    }
@Test
    void string_más_string(){
    //Arrange
    String num1 = "4";
    String num2 = "4";
    Ejemplo sumarStrings = new Ejemplo();
    // Act
    int result = sumarStrings.suma(Integer.parseInt(num1), Integer.parseInt(num2));
    // Assert
    int expectedSum = Integer.parseInt(num1) + Integer.parseInt(num2);
    assertEquals(expectedSum, result);
}

}