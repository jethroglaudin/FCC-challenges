
// Intermediate Algorithm Scripting: Pig Latin

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let firstWord=str[0];
  let vowels=/[aeiou]/gi;
  let newStr="";
  if(!str.match(vowels)){
    return str + 'ay';
  } else if(firstWord.match(vowels)){
     newStr= str+'way';

  }else{
    let indexOfVowel=str.indexOf(str.match(vowels)[0]);
    newStr=str.substr(indexOfVowel)+str.substr(0,indexOfVowel)+'ay';
  }
  return newStr;
}


translatePigLatin("consonant");