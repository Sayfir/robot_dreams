//Comparison operators
function logResultForComparisonOperators(val1, val2) {
    if (val1 == val2) {
        console.log('== option worked');
    } else if (val1 === val2) {
        console.log('=== option worked');
    } else if (val1 > val2) {
        console.log('> option worked');
    } else if (val1 < val2) {
        console.log('< option worked');
    } else {
        console.log('No condition matched');
    }
}

logResultForComparisonOperators(true, false);
logResultForComparisonOperators(2, '2');
logResultForComparisonOperators(10, 33);
logResultForComparisonOperators(NaN, 0);
logResultForComparisonOperators(undefined, 0);

//Logical operators
function logResultForLogicalOperators(val1, val2) {
    if (val1 && val2) {
        console.log('&& option worked');
    } else if (val1 || val2) {
        console.log('|| option worked');
    } else if (val1 !== val2) {
        console.log('!= option worked');
    } else {
        console.log('No condition matched');
    }
}

logResultForLogicalOperators(true, false);
logResultForLogicalOperators(true, '1');
logResultForLogicalOperators(0, 'hello');
logResultForLogicalOperators(0, 0);
logResultForLogicalOperators(NaN, '1');
logResultForLogicalOperators(true, undefined);
