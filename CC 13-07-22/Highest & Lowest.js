<<<<<<< HEAD
<<<<<<< HEAD
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

let highAndLow = (numbers) => {
    //string to array, and sort its elements
    let arr = numbers.split(' ').sort((a,b)=> a-b);
    //return the last and first elements
  return `${arr[arr.length-1]} ${arr[0]}`
=======
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

let highAndLow = (numbers) => {
    //string to array, and sort its elements
    let arr = numbers.split(' ').sort((a,b)=> a-b);
    //return the last and first elements
  return `${arr[arr.length-1]} ${arr[0]}`
>>>>>>> bf02c823e483479775ce01c92f680f013f6dd526
=======
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

let highAndLow = (numbers) => {
    //string to array, and sort its elements
    let arr = numbers.split(' ').sort((a,b)=> a-b);
    //return the last and first elements
  return `${arr[arr.length-1]} ${arr[0]}`
>>>>>>> 29fa387ec3500bb816d3c3b25db8826625d22881
  }