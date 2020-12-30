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
  
    // setting a minimum count for all variables under length.
  var minimumCount = 0;


     // setting empty minimums for same variables. 

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

    // Password Generator functions 
  var functionArray = {

    getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

    // setting an empty string for a random character loop to be used
  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

// adds ths characters to the password 
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}