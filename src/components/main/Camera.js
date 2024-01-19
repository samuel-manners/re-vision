//Code Ref: https://blog.logrocket.com/using-react-webcam-capture-display-images/
import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { saveAs } from 'file-saver';
//import { sendImage } from './functions/save.js';

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

  const saveImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const blob = dataURItoBlob(imageSrc);
    saveAs(blob, "my-image.jpg");
  };

  // Convert data URI to binary array
  function dataURItoBlob(dataURI) {
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
        
        {imgSrc ? (
          <>
            <button onClick={retake}>Retake photo</button>
            <button onClick={saveImage}>Save photo</button>
          </>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  );
};
export default CustomWebcam;
