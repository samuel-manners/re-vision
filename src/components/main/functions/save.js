// Function for sending photo
export async function sendImage(imageSrc) {
    const runFunction = false;
    if (runFunction === true) {
        try {

            // get the image file as a blob
            const responses = await fetch(imageSrc);
            const blob = await responses.blob();

            // create a FormData object and append the blob
            const formData = new FormData();
            formData.append("image", blob, "image.jpg");

            // send the request with the FormData as the body
            const response = await fetch("http://sam141.brighton.domains/cloudvisionapi", {
                method: "POST",
                body: formData,
            })
            // handle the response
            if (response.ok) {
                console.log("Image sent successfully");
                console.log(response);
            } else {
                console.error("Error sending image - response as follows:");
                console.log(response);
            }

        } catch (error) {
            console.log("Error when sending image - error as follows:");
            console.log(error);
        };
    } else {
        console.log('Not currently sending responses');
    }
};