/*
 XMLHttpRequest
XMLHttpRequest (XHR) objects are used to interact with servers. 
You can retrieve data from a URL without having to do a full page refresh. 
This enables a Web page to update just part of a page without disrupting what the user is doing.

XMLHttpRequest: readyState property
Value 	State 	            Description
0 	    UNSENT 	            Client has been created. open() not called yet.
1 	    OPENED 	            open() has been called.
2 	    HEADERS_RECEIVED 	send() has been called, and headers and status are available.
3 	    LOADING 	        Downloading; responseText holds partial data.
4 	    DONE 	            The operation is complete.
*/

const getURLData = new XMLHttpRequest(); // Initialize the object
// Basically three stage that is important in XHR 
// XHR.open(), XHR.onreadystatechange(), XHR.send()
getURLData.open('GET', 'https://api.github.com/users/hiteshchoudhary');

getURLData.onreadystatechange = function () {
    if (getURLData.readyState === 1) {
        console.log(`${getURLData.readyState}] Opening the url...`);
    }
    if (getURLData.readyState === 2) {
        console.log(`${getURLData.readyState}] Send method has been called....`);
    }
    if (getURLData.readyState === 3) {
        console.log(`${getURLData.readyState}] Downloading the data and store it into response text`);
    }
    if (getURLData.readyState === 4) {
        console.log(`${getURLData.readyState}] Operation completed!!`);
        // So most of the url data is in the string format so first we have to convert it into JSON format
        const data = JSON.parse(this.responseText);
        CollectData(data);
    }

}
getURLData.send()

// Function that store the data that get form url..
function CollectData(data) {
    console.log(data);
    // Set the value for profile
    let SetTheProfliePic = document.getElementById("_profilePic");
    SetTheProfliePic.src = data.avatar_url;
    // Set the value for username
    let SetTheUsername = document.getElementById('_profileName');
    SetTheUsername.textContent = data.login;
}

