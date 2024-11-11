import React, { useState } from "react";

const ARView = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleStartAR = () => {
    setIsCameraActive(true);
  };

  const handleStopAR = () => {
    setIsCameraActive(false);
  };

  return (
    <div>
      {/* Button to start AR */}
      <button onClick={handleStartAR}>Start AR</button>

      {/* AR Scene that appears when camera is active */}
      {isCameraActive && (
        <div style={{ position: "relative", width: "100%", height: "400px" }}>
          <a-scene
            embedded
            arjs="sourceType: webcam; debugUIEnabled: false;"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Define AR Marker (could be "hiro" or custom) */}
            <a-marker preset="hiro">
              {/* 2D Image (PNG) of dog */}
              <a-image
                src="/assets/happy-running-dog.png"
                scale="2 2 2"
                position="0 0 0"
                rotation="0 0 0"
              ></a-image>
            </a-marker>

            {/* Camera Entity for AR */}
            <a-entity camera></a-entity>
          </a-scene>
        </div>
      )}

      {/* Button to stop AR */}
      {isCameraActive && <button onClick={handleStopAR}>Stop AR</button>}
    </div>
  );
};

export default ARView;
