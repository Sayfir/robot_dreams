function calculateResults(val1, val2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val2 !== 0 ? val1 / val2 : 'Error: Division by zero';
            break;
        default:
            result = 'Error: Invalid operator';
    }

    console.log('Data type is: ' + typeof result + ' \nResult is: ' + result);
}

calculateResults(2, '2', '+');
calculateResults('2', '2', '+');
calculateResults(10, 20, '-');
calculateResults(true, '1', '*');
calculateResults(true, false, '+');
calculateResults(undefined, NaN, '+');
calculateResults(undefined, 2, '-');
calculateResults(undefined, 'true', '/');
calculateResults(undefined, 'false', '+');
calculateResults(NaN, '33', '+');
