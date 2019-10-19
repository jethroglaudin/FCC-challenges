function steamrollArray(arr) {
  // I'm a steamroller, baby

  let newArr = [];
  function flatten(arr){
      return arr.reduce((prev, curr) => {
        if(Array.isArray(curr))
            prev.concat(flatten(curr))
         else
         prev.concat(curr)
      })
  }

flatten(arr)
console.log(arr)
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
