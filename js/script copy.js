var numButtons = document.querySelectorAll(".butNums");
var operButtons = document.querySelectorAll(".butOper");
var buttonC = document.querySelector("#butC");
var button1 = document.querySelector("#but1");
var button2 = document.querySelector("#but2");
var button3 = document.querySelector("#but3");
var button4 = document.querySelector("#but4");
var button5 = document.querySelector("#but5");
var button6 = document.querySelector("#but6");
var button7 = document.querySelector("#but7");
var button8 = document.querySelector("#but8");
var button9 = document.querySelector("#but9");
var buttonDot = document.querySelector("#butDot");
var buttonPlus = document.querySelector("#butPlus");
var buttonMinus = document.querySelector("#butMinus");
var buttonDiv = document.querySelector("#butDiv");
var buttonTimes = document.querySelector("#butTimes");
var buttonEquals = document.querySelector("#butEquals");
var myDisplay = document.querySelector("#disp");
var myText = document.querySelector(".textOper");
var currentOper = 0;
var currentResult = 0;
var helper = 0;

// This is my event listener for the Clear button.
buttonC.addEventListener('click', clearDisplay);
  function clearDisplay(){
    myDisplay.innerText = 0;
    currentOper = 0;
    currentResult = 0;
    helper = 0;
  }
// These are my event listeners for my number and dot buttons.
for(i = 0; i < 11; i++){
numButtons[i].addEventListener('click', onNumClick);
}
function onNumClick(){
  if(helper === 1){
    myDisplay.innerText = this.innerText;
    myText.innerText = this.innerText;
    helper = 0;
  } else if (myDisplay.innerText !== "0"){
    myDisplay.innerText = myDisplay.innerText + this.innerText;
  } else {
    myDisplay.innerText = this.innerText;
    myText.innerText = this.innerText;
  }
}

// These are my event listeners for my operation buttons.
for(i = 0; i < 4; i++){
operButtons[i].addEventListener('click', onOperClick);
}
function onOperClick(){
  if(currentOper === 0){
  currentResult = myDisplay.innerText;
  currentOper = this.innerText;
  helper = 1;
} else {
  currentResult = eval(currentResult + currentOper + myDisplay.innerText);
  currentOper = this.innerText;
  myDisplay.innerText = currentResult;
  helper = 1;
  }
}

// This is my event listener for the Equal button.
buttonEquals.addEventListener('click', finalResult);
  function finalResult(){
    currentResult = eval(currentResult + currentOper + myDisplay.innerText);
    myDisplay.innerText = currentResult;
    currentOper = 0;
  }
