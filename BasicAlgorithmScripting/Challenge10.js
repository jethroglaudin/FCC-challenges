// Basic Algorithm Scripting: Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function titleCase(str) {
  let lowStr = str.toLowerCase().split(' ');
  let array = lowStr.map(function(newStr){
    let answer = newStr.replace(newStr[0], newStr[0].toUpperCase());
    return answer;
    
  });

  return array.join(' ');
}

titleCase("I'm a little tea pot");