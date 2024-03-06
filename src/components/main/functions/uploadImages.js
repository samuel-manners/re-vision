import axios from 'axios';
import { Buffer } from 'buffer';
import dataURItoBlob from './dataURItoBlob.js';

export default async function sendImageToAPI(imageSrc) {
  try {
    // Convert the base64 image to a buffer
    const imageBuffer = Buffer.from(imageSrc, 'base64');
    const sendableImage = dataURItoBlob(imageBuffer);

    // Create a FormData object to send the image as a file
    const formData = new FormData();
    formData.append('image', sendableImage, 'image.jpeg');

    // Make an HTTP POST request to your API endpoint
    const apiUrl = 'https://sam141.brighton.domains/cloudvisionapi';
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Handle the API response (e.g., log success or handle errors)
    console.log('Image uploaded successfully:', response.data);
  } catch (error) {
    console.error('Error uploading image:', error.message);
    // Handle the error (e.g., show an error message to the user)
  }
}

