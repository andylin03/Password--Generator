// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// variables for the project
var passwordLength;
var caseLower;
var caseUpper;
var confirmNumber;
var symbolSpecial;
var userChoice;

// variable possibilities
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function for project
function generatePassword() {
  // asking user questions for their passwork
  passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");
  console.log("Password Length" + passwordLength);

  if (!passwordLength) {
    alert("Please enter a value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose a value between 8 and 128");
    console.log("Password Length + passwordLength");

  } else {
    caseLower = confirm("Will this password contain any lower case letters?");
    console.log("Lower Case" + caseLower);

    caseUpper = confirm("Will this password contain any upper case letters?");
    console.log("Upper Case" + caseUpper);

    confirmNumber = confirm("Will this password contain any numbers?");
    console.log("Number" + confirmNumber);

    symbolSpecial = confirm("Will this password contain any special characters?");
    console.log("Special Characters" + symbolSpecial);

  }
// when user doesnt select a criteria
  if (!caseLower && !caseUpper && !confirmNumber && !symbolSpecial){
  userChoice = alert("You must select a criteria");
// 4 trues
} else if (caseLower && caseUpper && confirmNumber && symbolSpecial) {
  userChoice = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoice);
}

// 3 trues
else if (caseLower && caseUpper && symbolSpecial) {
  userChoice = lowerCase.concat(upperCase, symbolSpecial);
  console.log(userChoice);
}
  else if (caseLower && caseUpper && confirmNumber) {
    userChoice = lowerCase.concat(upperCase, confirmNumber);
    console.log(userChoice);
}
  else if (caseLower && confirmNumber && symbolSpecial) {
    userChoice = lowerCase.concat(confirmNumber, symbolSpecial);
    console.log(userChoice);
}
  else if (caseUpper && confirmNumber && symbolSpecial) {
    userChoice = upperCase.concat(confirmNumber, symbolSpecial);
    console.log(userChoice);
}

  // 2 trues
else if (caseLower && caseUpper) {
  userChoice = lowerCase.concat(upperCase);
  console.log(userChoice);
}
else if (caseLower && confirmNumber) {
  userChoice = lowerCase.concat(numbers);
  console.log(userChoice);
}
else if (caseLower && symbolSpecial) {
  userChoice = lowerCase.concat(special);
  console.log(userChoice);
}
else if (caseUpper && confirmNumber) {
  userChoice = upperCase.concat(numbers);
  console.log(userChoice);
}
else if (caseUpper && symbolSpecial) {
  userChoice = upperCase.concat(special);
  console.log(userChoice);
}
else if (confirmNumber && symbolSpecial) {
userChoice = numbers.concat(special);
console.log(userChoice);
}
// 1 true
else if (caseLower) {
  userChoice = lowerCase;
  console.log(userChoice);
}
else if (caseUpper) {
  userChoice = upperCase;
  console.log(userChoice);
}
else if (confirmNumber) {
  userChoice = numbers;
  console.log(userChoice);
}
else if (symbolSpecial) {
  userChoice = special;
  console.log(userChoice);
}
// empty varibale for the password length
var passwordBlank = [];

// loop for the random password selection 
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoice[Math.floor(Math.random() * userChoice.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}
// returns the password
var password = passwordBlank.join("");
console.log("Your generated password is: " + password);
return password;

}