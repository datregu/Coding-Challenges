/*Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"*/

//VERY ugly code, but passes all the test cases...But i've seen worse
//replace the regex 797 match by 77, thus deleting the in between 9s
let sevenAte9 = str =>  str.replace(/797/g,77).replace(/797/g,77);