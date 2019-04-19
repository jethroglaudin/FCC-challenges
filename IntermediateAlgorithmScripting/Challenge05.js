// Intermediate Algorithm Scripting: Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // 
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
// match any spaces \s or | undersscores _ with '-'
  // let answer = str.replace(/\s|_/g, '-');
  
  return str.replace(/\s|_/g, '-');
}
spinalCase('This Is Spinal Tap');