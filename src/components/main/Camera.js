//Code Ref: https://blog.logrocket.com/using-react-webcam-capture-display-images/

// import useRef, useState, useCallback, useEffect
import { useRef, useState, useCallback, useEffect } from "react";
// import Webcam component
import Webcam from "react-webcam";

const CustomWebcam = () => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  // Captures Photo
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  // Function for sending photo
  const sendImage = async () => {
    try {

      // get the image file as a blob
      const responses = await fetch(imgSrc);
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
      if (responses.ok) {
        console.log("Image sent successfully");
        console.log(responses);
      } else {
        console.error("Error sending image");
        console.log(responses);
      }

    } catch (error) {
      console.log("Error when sending image - error as follows:");
      console.log(error);
    };
  };

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          //height={960}
          //width={540}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}
      <div className="btn-container">
        <button>BrowsePhotos</button>
        {imgSrc ? (
          <>
            <button onClick={retake}>Retake photo</button>
            <button onClick={sendImage}>Send photo</button>
          </>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  );
};
export default CustomWebcam;
