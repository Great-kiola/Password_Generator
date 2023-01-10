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



var allChar = [].concat(upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters); // New array

// Function to prompt user for password options
function getPasswordOptions() {
  var characNum = prompt('How many characters do you want your password to contain?');
  
  let passwordLength = characNum
  if (characNum >= 16 && characNum <=65 ) {
    console.log(passwordLength);
  } else {
    alert('Value must be greater than 16 and less than 35')
  }





  

  // var specialCharac = confirm('Click OK to include special characters');
  // var numericCharac = confirm('Click OK to include numeric characters');
  // var lowercaseCharac = confirm('Click OK to include lowercase characters');
  // var uppercaseCharac= confirm('Click OK to include Uppercase characters');

}
  
  

// Function for getting a random element from an array
function getRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num).join("")

}

const arr = allChar



// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  return getRandom(arr, 12);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);









// if (characNum >= 16 && characNum <=65 ) {
//   alert('valid input')
// } else {
//   alert('Value must be greater than 16 and less than 35')
// }


// var allChar = [].concat(upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters);

//   for (let i = 0; i < allChar; 1++){
//   let randomNumber = Math.floor(Math.random() * allChar);
    
//   ); 
//   console.log(randomNumber);

//   password += allChar.substring(randomNumber, randomNumber + 1);
//   }


// console.log(characNum);
// console.log(specialCharac);
// console.log(numericCharac);
// console.log(lowercaseCharac);
// console.log(uppercaseCharac);




// for (i= 0; i = arr.length; i++){
//   let randomNumber = Math.floor(Math.random()* arr.length);
//   const item =arr[randomNumber];
//   return item;
// }
// const result = getRandom(allChar, 16);
// console.log(result);

