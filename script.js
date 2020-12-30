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