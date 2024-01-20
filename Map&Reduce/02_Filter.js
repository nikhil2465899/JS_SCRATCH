/* 
In JavaScript, filter and reduce are higher-order functions that operate on arrays. 
They are used for manipulating and transforming arrays in different ways.

1. Filter 
2. Reduce

1. Filter -> 
    The filter method is used to create a new array with elements that pass a certain condition.
    It takes a callback function as an argument, and this function is applied to each element in the array. 
    If the callback returns true for an element, that element is included in the new array; otherwise, it is excluded.
*/

const filterObject = [0,1,2,3,4,5,6]

// Filter even number
const storedFilterEvenNumber = filterObject.filter(num=> num%2==0);

// Filter four multiple 
const storedFourMultiple = filterObject.filter(num => num %4 == 0);

// explicit return the filtered object explicit object.
const explicitReturnFilteredObject = filterObject.filter(num => {
    return num >5;
} )

// Implicit return the filtered object 
const implicitReturnFilteredObject = filterObject.filter(num => (num >5));

console.log(implicitReturnFilteredObject);


const xboxGame = [
{
    gameName:'Fifa24', support : 'Controller'
},
{
    gameName:'AssasinCreed', support : 'Controller'
},
{
    gameName:'Dota', support : 'keyboard'
},
{
    gameName:'Fifa24', support : 'Controller, keyboard'
}
];

const result = xboxGame.filter((game)=> game.support == "Controller");
console.log(result);
