// Declaration of async function
async function getDetailsFromURL(){
try {
  let response = await fetch('https://api.github.com/users/hiteshchoudhary');
  let data = await response.json();
  return data;  
} catch (error) {
    return error;
}
}
getDetailsFromURL()
.then(data=>{
    console.log(data);
})
.catch(error =>{
    console.log(error);
})
