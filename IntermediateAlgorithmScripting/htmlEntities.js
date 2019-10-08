function convertHTML(str) {
    // &colon;&rpar;
    let arr = str.split("");
    console.log(arr)
  
    for (let index = 0; index < arr.length; index++) {
      switch (arr[index]) {
        case "&":
          arr[index] = "&amp;"
          break;
        case "<":
          arr[index] = "&lt;"
          break;
        case ">": 
          arr[index] = "&gt;"
          break;
        case `"`:
          arr[index] = "&quot;"
          break;
        case `'`:
          arr[index] = "&apos;"
          break;
      }
    }
    console.log(arr.join(""))
  
    return arr.join("");
  }
  
  convertHTML("Schindler's List");
  