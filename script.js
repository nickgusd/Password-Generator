// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assign prompt and confirm
var userPasswordLength = prompt("how many characters would you like the password to contain?");
var confirmUpperCase = confirm("Click Ok to confirm including uppercase characters");
var confirmLowerCase = confirm("Click Ok to confirm including lowercase characters");
var confirmSpecial = confirm("Click Ok to confirm including special characters");
var confirmNumbers = confirm("Click Ok to confirm including numbers as characters");


//Array Assignment
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = [];

var special = ["$", "!", "/", "@", "#", "%", "^", "&", "*"];

var passwordCharacters = [];

// for loop for Numbers Array

for (var i = 0; i < 10; i++) {
  numbers.push(i);
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
//for loop for pushing special into newArray
if (confirmSpecial) {

for (var i = 0; i < special.length; i++) {
  passwordCharacters.push(special[i]);
}
}

// pushing arrays into new array, we need to edit this so it is not array within arrays
//newArray.push(upperCase, lowerCase, numbers, special);

//for loop for password generator

for (var i = 0; i < userPasswordLength; i++) {
  
  var generatePassword = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
 
  console.log(generatePassword)
}

//create value to choose password characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* 4 arrays

var upperCase = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["$", "!", "/", "@", "#", "%", "^", "&", "*"];

var workshopArr = []; we will push the arrays in here [upperCase, lowercase, numbers, special]; it should display like [Nick21@CHS]

var finalResultArray = [];

var userPasswordLengthChoice = prompt("Ask question in here")



2. We need to loop through our arrays so we can use them in our logic.
write a for loop for upperCase, lowercase, numbers, and special.

4 variables to store the prompt + confirm;

3. We need to connect those answers from the user to our array; 
  if the user click's yes, they want uppercase, we want to push/add our uppercase array to our workshop array;

3a. We need to create a condition to handle the trigger of adding the 4 arrays to our workshopArr. whenever the user clicks something it should be evaluated in our condition that then fires the addition to our workshop array.
i.e. if the user clicks ok to numbers, we push the numbers array into our workshop array.

4. we now need to manipulate our array based upon the user's initial password length selection.
** Everytime we have our base logic down we then need to ask ourselves, how do we turn our logic into code. 
4a. we need to randomize the indexes of the array. Math.floor random maybe?
4b. loop through the array and cut make sure you have special characters, numbers, upper, and lowercase in your array. check with console.log
4b. First we need to check and cut down the length of our array = to the user's response in the userPasswordLengthChoice and then we filter the array and push/add that to our finalResultsArr variable and that will contain the final password. 

5. Take that final results array variable and plug that into the html. 
Once we are able to loop through all 4, we will then add the user's response to the workshop array
*/
