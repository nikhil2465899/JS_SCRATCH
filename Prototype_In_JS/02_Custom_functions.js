let stringOne= "HII       ";
console.log(stringOne.length);
// Automation in functions
Object.prototype.getLength = function(stringTwo){
    // So basically below method is gives true length but every time you need to write this code for get true length 
    // So we add the code in method that is created using prototype of main object
    // Now you have to use only getLength function it gives you true length
return stringTwo.trim().length;
}

// After use getLength function its return the true length 
console.log(getLength(stringOne));

// Try another example
let stringTwo = "Hello     ";
// get length without using custom method
console.log(stringTwo.length); // It gives the length 10
// Now use the custom function
console.log(getLength(stringTwo)); // It gives the length 5
