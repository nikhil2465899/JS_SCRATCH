const numberArray = [1,2,3,4,5,6];
const obj ={
    name:"nikhli"
}

// Using for of loop
for (const singleNumber of numberArray) {
 console.log(singleNumber);   
}

// Using for each loop
numberArray.forEach(element => {
console.log(element);
});

// For loo
for(let i=0;i<numberArray.length;i++){
    console.log(numberArray[i]);
}

for (const [name] in obj) {
    console.log([name])
}