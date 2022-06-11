/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/


function XO(str) { 
    //str to uppercase and then to arr
    let arr = str.toLowerCase().split('');
    //filter out the 'x' and 'o' in new arrays and compare their length; same length is true, else false
    if (arr.filter( letter => letter === 'x').length ===  arr.filter( letter => letter === 'o').length) { 
    return true
  }else{
    return false
  }
}