//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//Example:

//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//None of the arrays will be empty, so you don't have to worry about that!


//Filter those elements that have an even index
let removeEveryOther = arr => arr.filter( (elem, index, array) => index % 2 == 0)