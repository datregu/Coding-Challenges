/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let count = 0;
  for (let char of str.split('')){
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
      count += 1;
    }
  }
    return count;
  }
