const arr1 = [42, 'hello', true, '133', null, undefined, 7, 10, NaN, 0];

//Task #1
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (const el of arr1) {
    console.log(el);
}

let i = 0;
while (i < arr1.length) {
    console.log(arr1[i]);
    i++;
}

let l = 0;
do {
    console.log(arr1[l]);
    l++;
} while (l < arr1.length);

//Task #2
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

let k = 100;
while (k >= 0) {
    console.log(k);
    k -= 10;
}

let j = 100;
do {
    console.log(j);
    j -= 10;
} while (j >= 0);
