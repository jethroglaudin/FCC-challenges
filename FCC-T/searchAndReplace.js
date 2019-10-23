function myReplace(str, before, after) {
  const isUpper = value => {
    let testCase = value.charCodeAt(0);
    if (testCase >= 65 && testCase <= 90) {
      return true;
    }
  };
  if (isUpper(before)) {
    let firstLetter = after[0];
    let remainingLetters = after.substr(1);
    str = str.replace(before, firstLetter.toUpperCase() + remainingLetters);
  } else {
    str = str.replace(before, after);
  }
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// 17;42
