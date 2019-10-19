function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
  
  // let merge = arr1.concat(arr2);
  
  // let diff = merge.filter(function(elem) {
  //   return !arr1.includes(elem) || !arr2.includes(elem)
  // })
  
  
  for (let i = 0; i < arr1.length; i++){
    if (!arr2.includes(arr1[i])){
      newArr.push(arr1[i])
    }
  }
  
  for(let j = 0; j < arr2.length; j++){
    if(!arr1.includes(arr2[j])){
      newArr.push(arr2[j])
    }
  }
  
  console.log(newArr)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);