// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// var allChar = [].concat(upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters); // New array

var passwordLength = 9; 
var selectedArr = [];


// Function to prompt user for password options
function getPasswordOptions() {
  selectedArr = [];

  passwordLength = parseInt(prompt('How many characters do you want your password to contain? between 10 - 34 characters'));
  if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64 ) {
    alert ("Value must be greater than 16 and less than 35. Please try again");
    return false
  }
  
  if (confirm('Click OK to include special characters')) {
    selectedArr = selectedArr.concat(specialCharacters);
  }
  if (confirm('Click OK to include numeric characters')) {
    selectedArr = selectedArr.concat(numericCharacters);
  }
  if (confirm('Click OK to include lowercase characters')) {
    selectedArr = selectedArr.concat(lowerCasedCharacters);
  }
  if (confirm('Click OK to include Uppercase characters')) {
    selectedArr = selectedArr.concat(upperCasedCharacters);
  }
  return true;

}
  
  

// Function for getting a random element from an array
function getRandom(arr) {
  var password = "";
  for (let i = 0; i< passwordLength; i++) {
    var arr = Math.floor(Math.random() * selectedArr.length);
    password = password + selectedArr[arr];
  }
  return password;
}




// Function to generate password with user input
function generatePassword() {
 return getRandom();
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctValue = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  if (correctValue) {
    var newPassword = generatePassword();
    
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);









