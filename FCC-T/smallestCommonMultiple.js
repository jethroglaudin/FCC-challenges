function smallestCommons(arr) {
  // Solution 1
    function isMultiple(max, min, multiple){
        for (let i = max; i >= min; i--){
            if (multiple % i !== 0){
                return false;
            }
        }
        return true

    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let multiple = max;

    while(!isMultiple(max, min, multiple)){
        multiple+= max;
    }
    console.log(multiple);
    // 13:34

    // Solution 2

      // let max = Math.max(...arr);
    // let min = Math.min(...arr);
    // let multiple = max;
    // for (let i = max; i >= min; i--){
    //     if(multiple % i !== 0){
    //         multiple += max;
    //         // console.log(multiple);
    //         i = max;
    //     }
    // }
    // console.log(multiple);
   
    return multiple;
  }
  
  
  smallestCommons([1,5]);
  // T 7:05;