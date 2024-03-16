// Created class ( Name: brand )
function brand(Name, rating){
this.Name = Name;
this.rating = rating;
return this
}

let DeatilsOfBrand = new brand("Ferrari",8);
console.log(DeatilsOfBrand.constructor); // Gives the name of constructor

//Check DetailsOfBrand is instnace of brand class
console.log(DeatilsOfBrand instanceof brand); // If it has then return true.
