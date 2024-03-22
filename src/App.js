import { useState, useEffect } from "react";
import "./App.css";
import Home from "./home/home";
import HomeMain from "./home/homeMain";

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [mainHome, setMainHome] = useState(false);

  useEffect(() => {
    if (showVideo) {
      setMainHome(true);
    }
  }, [showVideo]);
  return (
    <div className="App">
      {/* {showVideo ? (
        <img src="/gifAnimation.gif" className="glitchVideo" />
      ) : ( */}
        <>
          {mainHome ? (
            <HomeMain />
          ) : (
            <Home setShowVideo={setShowVideo} showVideo={showVideo} />
          )}
        </>
      {/* )} */}
    </div>
  );
}

export default App;
