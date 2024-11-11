import React, { useState } from 'react';

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
      {/* Button to start AR */}
      <button onClick={handleStartAR}>Start AR</button>

      {/* AR Scene: Display when AR is active */}
      {isARActive && (
        <a-scene
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Fixed Position Image (displayed in front of the user) */}
          <a-entity position="0 1 -3">
            <a-image
              src="/assets/happy-running-dog.png" // Path to your PNG
              scale="2 2 2"
              rotation="0 0 0"
            ></a-image>
          </a-entity>

          {/* Camera for AR */}
          <a-entity camera></a-entity>
        </a-scene>
      )}

      {/* Button to stop AR */}
      {isARActive && <button onClick={handleStopAR}>Stop AR</button>}
    </div>
  );
};

export default ARView;
