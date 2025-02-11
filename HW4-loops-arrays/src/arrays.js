const stringArray = ['apple', 'banana', 'cherry', 'grape'];
const numberArray = [10, 20, 30, 40, 50];
const booleanArray = [true, false, true, false, true];
const anyArray = ['hello', 42, true, null, { key: 'value' }, [1, 2, 3]];

stringArray.push('orange');
console.log(stringArray);

numberArray.pop();
console.log(numberArray);

booleanArray.shift();
console.log(booleanArray);

anyArray.unshift('test');
console.log(anyArray);

anyArray.forEach((val, i) => console.log('Index ' + i + ' : ' + val));

console.log(numberArray.map((num) => num * 2));

console.log(anyArray.filter((val) => val == 42));

console.log(stringArray.includes('banana'));

console.log(numberArray.find((num) => num == 40));

console.log(anyArray.concat(numberArray));

console.log([...booleanArray, ...stringArray]);

console.log(stringArray.join(', '));

console.log(numberArray.sort((a, b) => b - a));
