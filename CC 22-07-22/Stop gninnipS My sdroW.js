/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"*/

function spinWords(string){
    //array to string
    let arr = string.split(' ');
    //declare the output array
    let result = []
    //iterate the array words
  for (let word of arr){
    //if the word length is 5 or more...
    if (word.length >= 5){
      //...reverse the word and push it to outout array
      result.push(word.split('').reverse().join(''))
      //..if not, just push the word
    }else{
      result.push(word)
    }
  }
    //return the output array
    return result.join(' ')
  }