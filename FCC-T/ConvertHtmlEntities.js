function convertHTML(str) {
    // &colon;&rpar;
    let htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&apos;',
        '"': '&quot;'
    };
    let newStr = str.split("")
    
    for(let i = 0; i < newStr.length; i++){
        if(htmlEntities.hasOwnProperty(newStr[i])){
            newStr[i] = htmlEntities[newStr[i]]
         
        }
    }
    console.log(newStr.join(""))

    return newStr.join("");
  }
  
  convertHTML("Dolce & Gabbana");
  // 17;59