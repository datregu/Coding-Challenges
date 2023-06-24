public class WideMouthedFrog{
    public static String mouthSize(String animal){
        String mouth = "wide";
        if (animal.equalsIgnoreCase("alligator")){
            mouth = "small";
        }
        return mouth;
    }
}