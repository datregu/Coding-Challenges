<<<<<<< HEAD
<<<<<<< HEAD
/*Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.*/

roundToNext5 = n => {
    for ( let i = 0; i < 5; i++){
      if ( n %  5 === 0){
        return n
      }else{
        n +=1
      }
    }
=======
/*Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.*/

roundToNext5 = n => {
    for ( let i = 0; i < 5; i++){
      if ( n %  5 === 0){
        return n
      }else{
        n +=1
      }
    }
>>>>>>> bf02c823e483479775ce01c92f680f013f6dd526
=======
/*Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.*/

roundToNext5 = n => {
    for ( let i = 0; i < 5; i++){
      if ( n %  5 === 0){
        return n
      }else{
        n +=1
      }
    }
>>>>>>> 29fa387ec3500bb816d3c3b25db8826625d22881
    }