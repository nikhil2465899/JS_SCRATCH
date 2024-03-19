// With ES6
// Parent class
class FourWheeler {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log('My name is ' + this.name);
    }
}

// Child class
class Ferrari extends FourWheeler {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    speed() {
        console.log('350km/h!');
    }
}

// Usage
let vehical = new Ferrari('SF', 'Red');
vehical.sayName(); 
vehical.speed();    

// 
