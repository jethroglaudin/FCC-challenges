function sumFibs(num) {

    let fibArr = makeFibArr(num);
    let sum = fibArr.filter(elem => {
      return elem % 2 !== 0
    }).reduce((prev, curr) => {
      return prev + curr
    })
    return sum;
  }
  function makeFibArr(num){
    let fibArr = [1,1];
  
    while(true){
      let secondLast = fibArr[fibArr.length-2];
      let last = fibArr[fibArr.length-1];
      let next = secondLast + last;
      if(next<= num){
        fibArr.push(next)
      } else {
        return fibArr;
      }
    }
  }
  
  sumFibs(75024);