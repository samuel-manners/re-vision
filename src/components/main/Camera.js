//Code Ref: https://blog.logrocket.com/using-react-webcam-capture-display-images/
import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import sendImageToAPI from '../functions/uploadImage.js';
import './Camera.css';

const Camera = () => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it
  
  // Camera Functions
  const capture = useCallback(() => {
    const capturedImage = webcamRef.current.getScreenshot();
    setImgSrc(capturedImage);
  }, [webcamRef]);

  const sendPhoto = () => {
    sendImageToAPI(imgSrc);
  }

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className="camera-container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}
      <div className="btn-container">

        {imgSrc ? (
          <>
            <button
              className='retake-button'
              onClick={retake}>Retake photo</button>
            <button
              className='send-button'
              onClick={sendPhoto}>Detect Items</button>
          </>
        ) : (
          <>
            <button
              className='capture-button'
              onClick={capture}>Capture photo</button>
          </>
        )}
      </div>
    </div>
  );
};
export default Camera;
