function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let regex = /\W+|_/g
  let lowerToUpperRegex = /([a-z])([A-Z])/g
  let newStr = "";

  str = str.replace(lowerToUpperRegex, "$1, $2");
  if(str.match(regex)){
    newStr = str.replace(regex, "-");
  }
  console.log(newStr);
  return newStr.toLowerCase();
}

spinalCase('AllThe-small Things');
//T 27:35