<¿php
function chromosomeCheck(string $sperm): string {
if (!is_string ($sperm)){
  throw new TypeError('Argument must be a string'); 
}
 if ( $sperm == "XY"){
   return 'Congratulations! You\'re going to have a son.';
 }else{
   return 'Congratulations! You\'re going to have a daughter.';
 }
}
?>