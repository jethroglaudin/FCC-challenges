function translatePigLatin(str) {
  let firstLetter = str[0];
  let vowels = /[aeiou]/;

  if (firstLetter.match(vowels)) {
    console.log(str.concat("way"));
    return str.concat("way");
  }
  else if (str.indexOf(str.match(vowels)) < 0) {
    console.log(str.concat("ay"));
    return str.concat("ay");
  } else {
    let index = str.indexOf(str.match(vowels));
    console.log(str.substr(index) + str.substr(0, index).concat("ay"));
    return str.substr(index) + str.substr(0, index).concat("ay");
  }
}

translatePigLatin("eight");
// 30:12
