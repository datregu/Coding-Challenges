/* 
Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); 
*/

//Iterate for each letter and check if its the same after using toUpperCase on it
var capitals = function (word) {
    let list = [];
      for (let letter of word.split('')){
        if (letter == letter.toUpperCase()){
          list.push(word.indexOf(letter))
        }
      }
      return list
    };