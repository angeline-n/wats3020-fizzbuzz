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
    numberInput = parseInt(userInput);
    let notDigit = /\D/;
    if (notDigit.test(userInput)){
      alert('Error: Your input contains characters that are not digits.');
    } else if (numberInput === 0){
      alert('Error: The number you entered is not greater than 0.');
    } else{
      isInteger = true;
    };
  };
} 

getInteger();
maxNumber = numberInput;

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
}

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
