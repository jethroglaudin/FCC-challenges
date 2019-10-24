function fearNotLetter(str) {
    // convert each char into its ascii value
    // compare the last one to the previous one.
    // subract the current one by the last one thus 67 - 65
    // if the value is greater than 1 then that's where the missing value is. 
    // take that number and converted it back to alpha then instert it between both values.

    let ascii = [];
    let missingLetter = undefined

    function convertToAscii (value) {
        return value.charCodeAt(0);
    }

    for (let i = 0; i < str.length; i++){
       ascii.push(convertToAscii(str[i]))

    }
    for (let j = 0; j < ascii.length; j++){
        let current = ascii[j];
        let previous = ascii[j - 1]

        if(current - previous > 1){
            missingLetter = current - 1;
            missingLetter = String.fromCharCode(missingLetter);
        }
        
    }

   console.log(missingLetter)
    return missingLetter;
  }
  // T 13:24
  
  fearNotLetter("abce");
  