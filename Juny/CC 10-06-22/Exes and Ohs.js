<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> addf0cbfbe692428e77b443f06a9f81b897d46c7
=======
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
>>>>>>> 4ef446430f47ba8b977bff98ef323abe1becfb85
}