const add = (a, b) => a + b;

console.log(add(1, 7));

const subtract = (a, b) => a - b;

console.log(subtract(0, 10));

const multiply = a => {
    return a.length 
    ? a.reduce((accumulator, nextNumber) => accumulator * nextNumber)
    : 0;
}

console.log(multiply([3, 10, 2]));

const divide = (a, b) => { 
    return (b != 0)
    ? a / b
    : "OOPS"
}

console.log(divide(10, 3));

