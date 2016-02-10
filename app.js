// this function is used to ensure the user didn't enter any letters
function getArray() {
    var alphaExp = /^[a-zA-Z]+$/; 


// This function adds the sum of the two largest numbers and returns the value
function topTwoInt(intArray) {
    var highestInt = -Infinity;
    var secondHighestInt = -Infinity;
    var answer = 0;
    //Loop through the array
    for (var i=0; i < intArray.length; i++) {
        //grab the biggest int and assign it to the highestInt variable;
        if (intArray[i] > highestInt) {
            secondHighestInt = highestInt;
            highestInt = intArray[i]; 
        }
        //If the next number is equal too highestInt or greater than secondHighestInt
        //Make that number become the new secondHighestInt
        else if(intArray[i] === highestInt || intArray[i] > secondHighestInt) {
            secondHighestInt = intArray[i];
        }
    }
    return highestInt + secondHighestInt; 
};

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
        var array = JSON.parse("[" + arrayField + "]");
        // When the user enters a list of numbers, run the topTwoInt function.
        topTwoInt(arrayField);
        //Make any errors go away
        var raiseError = document.querySelector('h5');
        raiseError.textContent = '';

        var myHeading = document.querySelector('h2');
        myHeading.textContent = "The sum of your two biggest numbers is: " + topTwoInt(arrayField);


            
        // Then we share the result with the user by updating the browser
        // var myHeading = document.querySelector('h2');
        // myHeading.textContent = "The sum of your two biggest numbers is: " + answer;
        // Like a good student, it's important to show your work
        // var showYourWork = document.querySelector('h3');
        // showYourWork.textContent = b1 + " + " + b2 + " = " + result;
        }
    }
};

// use an eventlistener for the event (This is where the magic happens)
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getArray, false);

