/* 
Callback -> 
 In java script, Callback is known as pass the function as an argument in another function 

Call back function, you can used this type of function whether you want like for clicklistner,
some execute on timeout i.e.
*/
// Here we callback our function of addition 
const Mainfunction = (num1, num2, AddtionOfTwoNumber)=>{
    return AddtionOfTwoNumber(num1,num2);
}

// This function make addition of two numbers
const Addition = (a, b)=>(a+b);

// for making code small we can use this type also to store result in result variable
// When you use this line of code then above line of code will not use so you can save space.
const secondResult = Mainfunction(4,3,function(a,b){
    return a+b;
})

// This object stores the result
const result = Mainfunction(5,2, Addition); // Here we calling our main function as arguments with our addition function.

console.log("Addition of two number:",result);
console.log("Addtion of two number is :", secondResult);
