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

const details = new Details("Nikhli", 23);
console.log(details.Name);