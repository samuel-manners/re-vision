async function makeGetRequest(url) {
    try {
        const response = await fetch(url); // Make the GET request
        if (response.ok) {
            const data = await response.json(); // Parse the response body as JSON
            console.log(data); // Print the data to the console
        } else {
            console.error('Error making GET request:', response.status);
        }
    } catch (error) {
        console.error('Error with request:', error.message);
    }
}

// Example usage:
const apiUrl = ''; 
makeGetRequest(apiUrl);
