// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined


function addTogether() {

  // create a function that sums one or two arguments
  // if only one is provided argument then 
// check to see if argument being passed in is a number
function checkIfNumber(num){
  if(typeof(num) !== 'number'){
    return undefined;
  } else {
    return num;
  }
}
// create two variables and call the checkIfNumber function passing in the arguments
let a = checkIfNumber(arguments[0]);
let b = checkIfNumber(arguments[1]);

// if we have two params args first check paramaters to see if they are undefined. If not, then find the sum

if (arguments.length > 1){
  if(a == undefined || b == undefined){
    return undefined;
  } else {
    return a + b;
  }
  // if it's only 1 argument test and see if the first argument is a number
} else {
  if (a){
    return function(b) {
      if (checkIfNumber(b)){
        return a + b;
      } else {
        return undefined;
      }
    };
  }
}
  // return false;
}

addTogether(2,3);

