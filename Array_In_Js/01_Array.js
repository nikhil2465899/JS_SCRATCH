// Basic declaration of array in javascript
// Array strores the multiple type of data in javascript with dynamic size no need to mentioned the size its automatically upgrade.

// Without creating object direct declaration.
let stringValueArray = ["Nikhil", "Gurav"];

// With creating object 
/* There is two method in creating object  
1. Put value in the constructor 
2. using object methods like (push, pop, etc)
*/

let numberArray = new Array();
numberArray.push(1)
console.log(numberArray);

let numberArray2 = new Array(1,2,3);
console.log(numberArray2);

/* Slice and splice methods in javascript

Basic differece between slice and splice ->
In slice it give you element from between entered range from base array without manupulating the orginal array.
In splice it give you element from between entered range from base array with manupalatin the original array.

In short -> slice give value without removing original elements from array.
        -> splice give value but remove original elements from array.
*/

let arrayForSlice = [1, 2, 3, 4, 5];

// Take one array for stroe the slice applied method
const resultOfSlice = arrayForSlice.slice(1, 3);
console.log(resultOfSlice);

// Take one array for stroe the splice applied method
const resultOfSplice = arrayForSlice.splice(1, 3);
console.log(resultOfSplice);

// Sort the array
const sortedArray = arrayForSlice.sort((a,b)=>a-b);
console.log(sortedArray);

// Shift and unshift the array element
/* Shift ->  method returns the value that was "shifted out" 
   unShift -> method that add the new element in begining of array
*/

let arrayForShift =  ["adidas", "nike" , "puma"]
console.log(arrayForShift);
// Shift the element from array and store the shifted array element into below variable
 let shiftedElement = arrayForShift.shift();
console.log(shiftedElement);

// Now unshift the array element means replace new element at the first index.
arrayForShift.unshift("Benetton");
console.log(arrayForShift);

// Merge two array
let arrayExampleOneForMerge = ["Adidas","nike","Puma"];
let arrayExampleTwoForMerge = ["Benetton", "Allen Solly"]

let resultOfMergeArray = Array.prototype.concat(arrayExampleOneForMerge, arrayExampleTwoForMerge);
console.log(resultOfMergeArray);

// In array you may get one fuction that is prototype thats contain various methods implement with array.

const arrayForReverse = [1,2,3,4,5];

// For reverse the array use predefined funtion array.reverse()
const resultantArray = arrayForReverse.reverse()

/* Some ways to print the array element foreach and direct in array format */
// Foreach way
resultantArray.forEach(element => {
        console.log(element);
});

// Direct way 
console.log(resultantArray);