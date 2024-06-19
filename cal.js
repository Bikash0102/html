let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

const display = document.getElementById('display');
display.textContent = 'Hello World'

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
display.textContent = 'Hello World';
}

function appendNumber(num) {
    if(display.textContent=='Hello World')
        {
            display.textContent='';
        }
    currentInput += num;
    
    display.textContent += currentInput;
}

function appendOperator(op) {
    display.textContent+=op;
    if (currentInput === '') return;
    if (operator !== '') {
        calculate();
    }
    operator = op;
    operand1 = parseFloat(currentInput);
    currentInput = '';
}

function calculate() {
    if (operator === '' || currentInput === '') return;
    operand2 = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            return;
    }
    display.textContent = result;
    currentInput = result.toString();
    operator = '';
    operand1 = '';
    operand2 = '';
}
