function factorialize(num) {
    let ans = [];
    let sum = 0
    if (num > 0) {
      for (let i = 1; i <= num; i++) {
        ans.push(i);
      }
       sum = ans.reduce((prev, curr) => {
        return prev * curr
      });
    }
    else {
      return 1;
    }
  
    console.log(sum)
    return sum;
  }
  
  factorialize(5);