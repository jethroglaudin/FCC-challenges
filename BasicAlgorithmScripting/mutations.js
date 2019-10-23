function mutation(arr) {
    let compare = arr[0].toLowerCase();
    compare = compare.split("")
    console.log(compare)
  
    let test = arr[1].toLowerCase();
    test = test.split("")
    console.log(test)
   
    let condition = null;
        for (let j = 0; j < test.length; j++){
            if(compare.includes(test[j])){
                condition = true
            } else {
                return false
            }

        }

    
    return condition
  }
  mutation(["hello", "hey"])