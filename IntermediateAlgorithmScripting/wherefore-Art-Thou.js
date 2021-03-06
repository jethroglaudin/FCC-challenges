function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  // arr = collection.filter((item) => {
  //   for (let i in source){
  //     if(item[i] != source[i]){
  //       return false;
  //     }
  //   }
  //   return true
  // })

  let sourceKeys = Object.keys(source);

  for (let item = 0; item < collection.length; item++) {
    let isGood = true;
    for (let key = 0; key < sourceKeys.length; key++) {
      if (
        !collection[item].hasOwnProperty(sourceKeys[key]) ||
        collection[item][sourceKeys[key]] !== source[sourceKeys[key]]
      ) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      arr.push(collection[item]);
    }
  }

  console.log(arr);

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
