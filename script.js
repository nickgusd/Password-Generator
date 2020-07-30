// Assignment Code
var generateBtn = document.querySelector("#generate");


//Assign prompt and confirm
var userPasswordLength = prompt("How many characters would you like the password to contain?");
var confirmUpperCase = confirm("Click Ok to confirm including uppercase characters");
var confirmLowerCase = confirm("Click Ok to confirm including lowercase characters");
var confirmSpecial = confirm("Click Ok to confirm including special characters");
var confirmNumbers = confirm("Click Ok to confirm including numbers as characters");


//Array Assignment
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = [];

var special = ["$", "!", "/", "@", "#", "%", "^", "&", "*", "(", ")", "+", "-","=", ">", "<", "?"];

var passwordCharacters = [];



// for loop for Numbers Array

for (var i = 0; i < 10; i++) {
  numbers.push(i);
}


// if else statement for password length criteria
if (userPasswordLength < 9) {
  alert("Password length must be at least 9 characters")
  
} else if (userPasswordLength > 128) {
  alert("Pasword length must be fewer than 128 characters")
} else {
  alert("Password length is acceptable")
}



//for loop for pushing numbers array into newArray 
if (confirmNumbers) {

for (var i = 0; i < numbers.length; i++) {
  passwordCharacters.push(numbers[i]);

}
}
//for loop for pushing upperCase into newArray
if (confirmUpperCase) {

for (var i = 0; i < upperCase.length; i++) {
  passwordCharacters.push(upperCase[i]);
}
}
//for loop for pushing lowerCase into newArray

if (confirmLowerCase) {

for (var i = 0; i < lowerCase.length; i++) {
  passwordCharacters.push(lowerCase[i]);
}
}
//for loop for pushing special characters into newArray
if (confirmSpecial) {

for (var i = 0; i < special.length; i++) {
  passwordCharacters.push(special[i]);
}
}

//for loop for password generator

 
var passwordArray = [];

for (var i = 0; i < userPasswordLength; i++) {
  
   passwordArray  = passwordArray + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  
}


// Write password to the #password input
function writePassword() {
  var password = passwordArray;
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

  
console.log(passwordArray)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


