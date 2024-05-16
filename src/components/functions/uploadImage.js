import axios from 'axios';

export default async function sendImageToAPI(imageFile) {
    try {
        // Convert Image Type
        const apiEndpoint = 'https://re-vision-searchapi.azurewebsites.net/cloudvisionapi';
        // Headers configuration
        const headers = { 'Content-Type': 'application/json' };
        const requestBody = { image: imageFile };


        // Make a POST request to the API with the image data
        var response = await axios.post(apiEndpoint, requestBody, { headers });
        if (response.status === 404) {
            //Returns no data if data couldn't be found
            return null;
        } else {
            const data = response.data;
            return data;
        }
    } catch (error) {
        console.error('Error sending image to API:', error.message, " ", response);
    }
}