/* Globle scope means the variable declared in outside the function */
// For example
var globalVariable = 25; // Global variable 

if(true){
    var globalVariable = 50; // Local variable
    let globalVariable2= 45;
}

// Print the value 50 becuare using var not properly define the scope of variable
console.log(globalVariable);

let globalVariable3= 50;
if(true){ 
    let globalVariable3 = 80;
}

// Print 50 because using let keyword scope of variable properly defined
console.log(globalVariable3);