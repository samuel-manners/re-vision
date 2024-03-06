import { useCallback } from "react"; // import useRef
import sendImageToAPI from './functions/uploadImage.js';

// Captures Photo
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

export {
    capture,
    retake,
    sendPhoto
};
