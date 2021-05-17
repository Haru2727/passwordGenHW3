// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Constants 
const specialCharacters = "!#$%&'()*+,-.:;<=>?@[^_`{|}~";
const uppers = "QWERTYASDFGHZXCVBNUIOPJKLNM";
const lowers = "qwertyasdfghzxcvbnuiopjklnm";
const numbs = "0123456789"

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts that come up after you click generate password
function generatePassword() {
    var passwordLength = prompt("Please pick the number of characters between 8 and 128 for your new password.");
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8-128 characters.");
    }

    if (passwordLength >= 8 && passwordLength <= 128) {


        var upperCases = confirm("Do you want uppercases in your new password?");

        var lowerCases = confirm("Do you want lowercases in your new password?");

        var numbers = confirm("Do you want numbers in your new password?");

        var special = confirm("Do you want special characters in your new password?");
    }

    if (upperCases != true && lowerCases != true && numbers != true && special != true) {
        alert("You must select at least one character type!");
    }

    console.log(passwordLength)
    // setting a minimum count for all variables under length.
    var minimumCount = 0;


    // setting empty minimums for same variables. 

    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";
    var minPasswordLength = "";

    // Password Generator functions 
    // replaced the fromCharCode method to check if that was my issue, it was not.  
    var functionGenArray = {

        getUpperCases: function () {
            // return String.fromCharCode(Math.floor(Math.random() * 26 )+ 65);
            return uppers[Math.floor(Math.random() * uppers.length)];
        },

        getLowerCases: function () {
            // return String.fromCharCode(Math.floor(Math.random() * 26 )+ 97);
            return lowers[Math.floor(Math.random() * lowers.length)];
        },
        getNumbers: function () {
            // return String.fromCharCode(Math.floor(Math.random() * 10 )+ 48);
            return numbs[Math.floor(Math.random() * numbs.length)];
        },

        getSpecialCharacters: function () {
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }

    };

    // Checks to make sure user selected ok for all and uses empty minimums from above

  if (upperCases === true) {
        minimumUpperCases = functionGenArray.getUpperCases();
        minimumCount++;

    }

  if (lowerCases === true) {
        minimumLowerCases = functionGenArray.getLowerCases();
        minimumCount++;

    }

    if (numbers === true) {
        minimumNumbers = functionGenArray.getNumbers();
        minimumCount++;

    }

  if (special === true) {
        minimumSpecialCharacters = functionGenArray.getSpecialCharacters();
        minimumCount++;

    }

    // setting an empty string for a random character loop to be used
    var randomPasswordGenerated = "";
    // this for loop is working but not to the standards I need it too.
    // I cannot make it repeat to fill out the length of password the user chooses
    for ( i = 0; i < (isNaN(passwordLength) - minimumCount); i ++) {
    //    var randomNumberPicked = passwordLength.charAt(Math.floor(Math.random() * passwordLength));
    
    var randomNumberPicked = Math.floor(Math.random() * 4);

        randomPasswordGenerated += randomNumberPicked;

    }
    console.log(i)
    // adds ths characters to the password 
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumSpecialCharacters;

    return randomPasswordGenerated;

}