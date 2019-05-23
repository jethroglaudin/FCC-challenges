// Basic Algorithm Scripting: Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  let i = 0;
  while(i < arr.length){
    arr2.push(arr.slice(i, i+size));
    i+= size;
  }
  // Break it up.
  return arr2;
 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);