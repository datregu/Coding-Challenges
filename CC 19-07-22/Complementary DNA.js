/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"*/

function DNAStrand(dna){
    //string to array
    let arr = dna.split('');
    let newArr = []
    //iterate the array
    for (let char of arr){
    // find and push each letter to new array
  if ( char === 'A'){
    newArr.push('T')
  }else if (char == 'T'){
    newArr.push('A')
  }else if ( char === 'C'){
    newArr.push('G')
  }else if(char === 'G'){
    newArr.push('C')
  }else{
    newArr.push(char)
  }}
   //transform and return string
      return newArr.join('')
  }