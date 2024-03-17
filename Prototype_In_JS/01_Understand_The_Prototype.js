function get(num) {
    return num*2;
}
get.power=2
console.log(get(2));
console.log(get.prototype);

/*
Notes: 
new keyword-> A new keyword initiates the creation of a new javascript object.

A Prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has acess to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor funtion has been called, 
if it doesn't return a non-primitive value ( object.Array, function, etc.), the newly created object is returned.
*/
function classOne(Name, Age){
    this.Name = Name;
    this.Age = Age;
}

// Here you can create a custom method for classone object
classOne.prototype.PrintName = function(){
console.log(this.Name);
};

classOne.prototype.PrintAge = function(){
    console.log(this.Age);
}

const obj1= new classOne("Nikhil",24);
obj1.PrintName();
obj1.PrintAge();

