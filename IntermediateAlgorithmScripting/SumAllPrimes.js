function sumPrimes(num) {
    let primeArray = [];
  
    for (let i = 2; i <= num; i++){
        if(isPrime(i)){
            primeArray.push(i);
        }
    }
    return primeArray.reduce((prev, curr) => {
        return prev + curr;
    })
  }
  
  const isPrime = value => {
      for (let j = 2; j < value; j++){
          if(value % j == 0){
              
              return false;
          }
      }
      return true;
  }
    
    sumPrimes(10);