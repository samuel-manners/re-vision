import {React, useRef, useState} from "react";
import {Camera} from "react-camera-pro";

const CameraComponent = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <div className="camera_element">
      // Create a reference to the camera element
      {image ? null : <Camera ref={camera} />}
      // When the button is clicked, take a photo and set the image state
      <button onClick={() => setImage(camera.current.takePhoto())}>
        Take photo
      </button>
      // Display the image using the src attribute 
      <img src={image} alt='Taken photo' max-width='80%' max-height='70%'/>
      </div>
  );
};

export default CameraComponent;
