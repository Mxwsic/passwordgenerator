// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";

//Password creation
function generatePassword() {
  var passwordLength = prompt ("Pick a password length 8-128 characters.");
    if (passwordLength >= 8 && passwordLength <= 128){
      upperCaseQuestion();
    }
    else if (passwordLength < 8) { // Makes sure password is not below 8 characters
      alert("Make sure your password is above 8 characters")
      generatePassword();
    } else if (passwordLength > 128){ // Makes sure password is not above 128 characters
      alert("Make sure your password is not above 128 characters")
      generatePassword();
    } else if (isNaN(passwordLength)) { //Makes sure numbers are included
      alert("Make sure you include numbers")
      generatePassword();
    } else {
      return generatePassword;
      
    };
};
//Asks for uppercase letters
function upperCaseQuesion(){
  var question1 = confirm("Would you like uppercase letters?");
  if (question1 === true){ 
    lowerCasePrompt(); 
  } else if(question1 !== true){
    generatePassword();
  }
};
// Asks for lowercase letters
function lowerCaseQuestion(){
  var question2 = confirm("Do you want lowercase letters?");
  if (question2 === true){
    numberQuestion();
  };

};
//Number case yes or no
function numberQuestion(){
  var question3 = confirm("Do you want numbers in your password?");
  if (question3 === true){
    writePassword;
  }
  generatePassword();
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
