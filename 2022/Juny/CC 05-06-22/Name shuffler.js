/*Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"*/

//String to array, then reverse order, then join it to become array again
nameShuffler = (str) => str.split(' ').reverse().join(' ')

