// Intermediate Algorithm Scripting: Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = [];

  for (var x = min; x <= max; x++){
    range.push(x);
  }

  var a = Math.abs(range[0]);
  for (var i = 1; i < range.length; i++){
    var b = Math.abs(range[i]);
    var c = a;

    while(a && b) {
      if (a > b){
        a %=b;
      } else {
        b %= a;
      }
    }
    a = Math.abs(c * range[i] / (a + b));
  }
  return a;
}


smallestCommons([1,5]);