const footballStuds ={
    brand:"Puma",
    category:"Future Z 1.2 FG",
    size: 7.5
}

console.log(footballStuds);

console.log(Object.getOwnPropertyDescriptor(footballStuds, "brand"));
Object.defineProperty(footballStuds, "brand", {
    writable:false,
    configurable:false
})

footballStuds.brand="Nike";
console.log(footballStuds);