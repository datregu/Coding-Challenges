/* In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.*/

public class Number {

  public boolean isEven(double n) {
    boolean par; 
    if ( n % 2 == 0){
par = true;
} else {
par = false;
    }
return par;     
  } 
}

/*Lets try refactoring this code*/

public class Number {
    public boolean isEven(double n){
        boolean answer = false;
        if (n % 2 == 0){
            answer = true;
        }
        return answer;
    }
    
}