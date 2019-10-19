function binaryAgent(str) {
  let binaryArray = str.split(" ");
  // let newStr = [];


  // function convertToAscii(binary) {
  //   let value = parseInt(binary, 2);
  //   return value.toString();
  // }

  // function convertToChar(arg) {
  //   let value = String.fromCharCode(arg);
  //   return value;
  // }

  // for (let i = 0; i < binaryArray.length; i++) {
  //   let ascii = convertToAscii(binaryArray[i]);
  //   let char = convertToChar(ascii);
  //   newStr.push(char);
  // }

  let newStr = str.split(" ").map((item) => {return String.fromCharCode(parseInt(item, 2))}).join("");

  console.log(newStr)


  return str;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
