function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    
    arr = collection.filter((item) => {
        for(let i in source){
            if(source[i] !== item[i]){
                return false;
            }
        }
        return true;
    })
  
     console.log(arr)
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
  //15:35
  