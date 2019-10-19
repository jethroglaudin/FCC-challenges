function myReplace(str, before, after) {
    // let regex = /jumped/g
    // Create an array from the str splitting at each space.
    let newStr = str.split(" ");
   
    // function is for checking whether or not the string that matches variable 
    // before is uppercase. If so make after uppercase also. Else leave after as is.
    function isUpper(value){
        if(value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90)
           return after = after.replace(/^\w/, after[0].toUpperCase())
         else 
            return after  
    }
    
    for (let word in newStr)
    {
       if(newStr[word] == before)
       {
           if(isUpper(before))
           {
            newStr[word] = after;
           }
           else 
           {
            newStr[word] = after;
           }
           
           
       }
    }
    console.log(newStr.join(" "))



    return newStr.join(" ");
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");