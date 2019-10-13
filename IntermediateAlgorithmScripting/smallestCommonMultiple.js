function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
  
    let rangeArr = [];
  
    for (let i = max; i >= min; i--){
      rangeArr.push(i);
    }
    let lcm = min;
  
    for(let j = 0; j < rangeArr.length; j++){
      let GCD = gcd(lcm, rangeArr[j])
      lcm = (lcm * rangeArr[j]) / GCD
    }
    return lcm
  
    function gcd(a, b){
      if(b === 0)
        return a;
      else
        return gcd(b, a % b)
    }
  
  }
  
  
  smallestCommons([1,5]);