function bouncer(arr) {
    // Don't show a false ID to this bouncer.
  
    var nonFalsy = []
   for (let i in arr ){
     // check if truthy
     if(arr[i]){
       nonFalsy.push(arr[i])
     }
   }
    console.log(nonFalsy)
    return nonFalsy
    
    // return arr.filter(Boolean)
  }
  
  bouncer([7, "ate", "", false, 9]);