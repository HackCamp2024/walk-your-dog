

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
            <button onClick={handleStartAR}>Start AR</button>
            {isCameraActive && (
                <div style={{ position: "relative" }}>
                    <a-scene
                        embedded
                        arjs="sourceType: webcam; debugUIEnabled: false;"
                        style={{ width: "100%", height: "100%" }}
                    >
                        {/* Define the marker for AR */}
                        <a-marker preset="hiro">
                            {/* 3D Dog Model (GLTF format) */}
                            <a-image
                                src="/assets/happy-running-dog.png)"
                                scale="2 2 2"
                                position="0 0 0"
                                rotation="0 0 0"
                            ></a-image>
                        </a-marker>

                        {/* Camera for AR */}
                        <a-entity camera></a-entity>
                    </a-scene>
                </div>
            )}
            {isCameraActive && (
                <button onClick={handleStopAR}>Stop AR</button>
            )}
        </div>
    );
};

export default ARView;