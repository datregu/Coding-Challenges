//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

public class Solution {
    public static String replace(final String s) {
      //Define variables
      String output = s;
      String vocal = "aeiouAEIOU";
      String excla = "!";
      String letra = "";
      //Iterate the string; if the char 'letra' is in 'vocal', replace it with a "!"
        for (int i = 0; i < s.length(); i++){
            letra = Character.toString(s.charAt(i));
          if ( vocal.contains(letra)){
            output = output.replace(letra, excla);
          }
        }
      return output; 
    }
}