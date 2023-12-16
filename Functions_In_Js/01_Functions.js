/* How to declare a function */
function FunctionName(){
   // Body of the function
   // Anything you want to return then 
   return // whatever you want
}

// void function -> means does't return any value or string
function myFunction(){
    console.log("first function");
}

// Print the result 
const result = myFunction();
console.log(result);

// Return type function -> Means return any value or string
function ReturnTypeFunction(){
    return "Nikhil";
}

// Print the return value
console.log(ReturnTypeFunction());

// Functions with parameter 
function parameterisedFunction(num1, num2){
    return num1*num2;
}

// Passing the arguments to the function 
/* So basic difference between parameter and argumets is when we declare a function that time we pass the value into round bracket
that value is known as the parameter. And at the time of calling function for execution then we pass the value to the funtion 
then that value is known as the argumets.
*/
const resultOfparameterisedFunction = parameterisedFunction(5,2);

// Print the result
console.log(resultOfparameterisedFunction);

/* Suppose some times we dont the size of parameter then js has one solution for that that is below 
-> End of the result it stores te value in array format.
*/
function multipleParameters(...multipleParameterAccept){
     return multipleParameterAccept;
}

// Print the value using array format
console.log(multipleParameters(1,2,3,4));

// Pass array and object to the funtion 
// First we pass the array 
/* suppose we print the second postion array element from given array then below process the used */
const arrayForTest = [100,200,300];

// Make functio to return particular value from array 
function returnElementUsingIndexOfArray(passArray){
    return passArray[1];
}

// Print the 1th postion element from array
console.log(returnElementUsingIndexOfArray(arrayForTest));

// Second we pass the object
const objectForTest = {
    name: "Nikhil",
    id: 5
}

// Make function for take the object as parameter
function returnObjectValue(passObject){
    return passObject.name;
}

// Print the name from object
console.log(returnObjectValue(objectForTest));