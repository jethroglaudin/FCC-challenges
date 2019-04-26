// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function findLongestWordLength(str) {
  let strSplit = str.split(' ');
  let maxLength = 0;
 for (let i = 0; i < strSplit.length; i++){
   if (strSplit[i].length > maxLength){
    maxLength = strSplit[i].length;
   }
   
 }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
