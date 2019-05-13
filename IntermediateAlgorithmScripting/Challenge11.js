// Intermediate Algorithm Scripting: Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function convertHTML(str) {
  // &colon;&rpar;

let entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '\"': '&quot;',
  '\'': '&apos;'

};
  return str.split('').map(function(char){
    return entities[char] || char;
  }).join('');
}

convertHTML("Dolce & Gabbana");