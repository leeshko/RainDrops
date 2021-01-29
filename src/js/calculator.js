let calculatorDisplay = document.querySelector('.display');
const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operator');
let displayValue;   // value displayed on calc screen
let displayResult;  // value after pressing enter

function deleteDisplay() {
    displayValue = undefined;
    calculatorDisplay.innerHTML = '';
}

function clearDisplay(){
    calculatorDisplay.innerHTML = displayValue.substring(0, displayValue.length - 1);
    displayValue = calculatorDisplay.innerHTML;
}

export function calculatorPressOperator() {
    operatorButtons.forEach(operatorButton => { 
        operatorButton.addEventListener('click', function() {
            if (operatorButton.innerHTML === 'Delete') {
                deleteDisplay();
            } else if (operatorButton.innerHTML === 'Clear') {
                clearDisplay();
            } else if (operatorButton.innerHTML === 'Enter') {
            console.log('Enter Pressed');
            displayResult = calculatorDisplay.innerHTML;
            sessionStorage.setItem('displayResult', displayResult);
            deleteDisplay();
            } return;
        });
    });
    window.addEventListener('keydown', function (button){
        if(button.key === 'Delete') {
            deleteDisplay();
        } else if (button.key === 'Backspace') {
            clearDisplay();
        } else if (button.key === 'Enter') {
            console.log('Enter Pressed');
            displayResult = calculatorDisplay.innerHTML;
            sessionStorage.setItem('displayResult', displayResult);
            deleteDisplay();
        }
        return;
    })
}

export function calculatorPressNumber() {
    numButtons.forEach(numButton => { 
        numButton.addEventListener(
            'click', function() {
                if(!displayValue) {
                    calculatorDisplay.innerHTML = numButton.innerHTML;  
                    displayValue = numButton.innerHTML;         
                } else if (displayValue > 99) {
                    return;
                } else {
                calculatorDisplay.innerHTML += numButton.innerHTML;
                displayValue = calculatorDisplay.innerHTML;  
                }
            })
    });
    window.addEventListener('keydown', function (button){
        if(parseInt(button.key)) {
            if(!displayValue) {
                calculatorDisplay.innerHTML = button.key;  
                displayValue = button.key;         
            } else if (displayValue > 9999) {
                return;
            } else {
            calculatorDisplay.innerHTML += button.key;
            displayValue = calculatorDisplay.innerHTML;  
            }
            return;
        }
    })
}