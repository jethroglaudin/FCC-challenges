function reverseString(str) {
  
    // return str.split("").reverse().join("")

    let newStr = str.split("");
    console.log(newStr)
    let length = newStr.length;
    let tempArr = [];

    for(let i = length-1; i >= 0; i--){
      tempArr.push(newStr[i]);
    }
    console.log(tempArr.join(""))
    return tempArr.join("")
  }
  
  reverseString("hello");