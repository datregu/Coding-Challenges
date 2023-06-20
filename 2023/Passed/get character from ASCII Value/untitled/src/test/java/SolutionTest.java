import org.example.Ascii;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SolutionTest {
    @Test
    public void testChar() {
        assertEquals('7', Ascii.getChar(55));
    }
}