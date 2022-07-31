/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/
//We cant mutate the array, so the best way is using .map(); if the value is positive, will become negative. If negative, will become positive because '-' plus '-' becomes '+'
let  invert = (array) =>array.map(ele => -ele) ;
  