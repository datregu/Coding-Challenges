/*Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/


function duplicateCount(text){
    //string to array
    let sampleArray = text.toLowerCase().split('');
    // the object will carry how many times each letter repeats in the array, as { letter : repeats, ...}
    const counts = {};
    // iterate for each letter 
    sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    // object to array
    const objToArray = Object.entries(counts);  
    // filter a new array with those entries bigger than 1, that is to say, who appeared more than once
    const filtered = objToArray.filter(([key,value]) => value > 1);
    // the length of the object is the total of repeating letters
     return filtered.length
    }