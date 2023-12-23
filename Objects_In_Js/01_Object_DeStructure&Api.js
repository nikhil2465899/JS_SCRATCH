/* De_Structure the object in javasript 
 Use of de_structure is simple when you have to print the object value then you used the objectname and place (.) 4
 and then access then value but using de_structre it get moer easy 
*/
// For example
const objestForDestructure = {
    id:1,
    name: "Nikhil"
}

// Basic way to print the object value 
console.log(objestForDestructure.id); // print the value 1

// use of de_structure is you dont need ot access using object name with (.)

// De_structure the object
const {id} = objestForDestructure;
console.log(id);

const{name} = objestForDestructure;
console.log(name);

