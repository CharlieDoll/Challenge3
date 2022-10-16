// Assignment Code

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1" ,"2" ,"3"  ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"0"];
var specialChars = ["!", "@", "£", "$", "%", "&", "*", "?", "=", "+", "-", "_"];
var passwordLength = [8 > 128];
const generatePassword = (length, options = {}) => {
 
 
  // const options = {
  //   lowercaseLetters: true,
  //   uppercaseLetters: true,
  //   numbers: true,
  //   specialChars: true,
  // };
  // const optionsKeysLength = Object.keys(options).length;

var finalPasswordCharacter = []

  var passwordLength = prompt(
    "Please choose a password length between 8 and 128 characters"
  );

  var isLowercase = confirm(
    "Do you want your password to contain lowercase letters?");
  var isUppercase = confirm(
    "do you want uppercase");
  var isSpecialChars = confirm(
    "Do you want Special Characters?")
  var isNumber = confirm(
    "Do you want numbers?")

  if (isLowercase === true){
    finalPasswordCharacter.push(lowercaseLetters)
  if (isUppercase === true){
    finalPasswordCharacter.push(uppercaseLetters)
  if (isSpecialChars === true){
    finalPasswordCharacter.push(isSpecialChars)
  if (isNumbers === true){
     finalPasswordCharacter.push(numbers)
  }


  //if (optionsKeysLength === 0) {
  //throw new Error("PLEASE_CHOOSE_AT_LEAST_ONE_CHARACTER_SET");
  //}
  if (passwordLength >= 8 || passwordLength <= 128) {
    alert("Password should be between 8 and 128 characters");
  }
  // let passwordProperties = prompt(
  //   "Please enter characters required",
  //   "Uppercase Letters",
  //   "Lowercase Letters",
  //   "numbers",
  //   "Special Characters"
  // );

  if (passwordProperties != null) {
    document.getElementById("demo").innerHTML =
      "Thank you" + "! Characters Chosen";
  }

  const randomChar = (string) =>
    string[Math.floor(Math.random() * string.length)];
  function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.commandID("copy");
  }

  return "";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }

  document.querySelector("password").value = password;
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", generatePassword {});