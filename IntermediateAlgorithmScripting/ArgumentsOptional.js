function addTogether() {
//   let value = Array.from(arguments);
 

  function checkValue(value) {
    if (typeof value === "number") {
      return value;
    } else {
      return undefined;
    }
  }

  let argA = checkValue(arguments[0]);
  let argB = checkValue(arguments[1]);

  if (arguments.length > 1) {
    if (argA === undefined || argB === undefined) 
      return undefined;
     else 
      return argA + argB;
    
  } else {
    if (argA) {
      return function(argB) {
        if (checkValue(argB)) 
          return argA + argB;
         else 
          return undefined;    
      };
    }
  }
}

addTogether(2, "3");
