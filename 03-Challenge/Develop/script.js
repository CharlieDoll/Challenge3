// Assignment Code
const Password = document.getElementById("password");
const button = document.getElementById("generate");
const length = document.getElementById("length");
const upper = document.getElementById("uppercaseLetter");
const lower = document.getElementById("lowercaseLetter");
const special = document.getElementById("specialChars");
const number = document.getElementById("numbers");
const generate = document.getElementById("generate");

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specialChars = "!@£$%&*-+=";
var passwordLength = [8 > 128];
let finalPasswordCharacter = "";

function getLowerLetters() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUpperLetters() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSpecialChars() {
  return symbol[Math.floor(Math.random() * specialChars.length)];
}

// Write password to the #password input
function generatePassword() {
  let password = "";

  var passwordLength = prompt(
    "Please choose a password length between 8 and 128 characters"
  );

  var isLowerLetters = confirm(
    "Do you want your password to contain lowercase letters?"
  );
  var isUpperLetters = confirm(
    "Do you want your password to contain uppercase letters?"
  );
  var isSpecialChars = confirm(
    "Do you want your password to contain Special Characters?"
  );
  var isNumbers = confirm("Do you want your password to contain numbers?");

  if (isLowerLetters === true) {
    finalPasswordCharacter += lowerLetters;
  }
  if (isUpperLetters === true) {
    finalPasswordCharacter += upperLetters;
  }
  if (isSpecialChars === true) {
    finalPasswordCharacter += specialChars;
  }
  if (isNumbers === true) {
    finalPasswordCharacter += numbers;
  }

  if (passwordLength >= 8 || passwordLength <= 128) {
    alert("Password should be between 8 and 128 characters");
  }

  const randomChar = (string) =>
    string[Math.floor(Math.random() * string.length)];
  console.log(finalPasswordCharacter);
  for (let i = 0; i < passwordLength; i++) {
    console.log(randomChar(finalPasswordCharacter));
  }
}

button.addEventListener("click", () => {
  generatePassword();
  const textarea = document.createElement("textarea");
  const password = Password.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard");
});
