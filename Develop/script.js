// Assignment code here
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}
var generateFilters = function() { 
  //debugger;
  const lengthTest = +prompt("How long would you like your password? (must be between 8 and 128 characers");
  const length = parseInt(lengthTest);
  const hasLower = window.confirm("Would you like to include lowercase characters?");
  const hasUpper = window.confirm("Would you like to include uppercase characters?");
  const hasNumber = window.confirm("Would you like to include numbers?");
  const hasSymbol = window.confirm("Would you like to include symbols?")

  password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
};


generatePassword = function(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item =>
Object.values(item)[0]);

    // No selected type
    if(typesCount === 0) {
      return '';
    }

    // Loop it
    for(let i=0; i<length; i+typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName] ();
      });
    }
    const finalPassword = generatedPassword.slice(0, length);

    console.log(finalPassword);
    return finalPassword;
}


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generateFilters()
  var passwordText = document.querySelector("#password");
  password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
