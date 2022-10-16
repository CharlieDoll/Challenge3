// Assignment Code

var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = ["!", "@", "£", "$", "%", "&", "*", "?", "=", "+", "-", "_"];
var passwordLength = [8 > 128];

function generatePassword() {
  let passwordProperties = "finalPassword";
  "passwordLength"("uppercaseLetters");
  ("lowercaseLetters");
  ("numbers");
  ("specialChars");
  console.log("finalPassword");

  var finalPasswordCharacter = [];

  var passwordLength = prompt(
    "Please choose a password length between 8 and 128 characters"
  );

  var isLowercase = confirm(
    "Do you want your password to contain lowercase letters?"
  );
  var isUppercase = confirm(
    "Do you want your password to contain uppercase letters?"
  );
  var isSpecialChars = confirm(
    "Do you want your password to contain Special Characters?"
  );
  var isNumbers = confirm("Do you want your password to contain numbers?");

  if (isLowercase === true) {
    finalPasswordCharacter.push(lowercaseLetters);
    if (isUppercase === true) {
      finalPasswordCharacter.push(uppercaseLetters);
      if (isSpecialChars === true) {
        finalPasswordCharacter.push(isSpecialChars);
        if (isNumbers === true) {
          finalPasswordCharacter.push(isNumbers);
        }

        if (passwordLength >= 8 || passwordLength <= 128) {
          alert("Password should be between 8 and 128 characters");
        }

        if (passwordProperties != null) {
          document.getElementById("demo").innerHTML =
            "Thank you" + "! Characters and Password Length Chosen";
        }

        const randomChar = (string) =>
          string[Math.floor(Math.random() * string.length)];
        function copyPassword() {
          var copyText = document.getElementById("finalPassword");
          copyText.select();
          document.commandID("copy");
        }
      }

      // Write password to the #password input
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("password");

        passwordText.value = password;

        for (var i = 0; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * characters.length);
          password += characters.substring(randomNumber, randomNumber + 1);
        }

        document.querySelector("password").value = password;
      }

      // Add event listener to generate button
      document
        .getElementById("password")
        .addEventListener("click", createfinalPassword);
    }
  }
}
