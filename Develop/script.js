// Assignment code here
var generatePasword = function() {
  var getLength = function() {
  // Determines the users desired password length
  var length = "";
  while (length === "" || length === null) {
    length = prompt("How long would you like your password to be? Please enter a value between 8 and 128")
  }
  console.log(length);
  return length;
};


  // Determines if password is using lowercase letters
  var lower = window.confirm("Would you like to include lowercase?")
    if (lowerConfirm) {
      //include lowercase
    }
    else {
      //exclude lowercase
    };
  // Determines if password is using uppercase letters
  var upper = window.confirm("Would you like to include uppercase?")
    if (upperConfirm) {
      //include uppercase
    }
    else {
      //exclude uppercase
    };


  // Determines if password is using numbers
  var numbers = window.confirm("Would you like to include numbers?")
    if (numbersConfirm) {
      //include numbers
    }
    else {
      //exclude numbers
    };


  // Determines if password is using special characters
  var special = window.confirm("Would you like to include special characters?") 
    if (specialConfirm) {
      //include special characters
    }
    else {
    //exclude special characters
    };
};

generatePassword();



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
