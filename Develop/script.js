// Assignment code here
var generatePasword = function() {
  // Determines the users desired password length
  var length = window.prompt("How long would you like your password? (at least 8 and no more than 128)");
    console.log(length);


  // Determines if password is using lowercase letters
  var lower = window.confirm("Would you like to include lowercase?")
    console.log(lower);


  // Determines if password is using uppercase letters
  var upper = window.confirm("Would you like to include uppercase?")
    console.log(upper);


  // Determines if password is using numbers
  var numbers = window.confirm("Would you like to include numbers?")
    console.log(numbers);

  // Determines if password is using special characters
  var special = window.confirm("Would you like to include special characters?") 
    console.log(special);
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
