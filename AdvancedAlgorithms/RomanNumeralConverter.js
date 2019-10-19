function convertToRoman(num) {
    let romanNumerals = ['I', 'IV', 'V', 'IX', 'X', 'XL','L', 'XC', 'C', 'CD', 'D', 'CM', 'M']; 
<<<<<<< HEAD
    let romanEquavalent = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let value = [];
=======
    let romanEquavalent = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 100];

    let value = null;
>>>>>>> Version2

    let romanLength = romanNumerals.length;
    let romanDec = romanEquavalent.length;

<<<<<<< HEAD
    // console.log("romanNumeral array length: " + romanLength + "");
    // console.log("romanEqualvalent array length: " + romanDec + "");
=======
    console.log("romanNumeral array length: " + romanLength + "");
    console.log("romanEqualvalent array length: " + romanLength + "");
>>>>>>> Version2


    // check the number based on the roman Equivalent
    // Try to find where the value is nearest. so if we get 30 get 5

<<<<<<< HEAD
   

    
    
     
=======
    // for(let i = 0; i <= romanEquavalent.length; i++){
    //     if (num == romanEquavalent[i]){
    //         value = romanEquavalent[i];
    //     }
    // }

    // console.log(value);
>>>>>>> Version2

     return num;

}

<<<<<<< HEAD
convertToRoman(50);

=======
convertToRoman(40);

// function createNumArray(value) {
//     let arr = []
//     for (let a = 1; a <= value; a++) {
//         arr.push(a)
//     }
//     return arr;
    
// }
>>>>>>> Version2
