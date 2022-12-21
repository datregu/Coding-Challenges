/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

function isPangram(string){
    //declare an array with all alphabetic chars
    let abc = [ 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
   //use the Set object to generate an array of unique values
    let  val = Array.from(new Set(string
                                    //delete any non alphabet chars in string
                                 .replace(/[^a-z]/gi, '')
                                    //lowercase all chars
                                 .toLowerCase()
                                    //string to array
                                 .split('')));
    //compare the length of both arrays
  return val.length === abc.length
  }