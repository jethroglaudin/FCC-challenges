// Intermediate Algorithm Scripting: Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function destroyer(arr) {
  
  let args = Array.from(arguments);
  args.slice(1);
  let result = [];
  for (let num of arr){
    if (args.indexOf(num)=== -1){
      result.push(num);
    }
  }
  // Remove all the values
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);