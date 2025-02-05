const comparator = true;

//Comparison operators
function logResultForComparisonOperators(val1, val2) {
    switch (comparator) {
        case val1 == val2:
            console.log('== option worked');
            break;
        case val1 === val2:
            console.log('=== option worked');
            break;
        case val1 > val2:
            console.log('> option worked');
            break;
        case val1 < val2:
            console.log('< option worked');
            break;
        default:
            console.log('No condition matched');
            break;
    }
}

logResultForComparisonOperators(true, false);
logResultForComparisonOperators(2, '2');
logResultForComparisonOperators(10, 33);
logResultForComparisonOperators(NaN, 0);
logResultForComparisonOperators(undefined, 0);

//Logical operators
function logResultForLogicalOperators(val1, val2) {
    switch (comparator) {
        case val1 && val2:
            console.log('&& option worked');
            break;
        case val1 || val2:
            console.log('|| option worked');
            break;
        case val1 !== val2:
            console.log('!= option worked');
            break;
        default:
            console.log('No condition matched');
            break;
    }
}

logResultForLogicalOperators(true, false);
logResultForLogicalOperators(true, '1');
logResultForLogicalOperators(0, 'hello');
logResultForLogicalOperators(0, 0);
logResultForLogicalOperators(NaN, '1');
logResultForLogicalOperators(true, undefined);
