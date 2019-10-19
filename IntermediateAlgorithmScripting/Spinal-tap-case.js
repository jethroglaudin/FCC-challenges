function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
  
  // first remove non word characters and any underscores
  // \W matches any non-word char equavalent to 
  // | or _ underscore
  let regex = /\W|_/g;
  
  // check for camelCase and add space 
  // when char goes from lower to uppercased. 
  // $1 $2 are the placeholders of the captured matches
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // now for ever non Word char or underscore replace with dash(-)
  let newStr = str.replace(regex, '-');
  
  
    return newStr.toLowerCase()
  }
  
  spinalCase('thisIsSpinalTap');