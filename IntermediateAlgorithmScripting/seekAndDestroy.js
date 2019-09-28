function destroyer(arr) {
    // Remove all the values
  
    let arg = Array.prototype.slice.call(arguments, 1);
    let newArr = []
    
    for (let i in arr){
      if (!arg.includes(arr[i])){
        newArr.push(arr[i])
      }
    }
  
  console.log(newArr)
    return newArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);