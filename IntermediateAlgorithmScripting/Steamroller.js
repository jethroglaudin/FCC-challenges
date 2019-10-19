function steamrollArray(arr) {
  // I'm a steamroller, baby
  let i = 0;

  while(i < arr.length){
    if(Array.isArray(arr)){
      arr = arr.flat()
      console.log(arr)
    }
    i++;
  }

 
  
  // return arr.flat(Infinity)
  return arr;

}

steamrollArray([1, [2], [3, [[4]]]]);
