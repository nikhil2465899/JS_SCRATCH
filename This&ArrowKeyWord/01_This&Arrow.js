/* 
keywords 
1] This ->
this keyword refers to the context within which a function is executed.
The value of this is determined by how a function is called,
and it can have different values depending on the invocation context.

2] Arrow -> 
Arrow key is used to define a function in less complex structure and shorter

*/
// This keyword example
const user={
    username:'Nikhil',
    id:'5',
    calling:function(){
        // Refer the variable inside the within function
        console.log(`${this.id}, id number of ${this.username}`);
    }
}
// Calling the variable that store the function 
user.calling();
console.log(this);

/*
Arrow function example
Arrow function has two types 
1] Parameterised function 
2] Non-parameterised function
*/
const parameterisedFunction  = (...name)=>{
console.log(`My name is ${name}`);
}
// Calling function
parameterisedFunction("Nikhil","Parth")

const nonParameterisedFunction = () => {
    console.log("My name is nik");
}

nonParameterisedFunction()