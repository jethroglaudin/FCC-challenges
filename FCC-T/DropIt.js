function dropElements(arr, func) {
    // Drop them elements.
  
    let length = arr.length;
    for (let i = 0; i < length; i++){
      if(!func(arr[0])){
        arr.shift();
      } else {
        break;
      }
    }
    return arr;
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})
  
  // 2:59