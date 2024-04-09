class Details{
    constructor(Name, Age){
        //Below details set by the constructor.
        this.Name = Name;
        this.Age = Age;
    }

    set Name(name){
        // Name set by setter method
        this._name = name;
    }

    get Name(){
        return `Name is: ${this._name}`
    }
    /*Note -: If you set the details by getter and setter method with same variables then error occured of stack overflow
              because there at a time constructor and setter method set the details.
      */  
}

class Details2{
    constructor(Name, Surname){
        this.Name = Name;
        this.Surname = Surname;
    }

    set Name(_name){
        this._name = _name;
    }
    set Surname(_Surname){
        this._Surname = _Surname;
    }

    get Name(){
        return `Name is:${this._name}`;
    }
    get Surname(){
        return `Surname is:${this._Surname}`;
    }
}
const details = new Details("Nikhli", 23);
const details2 = new Details2("Nik","Gurav");
console.log(details.Name);

console.log(details2.Name, details2.Surname);