<?
/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/
function descendingOrder(int $n): int {
    //Int to array
      $arr = str_split($n); 
      //Sort the array descend
      rsort($arr);
      //Join the values into str
      $a = implode($arr);  
      //Parse str to int
      $num_sorted = intval($a);
    
      return $num_sorted;
    }
    
    
?>
