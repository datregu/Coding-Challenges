/*Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.*/

function sumArray(arr) {
    //if clause to handle all invalid inputs
    if (arr == null || arr == NaN || arr == undefined || arr.length < 3 ){
      return 0;
    }else{
        //convert the number elements of the array into strings, sort them from least to greatest
      let arr1 = arr.map( val => String(val)).sort((a,b) => a-b);
      //put of the first and last elements
      arr1.pop();
      arr1.shift();
      //convert the elements back to Number type, sum the elements and  return the output
    return arr1.map((val) => Number(val)).reduce((a,b) => a+b,0)
    }
    }