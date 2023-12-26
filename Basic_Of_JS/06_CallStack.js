/* 
***** Call stack *****
Step 1: When the code loads in memory, the global execution context gets pushed in the stack.
Step 2: The f2() function gets called, and the execution context of f2() gets pushed into the stack.
Step 3: The execution of f2() starts and during its execution, the f1() function gets called inside the f2() function.
        This causes the execution context of f1() to get pushed in the call stack.
Step 4: Now the f1() function starts executing. A new stack frame of the console.log() method will be pushed to the stack.
Step 5: When the console.log() method runs, it will print “Hi by f1” and then it will be popped from the stack. 
        The execution context will go back to the function and now there are no lines of code that remain in the f1() function,
        and as a result, it will be popped from the call stack.
Step 6: This will similarly happen with the console.log() method that prints the line “Hi by f2” and
        then finally the function f2() would finish and would be pushed off the stack.
*/

function first(){
    console.log("Print first function")
}

function second(){
    // Call first function inside the second function
    first();
    console.log("Print second function");
}

// Calling second function 
second();