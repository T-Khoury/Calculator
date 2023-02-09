const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => { 
    return (b != 0)
    ? a / b
    : "OOPS"
}

function operate(operator, a, b) {
    return operator(a,b);
}

function equals() {
    calculator.total = operate(calculator.operator, calculator.number1, calculator.number2);
    storeHistory();
    calculator.number1 = calculator.total;
    delete calculator.number2;
    delete calculator.operator;

}


function getNumber(button) {
    (!calculator.number1) ? calculator.number1 = parseInt(button.id)
    : (calculator.number1 && !calculator.operator) ? calculator.number1 += button.id
    : ((calculator.number1 && calculator.operator) && !calculator.number2) ? calculator.number2 = parseInt(button.id)
    : calculator.number2 += button.id;
}


function refreshDisplay() {
    displayWindow.textContent = (calculator.number2)
    ? calculator.number2
    : (!calculator.number1) ? 0
    : calculator.number1;
    
}

function displayNumber() {
    getNumber(this);
    refreshDisplay();
}

function clear() {
    let x = calculator.number1.length
    calculator.number1 = (x > 1) 
    ? calculator.number1.slice(0,-1)
    : 0;
    refreshDisplay();
}

function clearEverything() {
    delete calculator.number2;
    delete calculator.number1;
    delete calculator.symbol;
    delete calculator.operator;
    historyWindow.textContent = '';
    refreshDisplay();
}

function convertNumber() {
    calculator.number1 = parseInt(calculator.number1);

    if (calculator.number2) {
        calculator.number2 = parseInt(calculator.number2);
    }
    
}




function updateHistory() {
    historyWindow.textContent = (!calculator.number2 && calculator.operator) 
    ?`${calculator.number1} ${calculator.symbol}`
    :`${calculator.history}`;

}

function storeHistory() {
    calculator.history = `${calculator.number1} ${calculator.symbol} ${calculator.number2} = `;
}



function getOperator(button) {
    console.log(button.id);
    switch(button.id) {
        case 'add':
            calculator.operator = add;
            calculator.symbol = "+";
            break;
        case 'subtract':
            calculator.operator = subtract;
            calculator.symbol = "-";
            break;
        case 'multiply':
            calculator.operator = multiply;
            calculator.symbol = "x";
            break;
        case 'divide':
            calculator.operate = divide;
            calculator.symbol = "/";
            break;
    } 
}

function operatorPress() {
    convertNumber();
    while (calculator.number2) {
        equals();
    };
    getOperator(this);
    updateHistory();
}

function equalsPress() {
    convertNumber();
    equals();
    refreshDisplay();
    updateHistory();
}




const calculator = {
};

const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
    button.addEventListener('click', displayNumber);
})

const displayWindow = document.querySelector('.window');
const historyWindow = document.querySelector('.history');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

const clearEverythingButton = document.querySelector('#cleareverything');
clearEverythingButton.addEventListener('click', clearEverything)

const operateButtons = document.querySelectorAll('.operator');
operateButtons.forEach((button) => {
    button.addEventListener('click', operatorPress);
})

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', equalsPress);







/* A "result" object will be created with:
    number 1:
    number 2:
    operator:

    input steps

    number button press will save number to variable and display to div 

    (if more number button presses here append number(s) to end of result.number1)

    operator button press will save number from display variable to result.number1 and operator function to result.operator

    2nd number button press will reassign display variable to that number

    (if more number button presses here append number(s) to end of display variable


    -- if there is a decimal ' . ' in one of the numbers append 1st instance of a decimal and then do no nothing when button is pressed if there is already a decimal in the number

    then:

    pressing equals will save display variable to #2, call result.operator(number1, number2), sand save the result to display and then to number 1 and clear number 2

    pressing another operator before first one has been called will 

    if there is a number 1 and an operator and a 2nd operator button or = is pushed, store display variable as result.number2 and call operator(result.number1, result.number2) and store result as display variable, then store display variable as result.number1, store the next operator button
    

    assign click and keyboard button evenlistener to each button

    add display div and add current number 

    */
