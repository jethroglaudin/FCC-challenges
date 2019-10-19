function largestOfFour(arr) {
    // You can do this!
    let maxNum = 0;
    let newArr = []
    

    
    // for(let i = 0; i < arr.length; i++){
    //   for (let j = 0; j < arr[i].length; j++) {
    //       maxNum = Math.max(...arr[i])     
    //   }
    //   console.log(...arr[i]);
    //   newArr.push(maxNum)  
    // }

    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            let result = arr[i][j];
            if (result > maxNum){
                maxNum = result;
            }
            
        }
        newArr.push(maxNum);
    }
    console.log(newArr);
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);