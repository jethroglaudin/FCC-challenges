// Intermediate Algorithm Scripting: Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = arr.reduce((acc, next) =>{
    if (Array.isArray(next)){
      return steamrollArray(acc.concat(next));
    } else {
      return acc.concat(next);
    }
  }, []);
  return newArr;
}



steamrollArray([1, [2], [3, [[4]]]]);