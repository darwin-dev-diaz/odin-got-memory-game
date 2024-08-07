/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../styles/NonGameScreen.css";

export default function LoseScreen({ onHome, audioPlaying }) {
  useEffect(() => {
    const audio = document.querySelector("audio");
    if (audioPlaying) audio.playbackRate = 0.7;
    return function cleanUp() {
      audio.playbackRate = 1;
    };
  }, []);

  return (
    <div className="screen">
      <h1 className="screen-title lose-title">YOU LOSE</h1>
      <button className="home-button" onClick={onHome}>
        HOME
      </button>
    </div>
  );
}
