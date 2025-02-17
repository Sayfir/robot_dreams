// Using for loop
function sumArrays(arr: number[] | string[]): number | string | null {
    if (arr.length === 0) return null;
    if (typeof arr[0] === 'number') {
        let sum = 0;
        for (const num of arr as number[]) {
            sum += num;
        }
        return sum;
    } else {
        let sum = '';
        for (const str of arr as string[]) {
            sum += str;
        }
        return sum;
    }
}

//Using reduce
function sumArrayReduce(arr: number[] | string[]): number | string | null {
    if (arr.length === 0) return null;
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((acc, curr) => acc + curr, 0);
    } else {
        return (arr as string[]).reduce((acc, curr) => acc + curr, '');
    }
}

const emptyNum: number[] = [];
const emptyStr: string[] = [];
const numbers = [10, 20, 30, 40, 50];
const strings = ['Hello', ' ', 'World', '!'];

console.log(sumArrays(emptyNum));
console.log(sumArrays(emptyStr));
console.log(sumArrays(numbers));
console.log(sumArrays(strings));
console.log(sumArrayReduce(numbers));
console.log(sumArrayReduce(strings));
