// This function reverses the order of the array and places the biggest numbers first
function sortNumber(a,b) {
    		return b - a;
    	}


// the function which handles the input and returns the sum of the two largest numbers
function getArray() {
    var alphaExp = /^[a-zA-Z]+$/; 

// This function takes the array, orders it, adds the sum of the two largest numbers and returns the value
function sumOf(x) {
    // when the user adds atleast two numbers add the two biggest and return the value
    array.sort(sortNumber);
    // Then we add the two biggest numbers of the array and save it to the result variable.
    var result = array[0] + array[1];
    // Then we share the result with the user by updating the browser
    var myHeading = document.querySelector('h2');
    myHeading.textContent = "The sum of your two biggest numbers is: " + result;
    // Like a good student, it's important to show your work
    var showYourWork = document.querySelector('h3');
    showYourWork.textContent = array[0] + " + " + array[1] + " = " + result;
    //Make the error go away
    var raiseError = document.querySelector('h5');
    raiseError.textContent = '';
}

	// This grabs the value of the input
    var arrayField = document.getElementById('arrayField').value;

    if (arrayField.match(alphaExp)) {
        // Fail if user enters letters
        var raiseError = document.querySelector('h5');
        raiseError.textContent = 'No not letters! We want numbers!!';
    } else {
        var array = JSON.parse("[" + arrayField + "]");
        if (arrayField.length < 2) {
            // If the user enters only 1 number, tell them to enter more!
            var raiseError = document.querySelector('h5');
            raiseError.textContent = 'Please enter atleast two numbers seperated by commas for us to add!'
        } else {
            // When the user enters a list of numbers, run the sumOf function.
            sumOf(arrayField);
        }
    }
};

// use an eventlistener for the event (This is where the magic happens)
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getArray, false);

