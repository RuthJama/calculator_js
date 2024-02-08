function appendToDisplay(value) {
    let currentValue = document.getElementById('calc_result').value;

    document.getElementById('calc_result').value = ((currentValue == '0' || currentValue.includes('=')) ? value : currentValue + value)
}

function clearResult() {
    document.getElementById('calc_result').value = '0';
}

function toggleSign() {
    let displayValue = document.getElementById('calc_result').value;

    if(displayValue !== '' && displayValue !== 'Error') {
        let toggledValue = parseFloat(displayValue) * -1;
       
        if(toggledValue < 0 && displayValue.includes('-')) {
            document.getElementById('calc_result').value = '(' + toggledValue + ')';
        } else {
            document.getElementById('calc_result').value = toggledValue;
        }
    }
}

function calculateResult() {
    let calculateDisplay = document.getElementById('calc_result').value;
    try {
        calculateDisplay = calculateDisplay.replace(/%/g, '/100');

        let result = eval(calculateDisplay);
        document.getElementById('calc_result').value = result
    } catch (error) {
        console.error('Error evaluating expression:', error);
        document.getElementById('calc_result').value = 'Error';
    }
}