/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

function getSum( a,b ){
//we define the max and min number
let result = Math.min(a,b);
let secondNum = Math.max(a,b);
//declare the array to store the values
var list = [];
for (var i = result; i <= secondNum; i++) {
    // store the values in the array
    list.push(i);}
    // use reduce to sum all values
  return list.reduce((a,b) => a+b,0);
}