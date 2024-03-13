import axios from 'axios';

export default async function sendImageToAPI(imageFile) {
    try {
        // Convert Image Type
        const apiEndpoint = 'https://re-vision-database-server.mysql.database.azure.com/cloudvisionapi';

        // Headers configuration
        const headers = { 'Content-Type': 'application/json' };
        const requestBody = { image: imageFile };


        // Make a POST request to the API with the image data
        var response = await axios.post(apiEndpoint, requestBody, { headers });
        return response.data
    } catch (error) {
        console.error('Error sending image to API:', error.message, " ", response);
    }
}