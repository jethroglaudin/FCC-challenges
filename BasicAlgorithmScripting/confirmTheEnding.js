function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let newStr = str.split(" ");
    let end = str.slice(str.length - target.length);
    console.log(end)
    console.log(newStr);

    if(end == target)
        return true
     else
     return false;

    
  }
  
  confirmEnding("Bastian", "n");