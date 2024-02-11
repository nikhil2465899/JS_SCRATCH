// Generate random color
const randomColor = function(){
    const hex= '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random() *16)];
    }
    return color;
};

let intervalId;
const StartColorChange = function(){
    if(!intervalId){
        // Set the interval for 1 second to change the background color
   intervalId = setInterval(changeBackgoundColor, 1000);
 }
 // Function for change the background color
 function changeBackgoundColor(){
     document.body.style.backgroundColor= randomColor();
 }
}
// Stop the color changer slideshow
const StopColorChange = function(){
    // Clear interval used for clear the time interval.
  clearInterval(intervalId);
  intervalId = null;
}

// Get the id and set event after clicking the button
document.getElementById('#StartButton').addEventListener('click', StartColorChange);
document.getElementById('#StopButton').addEventListener('click', StopColorChange);

