/* In JavaScript, a promise is an object representing the eventual completion or failure of an asynchronous operation.
Resolve and Reject is two main pillers of promise object.

Promise object means it make promise that either it give the notification after resolve or give reject

Promises are used to handle asynchronous operations such as fetching data from a server, reading files,
or any other operation that takes time to complete.

Basically, promises used for to get notification when db connection successful i.e. many other operation.
*/

new Promise(function(resolve, reject){
    setTimeout(function(){
console.log("Promise consumed....");
resolve();
    }, 1000);
    
}).then(function(){
    console.log("Promise executed");
})

// Second promise for get the data
const PromiseTwo = new Promise(function(resolve, reject){
setTimeout(function(){
resolve({username:'Nikhil',Club:'Mancity'})
},1000)
}).then(function(Detail){
    console.log(Detail);
}).catch(function(){
    console.log("Error");
})

// Handling the error
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let flag = true;
        // If flag gets true then it runs the reject method otherwise it run the resolve method
        if(!flag){
            resolve({username:'Nikhil',Club:'Mancity'});
        }
        else{
            reject("Error:Failed to get data!!")
        }
    },1000);
})

PromiseThree.then((userDetails)=>{
// Print the object
console.log(userDetails);
}).then((userDetails)=>{
// print the object particular data
console.log(userDetails.Club);
}).catch((error)=>{
// Print the error if occured
console.log(error);
});