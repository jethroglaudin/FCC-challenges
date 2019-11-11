function rot13(str) {
  // LBH QVQ VG!

  let shiftKey = 13;
  let strArr = str.split("");
  let alpha = /[A-Za-z]/;

  
  const SHIFT = char => {
    let shifted = char.charCodeAt(0);
    shifted = ((shifted - 65 + shiftKey) % 26) + 65;
    return String.fromCharCode(shifted);
  };

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match(alpha)) {
      strArr[i] = SHIFT(strArr[i]);
    }
  }
  console.log(strArr.join(""));
  return strArr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
