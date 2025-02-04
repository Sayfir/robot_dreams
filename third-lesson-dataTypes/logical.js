//Comparison operators
function logResultForComparisonOperators(val1, val2) {
    console.log(`${val1} is greater than ${val2}: ${val1 > val2}`);
    console.log(`${val1} is less than ${val2}: ${val1 < val2}`);
    console.log(`${val1} is greater or equal ${val2}: ${val1 >= val2}`);
    console.log(`${val1} is less or equal ${val2}: ${val1 <= val2}`);
    console.log(`${val1} is Equal with type Coercion ${val2}: ${val1 == val2}`);
    console.log(`${val1} is Equal without type Coercion ${val2}: ${val1 === val2}`);
    console.log(`${val1} is NOT equal  ${val2}: ${val1 != val2}`);
}

logResultForComparisonOperators(1, 2);
logResultForComparisonOperators(2, '2');
logResultForComparisonOperators('3', '2');
logResultForComparisonOperators(true, true);
logResultForComparisonOperators(false, true);
logResultForComparisonOperators(NaN, 1);
logResultForComparisonOperators(undefined, '4');

//Logical operators
function logResultsForLogicalOperators(val1, val2, val3, val4) {
    console.log(val1 > val2 && val3 < val4);
    console.log(val1 > val2 || val3 < val4);
    console.log(!(val1 > val2));
    console.log('--------------');
}

logResultsForLogicalOperators(22, 10, 33, 44);
logResultsForLogicalOperators('22', 10, 33, '44');
logResultsForLogicalOperators(true, 0, true, false);
logResultsForLogicalOperators(NaN, '13', undefined, false);
