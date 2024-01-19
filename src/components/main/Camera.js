//Code Ref: https://blog.logrocket.com/using-react-webcam-capture-display-images/
import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { saveAs } from 'file-saver';
//import { sendImage } from './functions/save.js';
import { dataURItoBlob } from './functions/dataURItoBlob.js';

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
    //Add from here to capture to get image saved in one hit
    const blob = dataURItoBlob(imageSrc);
    saveAs(blob, "my-image.jpg");
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
        
        {imgSrc ? (
          <>
            <button onClick={retake}>Retake photo</button>
          </>
        ) : (
          <>
          <button onClick={capture}>Capture photo</button>
          <button onClick={saveImage}>Save photo</button>
          </>
        )}
      </div>
    </div>
  );
};
export default CustomWebcam;
