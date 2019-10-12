function translatePigLatin(str) {
    let firstLetter = str[0];
    let vowels = /[aeiou]/;
    let pigStr;
  
    if (firstLetter.match(vowels)){
      return str.concat("way");
    } else if (!str.match(vowels)){
      return str.concat("ay")
    } else{
      let index = str.indexOf(str.match(vowels)[0]);
      return pigStr = str.substr(index) + str.substr(0, index).concat("ay");
  
    }
  }
  
  translatePigLatin("california");