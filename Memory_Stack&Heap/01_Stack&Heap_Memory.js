/*
Memory type two: 
1. Stack 
3. Heap

I] Stack -> all primitive type variable stored in stack
II] Heap -> all non-primitive type variable store in heap.

*/

// Take one example stack memory
let variableOne = "Nikhil";
let variableTwo = variableOne;
variableTwo = "Gurav";

/*
So in below result variable one and two stored in stack memory cause its make with primitive datatype.

variableOne set with "Nikhil" and variableTwo first get value as referecing two frist variabe.
so in stack first create one memory for variableOne and when variableTwo get the reference of variableOne
then it get the copy of that variable one from stack memory and create memory for variableTwo.
now , when you change the value of varibleTwo then it change only copy value not original one .

*/

console.log(variableOne); // Print the "Nikhil"
console.log(variableTwo); // Print the "Gurav"

// Take one example of heap memory
let userOneDetails ={
    Name :"Nikhil",
    Age: 22
}

let userTwoDetails = userOneDetails;
/*
So in below reuslt first variable store the user details and that data stored in the heap memory becuase the variale type is non-primitive

Now, userTwoDetails get the value by referencing the userOneDetails but here when userTwoDetails get value by referencing the userOneDetails
then it not make the copy and provide to the userTwoDetails instead of userTwoDetails only refer that userOneDetails heapMemory.
*/

console.log(userOneDetails);
console.log(userTwoDetails);

// There is one twist in heap memory when you change the value from that variable then it also get changed in referencing value.

// For exampel, Change the value of age
userTwoDetails.Age = 23;

// Now it get changed in both of variable
console.log(userOneDetails);
console.log(userTwoDetails);