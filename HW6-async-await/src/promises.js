function getJsonData(request) {
    return fetch(request)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch((e) => {
            console.error('Error fetching data', e);
        });
}

getJsonData('https://jsonplaceholder.typicode.com/users/').then((data) => console.log(data[0].email));
getJsonData('https://jsonplaceholder.typicode.com/users/').then((data) => console.log(data[4].username));
