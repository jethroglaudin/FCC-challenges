function whatIsInAName(collection, source) {
    // What's in a name?

    // console.log(source)
    // Only change code below this line
    
   var arr = collection.filter((element) => {
        for(let i in source){
            if(element[i] !== source[i]){
                return false
            }
        }
        return true
        
    })
    console.log(arr)

    
  
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
  //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
  // 20:31