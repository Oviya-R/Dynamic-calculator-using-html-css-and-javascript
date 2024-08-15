function calculating(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '/' && value !== '*' && value !== '-' && value !== '+') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearValues() {
    document.getElementById('display').textContent = '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        
        display.textContent = eval(display.textContent) || '0';
    } catch {
        display.textContent = 'Error';
    }
}
