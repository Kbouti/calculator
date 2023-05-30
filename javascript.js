console.log(`Welcome to Calculator`)


const upperText_div = document.getElementById(`upperText`);
const lowerText_div = document.getElementById(`lowerText`);

const clearButton_div = document.getElementById(`clearButton`);
const divideButton_div = document.getElementById(`divideButton`);
const multiplyButton_div = document.getElementById(`multiplyButton`);

const sevenButton_div = document.getElementById(`sevenButton`);
const eightButton_div = document.getElementById(`eightButton`);
const nineButton_div = document.getElementById(`nineButton`);
const subtractButton_div = document.getElementById(`subtractButton`);

const fourButton_div = document.getElementById(`fourButton`);
const fiveButton_div = document.getElementById(`fiveButton`);
const sixButton_div = document.getElementById(`sixButton`);
const addButton_div = document.getElementById(`addButton`);

const oneButton_div = document.getElementById(`oneButton`);
const twoButton_div = document.getElementById(`twoButton`);
const threeButton_div = document.getElementById(`threeButton`);
const equalButton_div = document.getElementById(`equalButton`);

const zeroButton_div = document.getElementById(`zeroButton`);
const dotButton_div = document.getElementById(`dotButton`);


upperText_div.innerHTML = 0;
lowerText_div.innerHTML = 0;


let firstOperand = null;
let operation = null;
let secondOperand = null;
let solution;
let currentInput = 0;
let answerGiven = false;

function decimal(){
    if (currentInput.includes(`.`) == false){
        currentInput += `.`
        lowerText_div.innerHTML = currentInput;

    }
}

function updateCurrentInput(i){
    if(currentInput == 0) {
        currentInput = `${i}`;
    }
    else {
        currentInput =currentInput + `${i}`;
    }
    lowerText_div.innerHTML = currentInput;
    answerGiven = false;
}


function allClear(){
    firstOperand = null;
    operation = null;
    secondOperand = null;
    currentInput = 0;
    answerGiven = false;

    upperText_div.innerHTML = 0;
    lowerText_div.innerHTML = 0;
}

function updateOperation(i) {
    if (operation == null) {
        operation = `${i}`;
        firstOperand = currentInput;
        if (answerGiven == true){
            firstOperand = solution;
        }
        console.log(firstOperand);
        currentInput = 0;
        upperText_div.innerHTML = `${firstOperand} ${operation}`;
        lowerText_div.innerHTML = currentInput;
    }
    else {
        compute()
        firstOperand = solution;
        operation = `${i}`;
        currentInput = 0;
        upperText_div.innerHTML = `${firstOperand} ${operation}`;
        lowerText_div.innerHTML = currentInput;
    
    }
}


function compute(){
    secondOperand = currentInput;
    if (operation == `+`){
        solution = parseInt(firstOperand) + parseInt(secondOperand);
    }
    else if (operation == `-`){
        solution = firstOperand - secondOperand;
    }
    else if (operation == `x`){
        solution = firstOperand * secondOperand;
    }
    else if (operation == `/`){
        solution = firstOperand / secondOperand;
    }
    currentInput = 0;
    upperText_div.innerHTML = `${firstOperand} ${operation} ${secondOperand} =`
    lowerText_div.innerHTML = solution;
    operation = null;
    answerGiven = true;
}

clearButton_div.addEventListener(`click`, function(){
    allClear();
})

dotButton_div.addEventListener(`click`, function(){
    decimal();
})

equalButton_div.addEventListener(`click`, function(){
    if (operation == null){
        solution = currentInput;
        upperText_div.innerHTML = `${solution} =`;
        lowerText_div.innerHTML = solution;
    }
    else {
        compute(firstOperand, secondOperand, operation)
}})

zeroButton_div.addEventListener(`click`, function() {
    updateCurrentInput(0)})

oneButton_div.addEventListener(`click`, function() {
    updateCurrentInput(1)})

twoButton_div.addEventListener(`click`, function() {
    updateCurrentInput(2)})

threeButton_div.addEventListener(`click`, function() {
    updateCurrentInput(3)})

fourButton_div.addEventListener(`click`, function() {
    updateCurrentInput(4)})

fiveButton_div.addEventListener(`click`, function() {
    updateCurrentInput(5)})

sixButton_div.addEventListener(`click`, function() {
    updateCurrentInput(6)})

sevenButton_div.addEventListener(`click`, function() {
    updateCurrentInput(7)})

eightButton_div.addEventListener(`click`, function() {
    updateCurrentInput(8)})

nineButton_div.addEventListener(`click`, function() {
    updateCurrentInput(9)})

addButton_div.addEventListener(`click`, function(){
    updateOperation(`+`);
})

subtractButton_div.addEventListener(`click`, function(){
    updateOperation(`-`);
})

multiplyButton_div.addEventListener(`click`, function(){
    updateOperation(`x`);
})

divideButton_div.addEventListener(`click`, function(){
    updateOperation(`/`);
})