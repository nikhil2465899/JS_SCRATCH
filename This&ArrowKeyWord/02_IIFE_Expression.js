/*
IIFE stands for Immediately Invoked Function Expression.
It is a JavaScript design pattern where a function is defined and executed immediately after its creation.

description -> 
Some function has declared in local scope so util the global scope is not executing its local scope not executed 
so for executing the function that present in the local scope this concept get rise 

chatgpt explanation -> 
In JavaScript, variables created without being explicitly scoped within a function or block become part of the global scope
When multiple scripts or libraries are combined, variables with the same name can unintentionally overwrite each other or 
be accessed and modified unexpectedly,causing bugs or unexpected behaviors in the code.
Immediately Invoked Function Expressions (IIFEs) provide a way to encapsulate blocks of code within their own scope
*/

// Example
var globalFunction = ()=>{
    console.log("This is the global function");
    var localFunction = ()=>{
        console.log("This is the local function");
    }
}

// Calling local function its gives an error ->localFunction is not defined with iife reference
// localFunction(); 
var FunctionIIFE = (()=>{
    console.log("This is the IIFE function");
})();
// function run without even called due to IIFE
