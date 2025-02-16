const sumArraysIndexes = (arr: number[] | string[]): number | string => {
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((acc, curr) => acc + curr);
    } else {
        return (arr as string[]).reduce((acc, curr) => acc + curr);
    }
};

const sumOfNumbers: number[] = [10, 20, 30, 40, 50];
const sumOfStrings: string[] = ['Hello', ' ', 'World', '!'];

console.log(sumArraysIndexes(sumOfNumbers));
console.log(sumArraysIndexes(sumOfStrings));
