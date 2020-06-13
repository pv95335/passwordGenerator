// Assignment code here
var generatePassword = function() {
  //if (generatePassword == null || generatePassword =="") {
    //window.alert("Goodbye");
  //} else {
 criteria()
  }
//}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

generateBtn.addEventListener("click", writePassword);



//Generating
function criteria() {
  var passwordLength = window.prompt("How long do you want it? Type a number between 8 - 128.")
    switch (passwordLength) {

    }
     window.confirm("Do you want lower case letters?")
      if (confirm(lowerLetter()));
    

    window.confirm("Do you want uppper case letters?")
      if (confirm(upperLetter()));
    

    window.confirm("Do you want numbers?")
      if (confirm(numberRandom()));


    window.confirm("Do you want symbols?")
      if (confirm(symbolRandom()));
    
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

const resultEl = document.getElementById('resultEl');
const lengthEl = document.getElementById('lengthEl');
const upperCaseEl = document.getElementById('upperCaseEl');
const lowerCaseEl = document.getElementById('lowerCaseEl');
const numbersEl = document.getElementById('numbersEl');
const symbolsEl = document.getElementById('symbolsEl');
const generateEl = document.getElementById('generateEl');



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

