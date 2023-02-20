const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => { 
    return (b != 0)
    ? a / b
    : "OOPS";
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
clearEverythingButton.addEventListener('click', clearEverything);

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', decimalPress)

const operateButtons = document.querySelectorAll('.operator');
operateButtons.forEach((button) => {
    button.addEventListener('click', operatorPress);
})

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', equalsPress);

function operate(operator, a, b) {
    return operator(a,b);
}

function equals() {
    if ((calculator.number2 && calculator.operator) || (calculator.number2 === 0 && calculator.operator)) {
        calculator.total = operate(calculator.operator, calculator.number1, calculator.number2);
        storeHistory();
        calculator.number1 = parseFloat(calculator.total.toFixed(2));
        delete calculator.number2;
        delete calculator.operator;
    }
}

function getNumber(button) {
    ((!calculator.number1 && !calculator.number2) || (calculator.total && !calculator.operator)) ? calculator.number1 = parseInt(button.id)
    : ((!calculator.number2 && !calculator.operator)) ? calculator.number1 += button.id
    : ((calculator.operator || calculator.total) && !calculator.number2) ? calculator.number2 = parseInt(button.id)
    : calculator.number2 += button.id;
}

function refreshDisplay() {
    displayWindow.textContent = (calculator.number2 && calculator.number2 != 0)
    ? calculator.number2
    : (calculator.number2 === 0) ? 0 
    : (!calculator.number1 && !calculator.operator) ? 0
    : (calculator.number1 && calculator.operator) ? ''
    : calculator.number1;
    
}

function displayNumber() {
    testReset();
    getNumber(this);
    refreshDisplay();
}

function clear() {
    let x;
    if (calculator.number2) {
        x = calculator.number2.length;
        if (x > 1) {
            calculator.number2 = calculator.number2.slice(0,-1);
        }
        else {
            delete calculator.number2;
        }
    }
    if (calculator.number1 && !calculator.total) {
        x = calculator.number1.length;
        if (x > 1) {
            calculator.number1 = calculator.number1.slice(0,-1);
        }
        else {
            delete calculator.number1;
        }
    }

        
    refreshDisplay();
}

function clearEverything() {
    delete calculator.number2;
    delete calculator.number1;
    delete calculator.symbol;
    delete calculator.operator;
    delete calculator.total;
    delete calculator.history;
    historyWindow.textContent = '';
    refreshDisplay();
}

function decimal() {
    if ((displayWindow.textContent.includes('.')) || calculator.history) {
        return;
    }
    else if (!calculator.number1 && !calculator.number2) {
        calculator.number1 = 0;
        calculator.number1 += '.';
    }
    else if (!calculator.number2)  {
        calculator.number1 += '.';
    }
    else {
        calculator.number2 += '.';
    }
}

function convertNumber() {
    calculator.number1 = parseFloat(calculator.number1);

    if (calculator.number2) {
        calculator.number2 = parseFloat(calculator.number2);
    }
    
}


function updateHistory() {
    historyWindow.textContent = (!calculator.number2 && calculator.operator) 
    ?`${calculator.number1} ${calculator.symbol}`
    : (calculator.number1 && !calculator.history) ? `${calculator.number1} =`
    : `${calculator.history}`;
}

function storeHistory() {
    calculator.history = `${calculator.number1} ${calculator.symbol} ${calculator.number2} = `;
}

function testReset() {
    if ((!calculator.number2 && calculator.history) && !calculator.operator) {
        clearEverything();
    }
    return
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
            calculator.operator = divide;
            calculator.symbol = "/";
            break;
    } 
}

function operatorPress() {
    convertNumber();
    equals();
    getOperator(this);
    updateHistory();
}

function equalsPress() {
    convertNumber();
    equals();
    refreshDisplay();
    updateHistory();
}

function decimalPress() {
    decimal();
    refreshDisplay();

}

