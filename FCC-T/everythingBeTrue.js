function truthCheck(collection, pre) {
    // Is everyone being true?
   let ans = collection.every((elem) => {
        // return Boolean(elem[pre])
        return elem[pre]
    })
    console.log(ans)
    //return collection.every((elem)=> {return elem[pre]});
    return ans;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sext");
  // T 5:21