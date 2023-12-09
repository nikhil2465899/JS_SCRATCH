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
