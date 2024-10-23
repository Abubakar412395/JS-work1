let currentInput = '';

function getValue(value) {
    currentInput += value;
    document.getElementById('inputField').value = currentInput;
}

function clrAll() {
    currentInput = '';
    document.getElementById('inputField').value = currentInput;
}

function equal() {
    try {
        const result = eval(currentInput.replace(/Math\./g, 'Math.'));
        currentInput = result.toString();
        document.getElementById('inputField').value = currentInput;
    } catch (error) {
        document.getElementById('inputField').value = 'Error';
        currentInput = '';
    }
}

function deleteChar() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('inputField').value = currentInput;
}

function square() {
    try {
        const result = Math.pow(eval(currentInput), 2);
        currentInput = result.toString();
        document.getElementById('inputField').value = currentInput;
    } catch (error) {
        document.getElementById('inputField').value = 'Error';
        currentInput = '';
    }
}

function sqrt() {
    try {
        const result = Math.sqrt(eval(currentInput));
        currentInput = result.toString();
        document.getElementById('inputField').value = currentInput;
    } catch (error) {
        document.getElementById('inputField').value = 'Error';
        currentInput = '';
    }
}


