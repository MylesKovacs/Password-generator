// Assignment code here
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
const upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]
//get options
function getOptions() {

    let length = parseInt(prompt("How long would you like your password to be? Please choose between 8 and 128."))
    if (isNaN(length) === true) {
        alert("Not a valid value")
    return;
    }
    if (length <= 8 || length >= 128) {
        alert("Not a valid value")
        return;
    }
    const hasLower = confirm("Would you like to include lowercase characters?");
    const hasUpper = confirm("Would you like to include uppercase characters?");
    const hasNumber = confirm("Would you like to include numbers?");
    const hasSymbol = confirm("Would you like to include symbols?");

    if (
        hasLower === false && 
        hasUpper === false &&
        hasNumber === false &&
        hasSymbol === false) {
        alert("You need at least one value")
        return;
        } 
    
    let userOptions = {
        length: length,
        hasLower: hasLower,
        hasUpper: hasUpper,
        hasNumber: hasNumber,
        hasSymbol: hasSymbol
    }
    return userOptions;
};

function randomize(arr) {
    let random1 = Math.floor(Math.random() * arr.length);
    let random1Result = arr[random1];
    return random1Result;
}

function generatePassword() {
    const options = getOptions();
    
    let trueResults = []
    let finalPassword = []
    let possibleResults = []
    

    if (options.hasSymbol) {
        possibleResults = possibleResults.concat(specialCharacters)
        trueResults.push(randomize(specialCharacters))
    }
    if (options.hasUpper) {
        possibleResults = possibleResults.concat(upperCasedCharacters)
        trueResults.push(randomize(upperCasedCharacters))
    }
    if (options.hasLower) {
        possibleResults = possibleResults.concat(lowerCasedCharacters)
        trueResults.push(randomize(lowerCasedCharacters))
    }
    if (options.hasNumber) {
        possibleResults = possibleResults.concat(numericCharacters)
        trueResults.push(randomize(numericCharacters))
    }

    for (let i=0; i < options.length; i++) {
        let possibleResult = randomize(possibleResults)
        trueResults.push(possibleResult)
    }
    for (let i=0; i < finalPassword.length; i++) {
        trueResults[i] = finalPassword[i]
    }
    return trueResults.join("")
}





//ask the user for filters
// find out what filters they want to use

// use the filters to sort out a length and features
// start generating the password 
// ** numbers. sybmols, lowercase, uppercase


//display code to the user 





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    password = generatePassword();
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
