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

let firstOperand;
let operation;
let secondOperand;
let solution;
let currentInput;
let answerGiven;

function allClear(){
    firstOperand = null;
    operation = null;
    secondOperand = null;
    currentInput = 0;
    answerGiven = false;
    upperText_div.innerHTML = 0;
    lowerText_div.innerHTML = 0;
}

allClear();

function clear(){
    currentInput = 0;
    lowerText_div.innerHTML = currentInput;
    clearButton_div.innerHTML =`AC`;
}

function ContainsEqual(){
    if (upperText_div.innerHTML.includes(`=`)) {
        console.log(`true`);
        return true;
    }
}

function decimal(){
    if ((currentInput === 0) || (currentInput.includes(`.`) == false)){
        currentInput += `.`;
        firstOperand = `0.`;
        lowerText_div.innerHTML = currentInput;
    }
}

function updateCurrentInput(i){
    if(currentInput === 0) {
        if (ContainsEqual()){
            allClear();
        }
        currentInput = `${i}`;
        clearButton_div.innerHTML = `C`;

    }
    else {
        currentInput =currentInput + `${i}`;
    }
    lowerText_div.innerHTML = currentInput;
    answerGiven = false;
}

function shortenNumber(number){
    const powerOfTen = Math.pow(10, 4);
    const shortenedNumber = Math.round(number * powerOfTen) / powerOfTen;
    return shortenedNumber;
}

function updateOperation(i) {
    if (operation == null) {
        clearButton_div.innerHTML = `AC`;
        operation = `${i}`;
        firstOperand = currentInput;
        if (answerGiven == true){
            firstOperand = solution;
        }
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
    clearButton_div.innerHTML = `AC`;
    secondOperand = currentInput;
    if (operation == `+`){
        solution  = +firstOperand + +secondOperand   // "+" sign ensures both operands are formatted as a number
        solution = shortenNumber(solution)
        postSolution();
    }
    else if (operation == `-`){
        solution = firstOperand - secondOperand;
        solution = shortenNumber(solution)
        postSolution();
    }
    else if (operation == `x`){
        solution = firstOperand * secondOperand;
        solution = shortenNumber(solution)
        postSolution();
    }
    else if ((operation == `/`) && (secondOperand == 0)){
        solution = `Dividin' by zero ain't cool, man`
        postSolution();
        firstOperand = null;
        operation = null;
        secondOperand = null;
        currentInput = 0;
        answerGiven = false;    
    }
    else if (operation == `/`) {
        solution = firstOperand / secondOperand;
        solution = shortenNumber(solution)
        postSolution();
    }
}

function postSolution(){
    currentInput = 0;
    upperText_div.innerHTML = `${firstOperand} ${operation} ${secondOperand} =`
    lowerText_div.innerHTML = solution;
    operation = null;
    answerGiven = true;
}



clearButton_div.addEventListener(`click`, function(){
    if (clearButton_div.innerHTML == `AC`) {
        allClear();
    } else {
        clear();
    }
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