function addTogether() {

    const checkValue = (arg) => {
        if (typeof arg === "number"){
            return arg;
        } else {
            return undefined;
        }
    }

    let arg1 = checkValue(arguments[0]);
    let arg2 = checkValue(arguments[1]);
    console.log(arg1, arg2);
  
}

addTogether(2, "3");
