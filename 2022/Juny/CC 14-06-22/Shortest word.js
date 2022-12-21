//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.


//string to array
function findShort(s){
    let arr = s.split(' ');
    let shortWord = ''
    //array iteration to compare words
    for (let word of arr){
      //if shortWord is empty or actual word is short than shortWord, shortWord becomes word
      if (word.length < shortWord.length || shortWord.length == 0){
        shortWord = word;
      }
    }
    return shortWord.length
  }