// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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

// DOM elements
const resultEl = documnent.getElementById("result");
const lengthEl = documnent.getElementById("length");
const uppercaseEl = documnent.getElementById("uppercase");
const lowercaseEl = documnent.getElementById("lowercase");
const numbersEl = documnent.getElementById("numbers");
const symbolsEl = documnent.getElementById("symbols");
const generateEl = documnent.getElementById("generate");
// const clipboardEl = documnent.getElementById("clipboard");


const randomFunc = {
    upper: getUpperCases,
    lower: getLowerCases,
    number: getNumbers,
    symbol: getSpecialCharacters
};
// Generate Event listen
generateEl.addEventListener("click", () => {
    const length = +lenghtEl.value;
    const hasUpper = uppercaseEl.checked;
    const haslower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;


    resultEl.innerText = generatePassword(
        hasUpper,
        haslower,
        hasNumber,
        hasSymbol,
        length
    );
});
// Generate Password Function 
function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    const typesCount = lower + upper + number + symbol + length;

}



// Generator Functions

function getUpperCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getLowerCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getSpecialCharacters() {
    const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}



}



//     getUpperCases: function () {
//         // return String.fromCharCode(Math.floor(Math.random() * 26 )+ 65);
//         return uppers[Math.floor(Math.random() * uppers.length)];
//     },

//     getLowerCases: function () {
//         // return String.fromCharCode(Math.floor(Math.random() * 26 )+ 97);
//         return lowers[Math.floor(Math.random() * lowers.length)];
//     },
//     getNumbers: function () {
//         // return String.fromCharCode(Math.floor(Math.random() * 10 )+ 48);
//         return numbs[Math.floor(Math.random() * numbs.length)];
//     },

//     getSpecialCharacters: function () {
//         return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
//     }

// };