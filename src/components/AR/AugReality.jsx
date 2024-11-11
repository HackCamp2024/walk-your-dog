import React, { useState, useRef, useEffect } from 'react';

const ARView = () => {
  const [isARActive, setIsARActive] = useState(false);
  const videoRef = useRef(null);

  const handleStartAR = () => {
    setIsARActive(true);
  };

  const handleStopAR = () => {
    setIsARActive(false);
    // Stop the camera stream
    if (videoRef.current && videoRef.current.srcObject) {
      let stream = videoRef.current.srcObject;
      let tracks = stream.getTracks();
      tracks.forEach(track => track.stop()); // Stop each track
      videoRef.current.srcObject = null; // Clear the video stream
    }
  };

  useEffect(() => {
    // If AR mode is active, request camera access
    if (isARActive) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }).catch(error => console.error("Error accessing camera:", error));
    }
  }, [isARActive]);

  return (
    <div>
      {/* Button to start AR */}
      <button onClick={handleStartAR}>Start AR</button>

      {/* AR Scene: Display only when AR is active */}
      {isARActive && (
        <a-scene
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
          style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}
        >
          {/* Reference the video element for stopping the camera */}
          <video ref={videoRef} style={{ display: "none" }} />

          {/* Use an a-video element to display the webcam feed in the background */}
          <a-video
            srcObject={videoRef.current ? videoRef.current.srcObject : null}
            width="16"
            height="9"
            position="0 0 -5"
            rotation="0 0 0"
          ></a-video>

          {/* Dog PNG Image positioned in front of the user */}
          <a-entity position="0 1 -3">
            <a-image
              src="/assets/your-dog-image.png" // Path to your PNG
              scale="2 2 2"
              rotation="0 0 0"
            ></a-image>
          </a-entity>

          {/* Marker for optional tracking */}
          <a-marker preset="hiro"></a-marker>
          
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
