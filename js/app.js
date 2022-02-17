document.getElementById('button-container').addEventListener('click', (e) => {
    const input = document.getElementById('display');
    const inputValue = input.value;

    if (e.target.innerText == '+' || e.target.innerText == '-' || e.target.innerText == '*' || e.target.innerText == '/' || e.target.innerText == '%' || e.target.innerText == '.') {
        input.value = inputValue + e.target.innerText;
    }
    if (isNaN(e.target.innerText)) {
        if (e.target.innerText == 'C') {
            input.value = '';
        } else if (e.target.innerText == '<') {
            input.value = inputValue.substr(0, inputValue.length - 1);
        }
    } else {
        input.value = inputValue + e.target.innerText;
    }
})

document.getElementById('equal').addEventListener('click', () => {
    const valueText = document.getElementById('display');
    const value = valueText.value;

    if (value.includes('+')) {
        numbers = value.split('+');
        let result = 0;
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        valueText.value = value + ' = ' + result;
    }
    else if (value.includes('-')) {
        numbers = value.split('-');
        let result = 0;
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
        valueText.value = value + ' = ' + result;
    }
    else if (value.includes('*')) {
        numbers = value.split('*');
        let result = 0;
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
        valueText.value = value + ' = ' + result;
    }
    else if (value.includes('/')) {
        numbers = value.split('/');
        let result = 0;
        result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        valueText.value = value + ' = ' + result;
    }
    else if (value.includes('%')) {
        numbers = value.split('%');
        let result = 0;
        result = parseFloat(numbers[0]) / 100 * parseFloat(numbers[1]);
        valueText.value = value + ' = ' + result;
    }
})