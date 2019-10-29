function sumFibs(num) {
  //   let fibArr = makeFibArr(num);

  //   let ans = fibArr.filter((elem) => {
  //       if(elem % 2 !== 0){
  //           return elem
  //       }
  //   })

  //   function makeFibArr(value) {
  //     let fibArr = [1, 1];

  //     while (true) {
  //       let secondLast = fibArr[fibArr.length - 2];
  //       let last = fibArr[fibArr.length - 1];
  //       let next = secondLast + last;
  //       if (next <= value) {
  //         fibArr.push(next);
  //       } else {
  //         return fibArr;
  //       }
  //     }
  //   }

  let fibArr = [1, 1];

  for (let i = 0; i < num; i++) {
    let secondToLast = fibArr[i];
    let last = fibArr[i + 1];
    let nextValue = secondToLast + last;
    if (nextValue > num) {
      break;
    } else {
      fibArr.push(nextValue);
    }
  }

  return fibArr.filter((item) => {
      if(item % 2 !== 0){
          return item
      }
  }).reduce((prev, curr) => {return prev + curr})

}
// 18:41

sumFibs(10);
