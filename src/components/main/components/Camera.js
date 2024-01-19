import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useRef

const CustomWebcam = () => {
  const webcamRef = useRef(null); // create a webcam reference
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };


  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam //height={960}
          //width={540}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8} />
      )}
      <div className="btn-container">
        <button>BrowsePhotos</button>
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
        <button></button>
      </div>
    </div>
  );
};
export default CustomWebcam;


