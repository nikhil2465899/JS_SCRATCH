/* First "Map" is object 

 Map object to store key-value pairs. 
 A Map allows you to associate values with keys and is often used when you need to store
and retrieve data in a way that's more flexible than using plain objects.

*/

// Declare and initialize the map object
let mapObject  = new Map();

// So we need to add the value in that object then we have to use the set method
mapObject.set("1","Nikhil");
mapObject.set('2','Gurav');
console.log(mapObject.get('1')); // Get the value from object 

// Check the key is present in that object
console.log(mapObject.has('1')); // returns true

// Delete value from the map object
mapObject.delete('1');

// Print the all values from object using foreach loop
mapObject.forEach((value, key) =>{
console.log(`${key} - ${value}`);
});

// Another way to print the value of map object
for (const iterator of mapObject) {
 console.log(iterator);   
}


/*
Concept map:-
The .map() method is a versatile and powerful tool in JavaScript, 
often used for transforming data in arrays and creating new arrays based on the original data.

for example you have work on array and you need to change the array value without changing the original one 
then you can use the map method.

*/
const numberArray = [1,2,3,4,5,6];

// Implicit return 
const numbersObject = numberArray.map((Element)=> Element * 2);

// Explicit return 
const numbersObjectForExplicit = numberArray.map((element)=>{
return element*2;
})
console.log(numbersObjectForExplicit)