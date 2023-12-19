// Assignment Code
var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var specialChar = ["!", "@", "#", "$", "&", "*", "_", "?"]
  var lowerCasedChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numberOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var upperCasedChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  passwordText.value = password;

}


if (Number.isNaN(length)) {
  alert('Password length must be provided as a number');
  return null;
}

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

function getPassword() {
  var length = parseInt( prompt("Password generated will be between 8 and 128 character."),);
  var hasSpecialChar = confirm(
    'Click OK to confirm');
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let writePassword = prompt("Do you want to use Special Character's?");
switch(specialChar) {
  case "yes":
    text = "Sure thing!";
    break;
    case "no":
      text = "No problem";


}