function dropElements(arr, func) {
    // Drop them elements.
  
    // let length = arr.length;
  
    // for (let i = 0; i < length; i++) {
    //   if (!func(arr[0])) {
    //     arr.shift();
    //   } else {
    //     break;
    //   }
    // }
  
    while(!func(arr[0])){
      arr.shift()
    }
    return arr
  }
  
  dropElements([0, 1, 0, 1], function (n) { return n === 1; });