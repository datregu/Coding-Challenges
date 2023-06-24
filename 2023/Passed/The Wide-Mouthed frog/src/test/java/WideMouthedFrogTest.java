import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class WideMouthedFrogTest {

    @Test
    public void fixedTests() {
        assertEquals("wide", WideMouthedFrog.mouthSize("toucan"));
        assertEquals("small",WideMouthedFrog.mouthSize("alligator"));
        assertEquals("small",WideMouthedFrog.mouthSize("ALLIGATOR"));
        assertEquals("wide",WideMouthedFrog.mouthSize("bird"));
        assertEquals("wide",WideMouthedFrog.mouthSize("PIG"));
    }
}