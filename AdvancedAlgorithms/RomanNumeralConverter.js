function convertToRoman(num) {
    // let romanNumerals = ['I', 'IV', 'V', 'IX', 'X', 'XL','L', 'XC', 'C', 'CD', 'D', 'CM', 'M']; 

    // let romanEquavalent = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let romanObj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let roman = ""

    for(let i in romanObj){
        while(num >= romanObj[i]){
            roman += i;
            num -= romanObj[i]
        }
    }
    return roman;

    

}
convertToRoman(36)

 