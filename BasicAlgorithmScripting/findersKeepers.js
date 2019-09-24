function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++){
      // check to see if array element passes arg function
      if(func(arr[i])){
        // if true assign that element to num then break ending the loop
        num = arr[i]
        break;
      }
      if(!func(arr[i])){
        // else if we go through and condition fails assign undefined to num
        num = undefined
      }
    }
    return num;
  }
  
  findElement([1, 3, 5, 9], num => num % 2 === 0);