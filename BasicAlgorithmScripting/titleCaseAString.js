function titleCase(str) {
    let newStr = str.toLowerCase().split(" ");
    let tempArr = [];
    let tempStr = ""
    let titleStr = ""
    for (let i = 0; i < newStr.length; i++){
        tempStr = newStr[i];
        titleStr = tempStr.replace(tempStr.charAt(0), toUpper(tempStr.charAt(0)));
        tempArr.push(titleStr);
        
        // temp.push(newStr[i].replace(newStr.charAt(0), newStr[i].toUpperCase()))
    
  }

  str = tempArr.join(" ");
  console.log(str);
  return str;
}
  
  titleCase("I'm a little tea pot");

  function toUpper(char){
    return char.toUpperCase()
  }