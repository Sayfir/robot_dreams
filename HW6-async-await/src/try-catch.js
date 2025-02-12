async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
}

async function fetchWithFallback(primaryUrl, fallbackUrl) {
    try {
        return await fetchData(primaryUrl);
    } catch (error) {
        console.error('Primary request failed: ', error.message);
        try {
            return await fetchData(fallbackUrl);
        } catch (fallbackError) {
            console.error('Fallback request also failed with error: ', fallbackError.message);
            throw new Error('Error: Both requests failed');
        }
    }
}

const errorUrl = 'https://invalid-url.example.com';
const fallbackUrl = 'https://jsonplaceholder.typicode.com/users';

//Only First url is invalid
const responseData = await fetchWithFallback(errorUrl, fallbackUrl);
console.log(responseData[3].name);

//Both urls are invalid
const responseData1 = await fetchWithFallback(errorUrl, errorUrl);
console.log(responseData1[3].id);
