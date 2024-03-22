//Code Ref: https://blog.logrocket.com/using-react-webcam-capture-display-images/
import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import sendImageToAPI from '../functions/uploadImage.js';
import '../../components.css';

const Camera = () => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it
  const navigate = useNavigate();

  // Camera Functions
  const capture = useCallback(() => {
    const capturedImage = webcamRef.current.getScreenshot();
    setImgSrc(capturedImage);
  }, [webcamRef]);

  async function sendPhoto() {
    const results = await sendImageToAPI(imgSrc);
    if (results != null) {
      const jsonResults = JSON.stringify(results);
      const url = '/searchResults/' + jsonResults;
      navigate(url)
    } else{
      alert('No recyclable results found in image - Ensure logo is visible all images taken');
    }
  }

  const retake = () => {
    setImgSrc(null);
  };

  const videoConstraints = {
    facingMode: 'environment', // Set to 'environment' for rear camera
    width: { min: 360, max: 410},
    height: {min: 680},
  };


  return (
    <div className="camera-container">
      <h4>Detect item by taking a picture of the brand logo</h4>
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
          videoConstraints={videoConstraints}
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