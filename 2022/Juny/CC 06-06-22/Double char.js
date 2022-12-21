/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/

function doubleChar(str) {
  //string to array, and create result array
let arr = str.split('');
  let result = []
  //array iteration
  for (let i = 0; i < arr.length; i++){
    //add both times that element in the result array
    result.push(arr[i]);
    result.push(arr[i])
  }
  //array to string
  return result.join('')
}

//Ugly code, but..."It just works" 