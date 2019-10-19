function fearNotLetter(str) { 
    let answer = undefined; 
      for (let i = 0; i < str.length; i++){
          let current = str.charCodeAt(i);
          let previous = str.charCodeAt(i - 1)
         if(current - previous > 1){
           answer = String.fromCharCode(str[i].charCodeAt() - 1)
         }    
      }
  
      return answer;
    }
    
    fearNotLetter("abce");



// function fearNotLetter(str) {
//     // turn string into array;
//     let newArr = str.split("");
//     let ascii = [];
//     let ans = undefined;
  
//     function convertToASCII(value){
//       return value.charCodeAt()
//     }
  
//     for (let char = 0; char < newArr.length; char++){
//       let temp = convertToASCII(newArr[char])
//       ascii.push(temp)
//     }
  
//     for (let i in ascii){
//       let current = ascii[i];
//       let previous = ascii[i-1]
//       if (current - previous > 1){
//         ans = current - 1;
//         ans = String.fromCharCode(ans)
//       } 
//     }
//     console.log(ans)
//     return ans;
//   }
  
//   fearNotLetter("abce");

