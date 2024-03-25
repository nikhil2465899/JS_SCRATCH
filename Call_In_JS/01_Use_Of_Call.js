function one(parameter1){
    this.parameter1 = parameter1;
}

function Two(parameter1, parameter2, parameter3){
    // Call method is used for call the function for excute.
    one.call(this, parameter1); // This keyword take reference from function one 
    this.parameter2= parameter2;
    this.parameter3 = parameter3;
}

const objClassTwo = new Two(1,2,3);
console.log(objClassTwo);