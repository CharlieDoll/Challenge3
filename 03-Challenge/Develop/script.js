// Assignment Code
var password=document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var specialChars = "!@£$%&*?=+-_"
  var length = "8 < 128"
  var password = ""
  passwordText.value = password;


  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
   }

   document.querySelector("password").value = password;
}

export const generatePassword = (length, options = {}) => {
  return "";
};

const options = {
  lowercaseLetters: true,
  uppercaseLetters: true,
  numbers: true,
  specialChars: true,
};
const optionsKeysLength = Object.keys(options).length;

if (optionsKeysLength === 0) {
  throw new Error("PLEASE_CHOOSE_AT_LEAST_ONE_CHARACTER_SET");
}
if (optionsKeysLength > length) {
  throw new Error("MINIMUM_8_CHARACTERS_REQUIRED");

  const randomChar = (string) => string[Math.floor(Math.random() * string.length)];
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.commandID("copy");  
}
// Add event listener to generate button
querySelector.addEventListener("click", writePassword);