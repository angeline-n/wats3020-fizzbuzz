/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger = false;
let maxNumber;
let fbResults = [];
let fbText = '';


while (isInteger === false){
  maxNumber = parseInt(prompt('Please enter an integer greater than 0.'));
  if (Number.isSafeInteger(maxNumber)){
    isInteger = true;
  };
}

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
