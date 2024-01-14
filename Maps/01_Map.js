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
