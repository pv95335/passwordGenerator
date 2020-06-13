// Assignment code here
var generatePassword= function() {
  window.alert("Alright let's generate a new password for you.");
}

var generateBtn = document.querySelector("#generate");

function writePassword(lower, upper, number, symbol, length) {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  const inputArray = [{lower}, {upper}, {number}, {symbol}];
  (item => Object.values(item)[0]);

  console.log('inputArray', inputArray);
}

generateBtn.addEventListener("click", writePassword);


//Generating
function criteria() {

}

function lowerLetter(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  
  function upperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
  }
  
  function numberRandom() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
  }
  
  function symbolRandom(){
    const symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  const randomGenerate = {
    lower: lowerLetter,
    upper: upperLetter,
    number: numberRandom,
    symbol: symbolRandom
  };

//STARTING CODE FOR ASSIGNMENT
// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
//END

