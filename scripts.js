const add = (a, b) => a + b;

console.log(add(1, 7));

const subtract = (a, b) => a - b;

console.log(subtract(0, 10));

const multiply = (a, b) => a * b;
    /* return a.length 
    ? a.reduce((accumulator, nextNumber) => accumulator * nextNumber)
    : 0; */
    



console.log(multiply([3, 10, 2]));

const divide = (a, b) => { 
    return (b != 0)
    ? a / b
    : "OOPS"
}

console.log(divide(10, 3));


function operate(operator, a, b) {
    return operator(a,b);
}


console.log(operate(subtract, 6, 3));




function getNumber(button) {
    (calculator.display == 0) 
    ? calculator.display = parseInt(button.id) 
    : calculator.display += button.id;

}

function refreshDisplay() {
    displayWindow.textContent = calculator.display;
}

function displayNumber() {
    getNumber(this);
    refreshDisplay();
}

function clear() {
    let x = calculator.display.length
    calculator.display = (x > 1) 
    ? calculator.display.slice(0,-1)
    : 0;
    refreshDisplay();
}

function clearEverything() {
    calculator.display = 0;
    refreshDisplay();
}

function storeNumber() {
    calculator.number1 = parseInt(calculator.display);
}

const calculator = {
    display: 0,
};

const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
    button.addEventListener('click', displayNumber);
})

const displayWindow = document.querySelector('.window');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

const clearEverythingButton = document.querySelector('#cleareverything');
clearEverythingButton.addEventListener('click', clearEverything)








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
