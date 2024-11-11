import React, { useState, useEffect } from 'react';

const ARView = () => {
  const [isARActive, setIsARActive] = useState(false);

  const handleStartAR = () => {
    setIsARActive(true);
  };

  const handleStopAR = () => {
    setIsARActive(false);
  };

  return (
    <div>
      <button onClick={handleStartAR}>Start AR</button>

      {isARActive && (
        <a-scene
          embedded
          arjs="sourceType: webcam; debugUIEnabled: true; cameraParametersUrl: data/camera_para.dat;"
          style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}
        >
          {/* Define a marker for AR detection */}
          <a-marker preset="hiro">
            {/* Display the dog image in AR */}
            <a-image
              src="/assets/your-dog-image.png" // Replace with your PNG path
              scale="1 1 1"
              position="0 0 0"
              rotation="0 0 0"
            ></a-image>
          </a-marker>

          {/* Camera setup */}
          <a-entity camera></a-entity>
        </a-scene>
      )}

      {isARActive && <button onClick={handleStopAR}>Stop AR</button>}
    </div>
  );
};

export default ARView;
