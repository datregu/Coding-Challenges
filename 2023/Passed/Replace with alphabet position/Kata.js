/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/
let str = "The sunset sets at twelve o' clock.";


function alphabetPosition(text) {
    //Remove anything that's not a letter, then to lowercase and make it an array
    let split_letters_no_blank_spaces = text.replace(/[^a-z]+/gi, '').toLowerCase().split('');
    
    //make an alphabet array
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    
    //loop through the array and find the position of the letter in the alphabet array
    let letters_positions = [];
    for (let i = 0; i < split_letters_no_blank_spaces.length; i++) {
      letters_positions.push(alphabet.indexOf(split_letters_no_blank_spaces[i]) + 1);
    }

    //return an string with the position of the letters
    return letters_positions.join(' ');

  }

alphabetPosition(str);