import { useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import HomeScreen from "./components/HomeScreen";
import LoseScreen from "./components/LoseScreen";
import WinScreen from "./components/WinScreen";
import GameScreen from "./components/game/GameScreen";
import backgroundVideo from "./assets/got-video.mp4"

function App() {
  const [currentScreen, setCurrentScreen] = useState(3);
  const [bestScore, setBestScore] = useState(0);
  const screenArray = [
    <HomeScreen key={0} onPlay={() => setCurrentScreen(3)} />,
    <LoseScreen key={1} onHome={() => setCurrentScreen(0)} />,
    <WinScreen key={2} onHome={() => setCurrentScreen(0)} />,
    <GameScreen
      key={3}
      onHome={() => setCurrentScreen(0)}
      onLose={() => setCurrentScreen(1)}
      onWin={() => setCurrentScreen(2)}
      bestScore={bestScore}
      setBestScore={setBestScore}
    />,
  ];

  return (
    <>
      <video id="background-video" autoPlay loop muted>
        <source
          src={backgroundVideo}
          type="video/mp4"
        />
      </video>
      <div className="app">{screenArray[currentScreen]}</div>
    </>
  );
}

export default App;
