# Calculator

function getNumber(button) {
    (!calculator.number1) ? calculator.number1 = parseInt(button.id)
    : ((calculator.number1 && !calculator.operator) && !calculator.total) ? calculator.number1 += button.id
    : ((calculator.number1 && calculator.operator) && (!calculator.number2) || ((calculator.number1 && calculator.total) && !calculator.number2)) ? calculator.number2 = parseInt(button.id)
    : calculator.number2 += button.id;
}


case false:
            x = calculator.number2.length
            calculator.number2 = (x > 1)
            ? calculator.number2.slice(0,-1)
            : delete calculator.number2;
            break;
        case true:
            x = calculator.number1.length
            calculator.number1 = (x > 1) 
            ? calculator.number1.slice(0,-1)
            : delete calculator.number1;
            break;
    }