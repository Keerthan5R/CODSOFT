let display = document.getElementById('result');
let currentInput = '';

// Add event listeners to all number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

// Add event listeners to operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate();
        } else {
            currentInput += button.textContent === '×' ? '*' : 
                           button.textContent === '÷' ? '/' : 
                           button.textContent;
            display.value = currentInput;
        }
    });
});

// Clear display function
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// Calculate function
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
