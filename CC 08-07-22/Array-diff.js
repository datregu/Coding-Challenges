<<<<<<< HEAD
/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/
//Filter all values from array 'a' included in array 'b'
=======
/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/
//Filter all values from array 'a' included in array 'b'
>>>>>>> bf02c823e483479775ce01c92f680f013f6dd526
arrayDiff = (a, b) => a.filter(val=>!b.includes(val))