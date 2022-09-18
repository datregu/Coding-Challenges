/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

function count (str) {
    let obj = {};
   if (str.length == 0){
     return {}
   }else{
     let arr = str.split('');
     for ( let char of arr){
       if ( Object.keys(obj).includes(char) == false){
         obj[char] = 1;
       }else{
       obj[char]++ ;
     }  
   }
  }
  return obj
  }