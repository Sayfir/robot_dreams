const addIndexes = (arr) => arr[1] + arr[2];
const sumArrays = (arr) => arr.reduce((acc, curr) => acc + curr);

const numbers = [10, 20, 30, 40, 50];
const strings = ['Hello', ' ', 'World', '!'];

console.log(addIndexes(numbers));
console.log(addIndexes(strings));
console.log(sumArrays(numbers));
console.log(sumArrays(strings));
