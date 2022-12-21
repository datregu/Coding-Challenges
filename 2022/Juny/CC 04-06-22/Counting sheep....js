/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/


function countSheeps(arrayOfSheep) {
    //Create a counter, and sum 1 for every 'true' in array
    let count = 0;
    for (sheep of arrayOfSheep){
     if (sheep === true){ 
     count += 1; 
     }
    } return count
  }