/*
Reduce function in JavaScript, it is a higher-order function commonly used with arrays. 
The reduce function is used to iterate over an array and accumulate a single result.

We can use Reduce in following terms,
1. Summing or Accumulating Values:
2. Finding the Maximum or Minimum Value:
3. Flattening an Array of Arrays:
4. Transforming Data:
5. Grouping Values:
6. Calculating Statistics:
*/

const numberArray = [1,2,3,4,5,6,7]; // Numbers of array 

// Summing or Accumulating Values:
/* Here accumulator means addtion of values like 1 and 2 first then 3 and 3 then 6 and fours 
   Now here 3 and 6 are accumulator.
*/
const sumOfNumbers = numberArray.reduce((accumulator, currentValue)=>{
    console.log(`Accumulated value: ${accumulator} & Current value: ${currentValue}`);
    return accumulator+currentValue;
}, 0);

console.log("Sum of array elements:", sumOfNumbers);

// Find the maximum number from given array
const maxNumber = numberArray.reduce((maxNumber, currentValue)=> Math.max(maxNumber, currentValue),-Infinity);
console.log(`Max number is: ${maxNumber}`);

// Flattening an Array of Arrays
const subArrayElements = [[1,2],[3,4],[5,6],[7,8]];
const flattenedArray = subArrayElements.reduce((flattenedArray, currentArrayElement)=>flattenedArray.concat(currentArrayElement),[]);
console.log(`Flattened array : ${flattenedArray}`);

// Transforming the data
const transformedData = numberArray.reduce((dataForTransformation, numberElement)=>{
    dataForTransformation.push(numberElement*2);
    return dataForTransformation;
}, []);

console.log(`Transformed data: ${transformedData}`);