/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!*/

function capitalize(s){
    // string to array; then map its values depending on their index for each word
    let s1 = s.split('').map((val,index) => index % 2 == 0 ? val.toUpperCase() : val ).join('');
    let s2 = s.split('').map((val,index) => index % 2 !== 0 ? val.toUpperCase() : val ).join('');
    return [s1,s2]
  };