/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indicesArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        // console.log(`Index J ${j}`)  
        let temp = nums[i] + nums[j];
        
        if (temp === target) {
          indicesArr.push(i, j);
        }
    }
  }

  console.log(indicesArr);
  return indicesArr;
};

twoSum([3, 2, 4], 6);
