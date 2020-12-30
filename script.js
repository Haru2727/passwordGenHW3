// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special Characters 
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompts to show after clicking generate password button

function generatePassword() {

    var passwordLength = prompt("Please pick the number of characters between 8 and 128 for your new password.");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8-128 characters.");
    }

    if (passwordLength >= 8 && passwordLength <= 128) {


        var upperCase = confirm("Do you want uppercases in your new password?");

        var lowerCase = confirm("Do you want lowercases in your new password?");

        var numbers = confirm("Do you want numbers in your new password?");

        var special = confirm("Do you want special characters in your new password?");
    }

    if (upperCase != true && lowerCase != true && numbers != true && special != true) {
        alert("You must select at least one character type!");
    }
}
console.log(generatePassword)

// setting a minimum count for all variables under length.
var minCount = 0;

// setting empty minimums for same variables. 
var minUpperCase = "";
var minLowerCase = "";
var minNumbers = "";
var minSpecial = "";

// Password Generator functions 
var genArray = {
    getUppercase: function(){
        return String.fromCharCode(Math.floor(Math.random()* 26 + 65));
    },
    getLowerCase: function(){
        return String.fromCharCode(Math.floor(Math.random() * 28 + 97));
    },
    getNumbers: function(){
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getSpecialCharacters: function(){
        return String.fromCharCode[Math.floor(Math.random() * specialCharacters.length)]
    },
};

// Using selected password criteria and empty minimums from above to input into password
if (upperCase === true){
    minUpperCase = genArray.getUppercase();
    minCount++;
}
if (lowerCase === true){
    minLowerCase = genArray.getLowerCase();
    minCount++;
}
if (numbers === true){
    minNumbers = genArray.getNumbers();
    minCount++;
}
if (special === true){
    minSpecail = genArray.getSpecialCharacters();
    minCount++;
}

// setting an empty string for a random character loop to be used 
var randomPassGen = "";

for (let i = 0; i <parseInt(passwordLength)-minCount); i++){
    var randomNum = Math.floor(Math.random() * 4);
    randomPassGen += randomNum;
}

