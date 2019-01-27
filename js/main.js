/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger = false;
let maxNumber,
  numberInput,
  userInput;
let fbResults = [];
let fbText = '';

function getInteger(){
  while (isInteger === false){
    userInput = prompt('Please enter an integer (i.e. a whole number) greater than 0.');
    numberInput = parseInt(userInput); //Change string into number
    let notDigit = /\D/; //RegEx initialized to any character that's not a digit
    if (notDigit.test(userInput)){ //If string input contains a character that is not a digit
      alert('Error: Your input contains characters that are not digits.');
    } else if (numberInput === 0){ //Since the previous statement would have alerted "-", there would be no negative numbers
      alert('Error: The number you entered is not greater than 0.');
    } else{ //Since the first statement does not allow for ".", "/", or letters, by this point it must be a non-zero integer     
      isInteger = true;
    };
  };
} 

function FizzBuzz(){
  for (i=1; i <= maxNumber; i++){
    if (i % 15 === 0){
      fbResults.push('FizzBuzz');
    } else if (i % 3 === 0){
      fbResults.push('Fizz');
    } else if (i % 5 === 0){
      fbResults.push('Buzz');
    } else{
      fbResults.push(i);
    };
  };
}

getInteger();
maxNumber = numberInput;
FizzBuzz();

for (let value of fbResults){
  fbText = fbText + value + ' </br>';
}


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
