var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var specialChar = ["!", "@", "#", "$", "&", "*", "_", "?"]
  var lowerCasedChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numberOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var upperCasedChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var generateBtn = document.querySelector("#generate");

function writePassword() {
  
  passwordText.value = password;

}


if (Number.isNaN(length)) {
  alert('Password length must be provided as a number');
  return null;
}

if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }


var hasSpecialCharacters = confirm(
  'Click OK to confirm including special characters.'
);

var hasNumericCharacters = confirm(
  'Click OK to confirm including numeric characters.'
);

var hasLowerCasedCharacters = confirm(
  'Click OK to confirm including lowercase characters.'
);

var hasUpperCasedCharacters = confirm(
  'Click OK to confirm including uppercase characters.'
);

if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false
) {
  alert('Must select at least one character type');
  return null;
}