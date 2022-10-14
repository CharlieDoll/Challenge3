// Assignment Code
var password=document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numerical = "1234567890"
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
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.commandID("copy");  
}
// Add event listener to generate button
querySelector.addEventListener("click", writePassword);