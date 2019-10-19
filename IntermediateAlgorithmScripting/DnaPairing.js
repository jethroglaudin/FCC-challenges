function pairElement(str) {
    let newStr = str.split("");
    let arr = [];
  
    for (let letter = 0; letter < newStr.length; letter++) {
      switch (newStr[letter]) {
        case "A":
          arr.push(["A", "T"])
          break;
        case "T":
          arr.push(["T", "A"])
          break;
        case "C":
          arr.push(["C", "G"])
          break;
        case "G":
          arr.push(["G", "C"])
          break;
  
      }
    }
    console.log(arr)
    return arr;
  }
  
  pairElement("ATCGA")

//   function pairElement(str) {
//     let newStr = str.split("");
//     let arr = [];
  
//     for(let i in newStr){
//       if(newStr[i] == "A"){
//         arr.push([newStr[i], "T"])
//       }
//       if(newStr[i] == "T"){
//         arr.push([newStr[i], "A"])
//       }
//       if(newStr[i] == "C"){
//         arr.push([newStr[i], "G"])
//       }
//       if(newStr[i] == "G"){
//         arr.push([newStr[i], "C"])
//       }
//     }
//     console.log(arr)
//     return arr;
//   }
  
//   pairElement("GCG")