const sumArraysIndexes = (arr: number[] | string[]): number | string | null => {
    if (arr.length === 0) return null;
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((acc, curr) => acc + curr);
    } else {
        return (arr as string[]).reduce((acc, curr) => acc + curr);
    }
};

const emptyNumArr: number[] = [];
const emptyStrArr: string[] = [];
const sumOfNumbers = [10, 20, 30, 40, 50];
const sumOfStrings = ['Hello', ' ', 'World', '!'];

console.log(sumArraysIndexes(emptyNumArr));
console.log(sumArraysIndexes(emptyStrArr));
console.log(sumArraysIndexes(sumOfNumbers));
console.log(sumArraysIndexes(sumOfStrings));
