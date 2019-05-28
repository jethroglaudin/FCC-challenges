// Intermediate Algorithm Scripting: Sum All Primes

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function sumPrimes(num) {
  let range = [];
  
  for (let i = 2; i <= num; i++){
    // if is prime number push into range
    if (isPrimeNumber(i)){
      range.push(i);
    }
  }
  return range.reduce(function(a,b){
    return a + b;
  });
}

function isPrimeNumber(num){
  for (let x = 2; x < num; x++){
    if(num % x === 0){
      return false;
    }
  }
  return true;
}
sumPrimes(10);