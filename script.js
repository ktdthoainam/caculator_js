// console.log('Hello!');
let firstNumber = document.getElementById(`number1`)
let secondNumber = document.getElementById(`number2`)
let resultElement = document.getElementById(`result`)

let sumBtn = document.getElementById(`sumBtn`);
let subBtn = document.getElementById(`subBtn`);
let mulBtn = document.getElementById(`mulBtn`);
let divBtn = document.getElementById(`divBtn`);
//action
sumBtn.addEventListener(`click`, function()
{
sum();
})
subBtn.addEventListener(`click`, function()
{
sub();
})
mulBtn.addEventListener(`click`, function()
{
mul();
})
divBtn.addEventListener(`click`, function()
{
div();
})
//funtion
function sum() 
{
  let firstNumberValue = firstNumber.value;
  let secondNumberValue = secondNumber.value;
  let result = +firstNumberValue + +secondNumberValue
  resultElement.innerHTML = ` <b>${firstNumberValue} + ${secondNumberValue} = ${result}`
}

function sub() 
{
  let firstNumberValue = firstNumber.value;
  let secondNumberValue = secondNumber.value;
  let result = +firstNumberValue - +secondNumberValue
  resultElement.innerHTML = ` <b>${firstNumberValue} - ${secondNumberValue} = ${result}`
}

function mul() 
{
  let firstNumberValue = firstNumber.value;
  let secondNumberValue = secondNumber.value;
  let result = +firstNumberValue * +secondNumberValue
  resultElement.innerHTML = ` <b>${firstNumberValue} x ${secondNumberValue} = ${result}`
}

function div() 
{
  let firstNumberValue = firstNumber.value;
  let secondNumberValue = secondNumber.value;
  let result = +firstNumberValue / +secondNumberValue
  resultElement.innerHTML = ` <b>${firstNumberValue} : ${secondNumberValue} = ${result}`
}