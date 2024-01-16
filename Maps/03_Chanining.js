/*
Chaining in JavaScript refers to the practice of chaining multiple method calls together in a single statement.
 This is commonly seen when working with methods that return an object, 
allowing you to call another method on the result of the previous one. Chaining can make code more concise and readable.
*/

const arrayOfNumbers = [1,2,3,4,5,6,7];

// store the result in object
const resultOfChaning = arrayOfNumbers
                        .map((num)=> num *2)
                        .filter((num)=>(num%3==0));
console.log(resultOfChaning);

// Second line of map store the value that multiple by 2 
// Third line filter the values that divided by 3 and finally store it into the "resulOfChaning" object.