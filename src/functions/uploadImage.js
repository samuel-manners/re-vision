import axios from 'axios';

export default async function sendImageToAPI(imageFile) {
    try {
        //Request Information
        const apiEndpoint = 'https://re-vision-searchapi.azurewebsites.net/cloudvisionapi';
        const headers = { 'Content-Type': 'application/json' };
        const requestBody = { image: imageFile };


        // Sends request data to Re-Vision API
        var response = await axios.post(apiEndpoint, requestBody, { headers });
        if (response.status === 404) {
            return null;
        } else {
            const data = response.data;
            return data;
        }
    } catch (error) {
        console.error('Error sending image to API:', error.message, " ", response);
    }
}