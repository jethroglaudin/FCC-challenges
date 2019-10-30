function sumPrimes(num) {
  // sum all prime numbers. Prime numbers are numbers only divisible by itself and one.
  // must also be greater than one.
  // create an array to store all values from 2 - the number provided
  // create a function to check if the number at the ith position is indeed a prime number

  let primeArr = [];

  function isPrime(condition) {
    let j = 2;
    while (j < condition) {
      if (condition % j == 0) {
        return false;
      }
      j++;
    }

    return true;
  }

  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  console.log(primeArr);
  return primeArr.reduce((prev, curr) => {
    return prev + curr;
  });
}

sumPrimes(10);
// 19;45
