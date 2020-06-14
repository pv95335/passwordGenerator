// Assignment code here


//System Functions Start
//Will start the generate password function
var generatePassword = function() {
  criteria()

   }
 
 
 var generateBtn = document.querySelector("#generate");
 
 function writePassword() {

  window.alert(generatePassword());



   //Variable for password will = generatePassword
   var password = generatePassword();

   //Document.querySelector and value is id=password in html
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
 
 
 }

//System Functions End


//Functions for variables Start

//function generate() {
  //let password = "";

  //let length = +document.getElementById("length").value;

 // let lowerCase = document.getElementById("lowercase").confirm;
 // let upperCase = document.getElementById("uppercase").confirm;
 // let numberRandom = document.getElementById("numberRandom").confirm;
 // let symbolRandom = document.getElementById("symbolRandom").confirm;
  
 // if (lowerCase + upperCase + symbolRandom + numberRandom <= 0)
 // return;

//  for (let i=0; i < length; i++) {

  //  const r=generater(0,3);
  //  if (lowerCase && r === 0){
  //    password += generateRandomLowerCase();
  //  } else if (upperCase && r === 1){
   //   password += generateRandomUpperCase();
   // } else if (symbolRandom && r === 2){
  //    password += generateRandomSymbol();
   // } else if (number && r === 3){
   //   password += generater(0,9);
   // } else {
   //   i--;
   // }
  //}
  //document.getElementById("result").textContent = password;
//}
//generate();

function lowerLetter(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  //Random generation for uppercase letter
  function upperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
  }
  //Random generation for number between 0-9
  function numberRandom() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
  }
  //Random generation for symbols !@#$%^&*
  function symbolRandom(){
    const symbols = '!@#$%^&*';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

//Functions for variables End

//User Input Start
generateBtn.addEventListener("click", writePassword);

  //Will ask the users for the criteria they wish to use in confirms and prompt
function criteria() {
  var passwordLength = window.prompt("How long do you want it? Type a number between 8 - 24.")

  var lowerCaseLetter = window.confirm("Do you want lower case letters?")
      if (confirm(lowerLetter()));
    
  var upperCaseLetter = window.confirm("Do you want uppper case letters?")
      if (confirm(upperLetter()));
    
  var randomNumbers = window.confirm("Do you want numbers?")
      if (confirm(numberRandom()));

  var randomSymbols = window.confirm("Do you want symbols?")
      if (confirm(symbolRandom()));
    
}

//User Input End


//Random Generation Start

  //Random generation for lowercase letter


//Random Generation End


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

