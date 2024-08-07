import { useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import HomeScreen from "./components/HomeScreen";
import LoseScreen from "./components/LoseScreen";
import WinScreen from "./components/WinScreen";
import GameScreen from "./components/game/GameScreen";
import backgroundVideo from "./assets/got-video.mp4";
import backgroundSong from "./assets/got-song.mp3";
import MusicOffIcon from "./assets/MusicOffIcon.jsx";
import MusicOnIcon from "./assets/MusicOnIcon.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const screenArray = [
    <HomeScreen key={0} onPlay={() => setCurrentScreen(3)} />,
    <LoseScreen
      key={1}
      onHome={() => setCurrentScreen(0)}
      audioPlaying={audioPlaying}
    />,
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
      <audio autoPlay loop src={backgroundSong}></audio>
      <video id="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="app-container">
        <div className="app">{screenArray[currentScreen]} </div>
        <div className="ui-container">
          <button
            className="toggle-music-button"
            onClick={() => {
              const audio = document.querySelector("audio");
              if (audioPlaying) {
                audio.pause();
                setAudioPlaying(false);
              } else {
                audio.volume = 0.6;
                audio.play();
                setAudioPlaying(true);
              }
            }}
          >
            {audioPlaying ? <MusicOffIcon /> : <MusicOnIcon />}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
