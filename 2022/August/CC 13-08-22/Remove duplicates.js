/* 
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

//Set takes the array of duplicated words and makes a new object with only unique values. 
function removeDuplicateWords (s) {
    let a = new Set(s.split(' '));
    // object to array to string, return it
    return Array.from(a).join(' ');
    }