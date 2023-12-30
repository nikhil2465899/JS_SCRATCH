// Hoisting in js 
/* 

Hoisting is a JavaScript mechanism where variable and function 
declarations are moved to the top of their containing scope during the compilation phase, 
before the code is executed. 

In JavaScript, when you declare a variable or function using var, let, or const, 
the declaration is processed before the code execution. However, 
only the declarations are hoisted, not the initializations or assignments.

*/
// For example declare the variable 
var hoistVariable;

// Now print that variable before assign the value
console.log(hoistVariable); 
/* It gives an undefined because variable declarations are hoisted to the top of their scope
However, only the declaration is hoisted, not the initialization (= 10). So when the first console.log is encountered,
 myVar exists in the scope but hasn't been assigned a value yet, resulting in undefined.
*/

// Now declare the variable 
hoistVariable = 10;
// Now print the variable 
console.log(hoistVariable);

/**
 But it only gives undefined for the var scope and for let and const it gives the error
 */

// Print the variable and it gives the error
console.log(hoistVariableForletNDconst);
let hoistVariableForletNDconst;

// Now declare the variable 
hoistVariableForletNDconst = 10;
// Now print the variable 
console.log(hoistVariableForletNDconst);

// This is also working for function same as variable 
/*
Here is twist when you declare function like this
function functioName() and hoist above the scope then it will gives you the data that holds functioon itself.
but,
When you declare function like this
var functionData = function (){} and hoist above the scope then it will gives you an error
*/

// call the function before decalre it.
HoistFunction(); // It will print (its print)
function HoistFunction(){
    console.log("its print");
}


// now call the function before declare it but using var variable
functionContent()

// Below is expression function
var functionContent = function(){
    console.log("Its not print");
}
