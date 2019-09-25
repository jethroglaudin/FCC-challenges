function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let tempArr2 = arr2.slice(0);
    let tempArr1 = arr1.slice(0)
  
    let index = n
    for (let i = 0; i < tempArr1.length; i++){  
      tempArr2.splice(index, 0, tempArr1[i])
      index++
    }
  
    console.log(tempArr2)
    return tempArr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5], 1)


//   function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     let tempArr2 = arr2.slice(0);
//     let tempArr1 = arr1.slice(0)
  
//     let index = n
//     for (let i = 0; i <= tempArr1.length; i++){  
//       tempArr2[index] = tempArr1.splice(0, tempArr1.length, tempArr2[index])
//       index++
//     }
  
//     console.log(tempArr2)
//     return tempArr2;
//   }
  
//   frankenSplice([1, 2, 3], [4, 5], 1)