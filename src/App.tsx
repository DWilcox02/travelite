import { useState } from "react";
import PageContainer from "./components/page_container";

function App() {
    const [bgColour, setBgColour] = useState("bg-sky-500");
    const [bgVideo, setBgVideo] = useState("/backgrounds/vertical_white.mp4");

    function setTravelSection() {
        setBgColour("bg-sky-500");
        setBgVideo("/backgrounds/vertical_white.mp4");
    }

    function setArtSection() {
      setBgColour("bg-pink-500");
      setBgVideo("/backgrounds/horizontal_pink.mp4");
    }

    return (
        <div className="bg-video-container flex justify-center items-center h-screen">
            <video
                autoPlay
                loop
                muted
                playsInline
                src={bgVideo}
                typeof="video/mp4"
                className="transition-all duration-1000"
            >
                Video doesn't work in your browser
            </video>
            <div className={`flex justify-center items-center h-screen ${bgColour} bg-opacity-40 w-full p-4 transition-all duration-500`}>
                <PageContainer
                    setTravelSection={setTravelSection}
                    setArtSection={setArtSection}
                ></PageContainer>
            </div>
        </div>
    );
}

export default App;
