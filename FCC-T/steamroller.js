function steamrollArray(arr) {
    // I'm a steamroller, baby
    // return arr.flat(Infinity);

    const flatten = (value) => {
        return value.flat();
    }

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr)){
            // 
          arr = flatten(arr)  
        } 
        console.log(arr[i])
        
    }
    console.log(arr);
    return arr;

  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  // T 19:15