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


/* A "result" object will be created with:
    number 1:
    number 2:

    input steps

    number button press will save number to variable and display to div 

    (if more number button presses here append number(s) to end of result.number1)

    operator button press will save number from display variable to result.number1 

    2nd number button press will reassign display variable

    (if more number button presses here append number(s) to end of display variable


    -- if there is a decimal ' . ' in one of the numbers append 1st instance of a decimal and then do no nothing when button is pressed if there is already a decimal in the number



    if there is a number 1 and an operator and a 2nd operator button or = is pushed, store display variable as result.number2 and call operator(result.number1, result.number2) and store result as display variable, then store display variable as result.number1, store the next operator button
    

    assign click and keyboard button evenlistener to each button

    add display div and add current number 

