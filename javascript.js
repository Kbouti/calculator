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


let firstOperand;
let operation = null;
let secondOperand;

let currentInput = 0;

oneButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `1`;
    }
    else {
        currentInput =currentInput + `1`;
    }
    lowerText_div.innerHTML = currentInput;
})

twoButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `2`;
    }
    else {
        currentInput =currentInput + `2`;
    }
    lowerText_div.innerHTML = currentInput;
})

threeButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `3`;
    }
    else {
        currentInput =currentInput + `3`;
    }
    lowerText_div.innerHTML = currentInput;
})

fourButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `4`;
    }
    else {
        currentInput =currentInput + `4`;
    }
    lowerText_div.innerHTML = currentInput;
})

fiveButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `5`;
    }
    else {
        currentInput =currentInput + `5`;
    }
    lowerText_div.innerHTML = currentInput;
})

sixButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `6`;
    }
    else {
        currentInput =currentInput + `6`;
    }
    lowerText_div.innerHTML = currentInput;
})

sevenButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `7`;
    }
    else {
        currentInput =currentInput + `7`;
    }
    lowerText_div.innerHTML = currentInput;
})

eightButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `8`;
    }
    else {
        currentInput =currentInput + `8`;
    }
    lowerText_div.innerHTML = currentInput;
})

nineButton_div.addEventListener(`click`, function() {
    if(currentInput == 0) {
        currentInput = `9`;
    }
    else {
        currentInput =currentInput + `9`;
    }
    lowerText_div.innerHTML = currentInput;
})


addButton_div.addEventListener(`click`, function(){
    if (operation == null) {
        operation = `+`;
        firstOperand = currentInput;
        currentInput = 0;
        upperText_div.innerHTML = `${firstOperand} ${operation}`;
        lowerText_div.innerHTML = currentInput;
    }
})