function chunkArrayInGroups(arr, size) {
  // Break it up.

  let newArr = []
  
  for(let i = 0; i < arr.length; i+=size){
    newArr.push(arr.slice(i, size + i))
  }
  console.log(newArr)
  
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2)