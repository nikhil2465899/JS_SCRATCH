// Created class ( Name: brand )
function brand(Name, rating){
this.Name = Name;
this.rating = rating;
return this
}

let DetailsOfBrand = new brand("Ferrari",8);
console.log(DetailsOfBrand.constructor); // Gives the name of constructor

//Check DetailsOfBrand is instnace of brand class
console.log(DetailsOfBrand instanceof brand); // If it has then return true.
