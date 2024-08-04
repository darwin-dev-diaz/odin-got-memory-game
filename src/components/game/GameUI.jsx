/* eslint-disable react/prop-types */
export default function GameUI({onHome}) {
  return (
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
  );
}
