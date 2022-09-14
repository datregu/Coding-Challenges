/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""*/

function order(words){
  //string to array, sort the array
return words.split(' ').sort((a,b) => 
                //detect the number in each word, convert it to an integer and sort them all
                Number(a.match(/[1-9]/)) - Number(b.match(/[1-9]/))).join(' ');

}