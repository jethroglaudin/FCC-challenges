function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

//   for (let i in arr) {
//     let avgAlt = arr[i].avgAlt;
//     let orbitalPeriod = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM)
//     );
//     delete arr[i].avgAlt;
//     arr[i].orbitalPeriod = orbitalPeriod;
//   }

// return arr;

  return arr.map((elem) => {
      return {name: elem.name, orbitalPeriod: Math.round(
          2 * Math.PI * Math.sqrt(Math.pow(earthRadius + elem.avgAlt, 3) / GM))}
  })
}

orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
