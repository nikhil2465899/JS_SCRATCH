// Created class ( Name: brand )
class brand{
 constructor(name,rating){
this.name = name;
this.rating = rating;
 }
// Created method details to print some message using above variables
 Details(){
    console.log(`${this.name} brand rating is: ${this.rating}/5`);
 }
}

// Created object that used to print the methods of class.
// When you initailize the class object then you must use new keyword
let getDetails = new brand("Nike",5);
getDetails.Details();
let getDetailsNew = new brand("Pume",4.5)
getDetailsNew.Details();

// Using Function
function product(Name, rating, comfort){
this.name = Name;
this.rating = rating;
this.comfort = comfort
// When you return the property of object with this keyword then its not overwrite the object value when you creating at second time.
 return `${this.name},${this.rating}, ${this.comfort}`;
 //return this 
 // When you direct return the this keyword then its overwrite the object value when you creating at second time.
}

const FirstProductDetails = product("Puma",5,10);
//console.log(FirstProductDetails);
const SecondProductDetails = product("Nike",5,10);
console.log(FirstProductDetails);