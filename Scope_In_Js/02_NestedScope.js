/* Nested scope means accessing the variable from nested functions */
// For example
function one(){
    let variableFirstMethod = "Nikhil";
    function two(){
        let variableSecondMethod = "Gurav";
        console.log(variableFirstMethod +" "+  variableSecondMethod); 
        /* Here we can access the first method variable because its scope for whole block and block contain functions 
        then it aslo accessible for that functjion also */
    }
    try {
        console.log(variableSecondMethod);
    } catch (error) {
        console.log("You Cannot access the variableSecondMethod because its scope limited for its own method two()");
    }

    // Calling method two
    two(); // Print the first method and second method variable value as per the log statement in method two
}

// Calling method one
one();