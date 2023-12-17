/* How to use date time in js*/

// Make an object of datetime
let dateForTest = new Date();

// Print the current date 
console.log(dateForTest); // It will print the date in system format -> 2023-12-17T13:51:58.259Z

// Print the current date in proper way
console.log(dateForTest.toString()); // It will print this -> Sun Dec 17 2023 19:21:58 GMT+0530 (India Standard Time)

/* There are to many ways to print the dates 
that is: */
dateForTest.toISOString();
dateForTest.toJSON();
dateForTest.toDateString();
dateForTest.toLocaleDateString();
dateForTest.toLocaleString();

// To print this above different format lets make an object 
let bunchOfDateFormat = {
    toISOString : dateForTest.toISOString(),
    toJSON :dateForTest.toJSON(),
    toDateString : dateForTest.toDateString(),
    toLocaleDateString : dateForTest.toLocaleDateString(),
    toLocaleString : dateForTest.toLocaleString()
}

// Print the result
console.log(bunchOfDateFormat);

// We can give the date information into the default constructor also for example,
// const customeDateExample = new Date("year","month number starts from 0 which is jan", "day in number","Time in hr","Time in min")
// So above is format now we see actual example

 dateForTest = new Date(2001,4,6,7,30);
 bunchOfDateFormat = {
    toISOString : dateForTest.toISOString(),
    toJSON :dateForTest.toJSON(),
    toDateString : dateForTest.toDateString(),
    toLocaleDateString : dateForTest.toLocaleDateString(),
    toLocaleString : dateForTest.toLocaleString()
}

// Print the result
console.log(bunchOfDateFormat); // It will print my birthdate according to provided details in default constructor