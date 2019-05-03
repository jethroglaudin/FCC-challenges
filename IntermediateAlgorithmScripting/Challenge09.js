
// Intermediate Algorithm Scripting: Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.





function fearNotLetter(str) {
  // split the str and create new array of character's numerical value
let numbers = str.split('').map(function(letter){
  return letter.charCodeAt();
  
});
for (let i = 0; i < numbers.length; i++){
  if (numbers[i+1] - numbers[i] > 1){
    return String.fromCharCode(numbers[i]+1);
  }
}
 return undefined;
}


fearNotLetter("abce");