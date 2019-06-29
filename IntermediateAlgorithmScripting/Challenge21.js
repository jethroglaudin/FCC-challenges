
// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 

  for (let i in arr) {
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM))
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = orbitalPeriod
  }
  return arr;



  // return arr.reduce((acc, obj) => {
  //   let orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3)/GM))
  //   acc.push({name: obj.name, orbitalPeriod});
  //   return acc;

  // }, [])





}



orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);