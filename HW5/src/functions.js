//Using for loop
function sumArrays(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//Using reduce
function sumArrayReduce(arr) {
    return arr.reduce((acc, curr) => acc + curr);
}

const numbers = [10, 20, 30, 40, 50];
const strings = ['Hello', ' ', 'World', '!'];

console.log(sumArrays(numbers));
console.log(sumArrays(strings));
console.log(sumArrayReduce(numbers));
console.log(sumArrayReduce(strings));
