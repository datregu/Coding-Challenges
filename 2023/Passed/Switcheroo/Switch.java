/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'*/
public class Switch {
  public static String switcheroo(String x) {
      String result = "";
      for ( int i =0; i < x.length(); i++){
        char letra = x.charAt(i);
        if (letra == 'a'){
          result += 'b';
        }else if (letra == 'b' ){
          result += 'a';
        }else{
          result += letra;
        }
      }    
    return result;
  }
}