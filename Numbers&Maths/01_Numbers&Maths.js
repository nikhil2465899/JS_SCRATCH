/* In js number are declared in below format
const numberVariable = new Number();
*/

// Basic initialization of number value 
let numberOne = 1;
console.log(numberOne);

// Now set the value to numberVariable
numberVariable = new Number(100); 

// Print the value in prototype format hence print the result like [Number : 100]
console.log(numberVariable);

// For print the value just typeCast into string that prototype format
// For example :
console.log(numberVariable.toString())

// Some features of numer we just see for kind of information
// Print the round up value 
let numberTwo = 125.24;
console.log(numberTwo); // Print the base value
console.log(numberTwo.toPrecision(3)); // Print the round up value upto given digit (125)

let numberThree = 125.65;
console.log(numberThree.toPrecision(4)); // Print the round up value upto given digit (125.7)

// We can convert the long value by adding comma 
// In js to add comma between value had one function that name is (.toLocaleString(country-code))

let numberFour = 1000000;

// First we convert into us
console.log(numberFour.toLocaleString());s