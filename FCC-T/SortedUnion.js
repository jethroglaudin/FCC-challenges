function uniteUnique(arr) {
    let argArr = Array.from(arguments);
    // let argArr = Array.from(arguments[arguments.length-1]);
    let newArr = [] 
     argArr.map((elem) => {
        for(let i in elem){
          if(!newArr.includes(elem[i])){
             newArr.push(elem[i])
          }
        }
     
    })
    console.log(newArr)
   
    return newArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  //T 23:41