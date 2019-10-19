// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.



function sumAll(arr) {

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let range = [];

    for(let i = min; i <= max; i++){
        range.push(i);
    }
    console.log(range)

    
 return range.reduce((prev, curr) => {
     return prev + curr;
 });
}
sumAll([1, 4]);

// T 2:14