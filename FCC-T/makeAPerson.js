var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly   
  
    this.getFullName = function() {
      return firstAndLast
    };
    this.getFirstName = function(){
        return firstAndLast.split(" ")[0]
    }
    this.getLastName = function() {
        return firstAndLast.split(" ")[1]
    }
    this.setFirstName = function(firstName) {
        let oldFirstName = firstAndLast.split(" ")[0];
       firstAndLast = firstAndLast.replace(oldFirstName, firstName);
    
    }
    this.setLastName = function(lastName) {
        let oldLastName = firstAndLast.split(" ")[1];
        firstAndLast = firstAndLast.replace(oldLastName, lastName);
        
    }
    this.setFullName = function(firstAndLast2) {
        firstAndLast = firstAndLast2;
    }
  };
  var bob = new Person('Bob Ross');
  // T 22:28

  