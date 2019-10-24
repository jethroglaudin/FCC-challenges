function pairElement(str) {
  let dnaArr = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        dnaArr.push(["A", "T"]);
        break;
      case "T":
        dnaArr.push(["T", "A"]);
        break;
      case "C":
        dnaArr.push(["C", "G"]);
        break;
      case "G":
        dnaArr.push(["G", "C"]);
        break;
    }
  }
  console.log(dnaArr);

  return dnaArr;
}

pairElement("GCG");
//T 5:45