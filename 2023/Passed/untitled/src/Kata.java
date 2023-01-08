//When provided with a letter, return its position in the alphabet.
//
//        Input :: "a"
//
//        Ouput :: "Position of alphabet: 1"

public class Kata {
    public static String position(char alphabet) {
        String abc = "abcdefghijklmnopqrstuvwxyz";
        int indexChar = abc.indexOf(alphabet);
        return "Position of alphabet: "+(indexChar+1);
    }
}