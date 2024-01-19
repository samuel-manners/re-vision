// Convert data URI to binary array
export function dataURItoBlob(dataURI) {
    // Split the data URI into parts
    let parts = dataURI.split(",");
    // Get the content type (image/jpeg)
    let type = parts[0].split(":")[1].split(";")[0];
    // Decode the base64 data
    let data = atob(parts[1]);
    // Create a binary array
    let array = [];
    for (var i = 0; i < data.length; i++) {
        array.push(data.charCodeAt(i));
    }
    // Return a Blob object
    return new Blob([new Uint8Array(array)], { type: type });
}