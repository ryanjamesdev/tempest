// The setup

// This is a function to convert a string input into an array of integers
function stringConvert(string) {
    var myArray = string.split(" ");
    for (var i=0; i < myArray.length; i++) {
        myArray[i] = parseInt(myArray[i], 10); 
    };
    return myArray;
};



// This function adds the sum of the two largest integers of an array and returns the value
function topTwoInt(theArray) {
    var intArray = theArray;
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
    answer = highestInt + secondHighestInt;
    return answer;
};

// this function is used to ensure the user didn't enter any letters
function getArray() {
    var alphaExp = /^[a-zA-Z]+$/;


// This is the program

// This stores the arrayField input as a variable
var arrayField = document.getElementById('arrayField').value;

// If the string has any letters in it, fail;
if (arrayField.match(alphaExp)) {
    var raiseError = document.querySelector('h5');
    raiseError.textContent = 'No not letters! We want numbers!!';
} else {
    // If the string is only numbers than where going to convert it into an array of integers
    // and check to see if they entered atleast two numbers
    // If they didn't were going to tell them to enter more!
    stringConvert(arrayField);
    if (stringConvert(arrayField).length < 2) {
        var raiseError = document.querySelector('h5');
        raiseError.textContent = 'Please enter atleast two numbers seperated by commas for us to add!'
    } else {
        // if the array is all integers and is atleast two integers long
        // We'll make sure to clear any previous errors from the screen
        var raiseError = document.querySelector('h5');
        raiseError.textContent = '';
        // then we are going to run the program to get the two largest numbers
        topTwoInt(stringConvert(arrayField));
        // Then tell the user what their two biggest numbers are!
        var myHeading = document.querySelector('h2');
        myHeading.textContent = "The sum of your two biggest numbers is: " + topTwoInt(stringConvert(arrayField)) ;
        }
    }
};

// use an eventlistener for the event (This is where the magic happens)
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getArray, false);

