//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
class Kata {
    public static String getMiddle(String word) {
        //Variables
        String result = "";
        int lengthWord = word.length();
        int evenIndex1 = (lengthWord/2)-1;
        int evenIndex2 = evenIndex1 + 1;
        int oddIndex =  evenIndex2;
        char a = word.charAt(evenIndex1);
        char b = word.charAt(evenIndex2);
        System.out.println(word);
        if ( lengthWord % 2 == 0) {
            result = result + a + b;
            System.out.println(result);
        }else if ( lengthWord == 1){
            result = result + word;

        }else{
            char c = word.charAt(oddIndex);
            result = result + c;
        }

        return result;
    }

}
//Failed, the solution should be the code above. I should have used the substring function for an easy and clean solution

class Kata {
    public static String getMiddle(String word) {
        String s = "";
        int length = word.length();
        int half = length/2;

        if (length % 2 == 0) {

            s = word.substring(half - 1, half + 1);

        } else {

            s = word.substring(half, half + 1);

        }

        return s;
    }
}