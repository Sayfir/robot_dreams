async function getJsonData(request) {
    const res = await fetch(request);
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
}

const responseData = await getJsonData('https://jsonplaceholder.typicode.com/users/');

console.log(responseData[0].email);
console.log(responseData[4].username);
