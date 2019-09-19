function palindrome(str) {
    // Good luck!
    let newStr = str.toLowerCase()
    var regex = /\W+|_/g; 
    let regStr = newStr.replace(regex, "");
  
    let compare = regStr.split("").reverse().join("");
    console.log(regStr)
    console.log(compare)
    if(regStr == compare){
      return true
    } else {
       return false;
    }
   
  }
  
  
  
  
  palindrome("not a palindrome");