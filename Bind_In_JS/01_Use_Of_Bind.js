class React{
    constructor(){
        this.name= "React";
        this.server= "https://localhost:300"
    
        // Get the button element from html page
        let button  = document.getElementById('ReactButton');
        button.addEventListener('click', this.AfterButtonClick.bind(this)); // Bind react class with the button for get the property after button hit
    }

    // Create on method for raise the event after button click
    AfterButtonClick(){
        console.log("Button is clicked");
        console.log(`Server name: ${this.server}`);
    }
}

const getReactInfo = new React();