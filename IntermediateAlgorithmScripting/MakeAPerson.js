var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function() {
      return firstAndLast.split(" ")[0];
    };
    this.getLastName = function() {
      return firstAndLast.split(" ")[1];
    };
    this.setFirstName = function(first) {
      let oldFirstName = firstAndLast.split(" ")[0];
      firstAndLast = firstAndLast.replace(oldFirstName, first);
    };
    this.setLastName = function(last) {
      let oldLastName = firstAndLast.split(" ")[1];
      firstAndLast = firstAndLast.replace(oldLastName, last);
    };
    this.setFullName = function(firstAndLast2) {
      firstAndLast = firstAndLast2
    };
  };
var bob = new Person("Bob Ross");
bob.setFirstName("Dan");
bob.getFirstName();
bob.getFullName();
bob.getLastName();
bob.getFullName();
// bob.setLastName(last);
// bob.setFullName(firstAndLast);
