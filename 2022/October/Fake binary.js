/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.*/

let fakeBin = x => x.split('').map(i => i < 5 ? 0 : 1).join('');
