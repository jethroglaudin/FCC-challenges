// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let first = firstAndLast.split(' ')[0];
  let last = firstAndLast.split(' ')[1];
  this.getFirstName = function(){
    return first;
  };
  this.getLastName = function(){
    return last;
  };
  this.getFullName = function() {
    return first + ' ' + last;
  };
  this.setFirstName = function(firstName){
    first = firstName;
  };
  this.setLastName = function(lastName){
    last = lastName;
  };
  this.setFullName = function(firstAndLast){
    first = firstAndLast.split(' ')[0];
    last = firstAndLast.split(' ')[1];
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();