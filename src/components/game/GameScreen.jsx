/* eslint-disable react/prop-types */
import "../../styles/GameScreen.css";

export default function GameScreen({ onHome }) {
  return (
    <div className="screen">
      <div className="score-container">
        <div className="best-score">Best Score: 0</div>
        <div className="current-score">Current Score: 0</div>
      </div>

      <div className="card-container">
        <div className="card">This is a card Lmao</div>
        <div className="card">This is a card Lmao</div>
        <div className="card">This is a card Lmao</div>
        <div className="card">This is a card Lmao</div>
      </div>

      <div className="difficulty-display">Easy</div>

      <div className="ui">
        <button className="home-button" onClick={onHome}>
          HOME
        </button>
        <div className="ui-right">
          <button className="toggle-music-button" onClick={null}>
            MUSIC
          </button>
          <button className="toggle-sound-button" onClick={null}>
            SOUND
          </button>
        </div>
      </div>
    </div>
  );
}
