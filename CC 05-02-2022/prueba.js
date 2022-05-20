/*Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"*/
var greet = function(name) {
    name = name.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);
    return "Hello "+ name +"!";
};

/*Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Have fun!*/

function oddOrEven(array) {
//Sum all elements in array, then if/else if the result is odd/even
    let suma = array.reduce((sumaParcial, a) =>sumaParcial + a, 0);
        if (suma % 2 == 0) {
            return 'even'
        }else{
         return 'odd'
        };
}
  