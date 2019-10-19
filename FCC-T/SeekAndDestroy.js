function destroyer(arr) {
    // Remove all the values
    let arg = Array.from(arguments);
    
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(!arg.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
    return newArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  