/* Objects are mostly used in the get data from api or website.
  We can store multiple type data in the object like name as a string , age as a number etc.

  Basically object has two types singleton and literls
  singleton -> classes which can be instantiated once, and can be accessed globally
  literls  -> It is a syntax for creating an object in JavaScript that is composed of key-value pairs
*/

// Example of singleton
const singletonObject = new Object();
singletonObject.id ="1";
singletonObject.name = "Nikhil"
singletonObject.age="22"

console.log(singletonObject);

// Example of literals
const literalsObject = {
    "id":1,
    "Name" : "nikhil"
}
console.log(literalsObject);

/* Access object in two types */
// First way
console.log(literalsObject.Name);

// Second way
console.log(literalsObject["id"]);

/* We can nested the objects into objects*/
// For example 
const nestedObjectExample = {
  id:1,
  name:"Nikhil",
  Skills:{
    languages: ["C", "c++"],
    Database : "mongoDB"
  }
}
console.log(nestedObjectExample);
console.log(nestedObjectExample.Skills.languages);

// Combine two object in one like merge of an array
/* Syntax -> Object.assign(Target, source)*/
const resultOfCombineObj = Object.assign({},nestedObjectExample, singletonObject)
console.log(resultOfCombineObj);

/* Some another properties of object that is we can freeze the object
Now you make an object and you want the value doesn't change of that object then
we have to freeze the object with current value
*/
// For example
const freezeTheObject = {
  id :5,
  name: "nikhil"
}

// Freeze this object 
Object.freeze(freezeTheObject);
console.log(freezeTheObject); // { id: 5, name: 'nikhil' }

// Try to manipulate the object
freezeTheObject.id=6;
console.log(freezeTheObject.id); // Still print the id= 5;

// Return true becaue object is froozen 
console.log(Object.isFrozen());