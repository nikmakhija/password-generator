var lowercaseLetters = ['a',
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
console.log(lowercaseLetters[0]);

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
    '@', '%',
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
  var allCharacters=lowercaseLetters+uppercaseLetters+numbers+specialCharacters;
// function to prompt user for password options example password length
// Need a way to check if password is a number prompt ends if it's false
// Conditional statements to check if password length is at least 8 characters long
// Conditional statements to check if password length is less than 128 characters long
function questionLength() {
  var Length=prompt("What length of password you want from 8 to 128 characters?");
  window.alert("You want this many characters--"+Length);
  console.log("What length of password do you want?");
}
function questionLowerCase() {
  var lowerCase=prompt("Do you want any lowercase alphabet? Yes or No?");
  window.alert("Your answer regarding lowercase alphabet is"+lowerCase);
}

  function questionUpperCase() {
      var upperCase=prompt("Do you want any uppercase alphabet? Yes or No?");
      window.alert("Your answer regarding uppercase alphabet is"+upperCase); 
  } 
      
      function questionSpecial() {
          var specialChar=prompt("Do you want any special characters? Yes or No?");
          window.alert("Your answer regarding special characters is"+specialChar);
      }

          function questionNumeric() {
              var numericChar=prompt("Do you want any numerics, 0 to 9? Yes or No?");
              window.alert("Your answer regarding numerics is"+numericChar);         
}
var password=document.getElementById("password");

 function genPassword() {
    var allCharacters = ['a',
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
    'z',
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    '@', '%',
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
    '.'];
    var passwordLength = allCharacters.length;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * allCharacters.length);
   password += allCharacters.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }
  var generateButton = document.getElementById("password");
function greeting() {
    var passwordOptions = { 
        length: length,
    }
      return passwordOptions;
        window.alert("Welcome, your password is"+password);
}
greeting();