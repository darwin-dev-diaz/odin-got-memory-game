/* eslint-disable react/prop-types */
import "../styles/NonGameScreen.css"

export default function HomeScreen({onPlay}) {
  return (
    <div className="screen">
      <h1 className="screen-title">GAME OF MEMEROY</h1>
      <button className="play-button" onClick={onPlay}>Play</button>
      <div className="home-screen-info">
        For the best experience, enable music using the melody button below!
      </div>
    </div>
  );
}
