function uniteUnique(arr) {
    let args = Array.from(arguments)
  
    let newArr = []
    
    for (let i = 0; i < args.length; i++){
      for (let j = 0; j < args[i].length; j++){  
        if(newArr.indexOf(args[i][j]) === -1){
          newArr.push(args[i][j])
        }
      }
    }
    console.log(newArr)
    return arr;
  }
  
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])