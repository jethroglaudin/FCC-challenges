function binaryAgent(str) {
    // first covert str into array of binary values.
    let binArr = str.split(" ");
    let charArr = [];

    // const turnToBase10 = (value) => {
    //     return parseInt(value, 2);
    // }
    // const convertAscii = (char) => {
    //     return String.fromCharCode(char);
    // }

    // for (let i = 0; i < binArr.length; i++)
    // {
    //     charArr.push(convertAscii(turnToBase10(binArr[i])));
    // }
    // console.log(charArr.join(""));


  return str.split(" ").map((elem) => {return String.fromCharCode(parseInt(elem, 2))}).join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// T 6:22