/* eslint-disable react/prop-types */
import "../styles/NonGameScreen.css"

export default function LoseScreen({onHome}) {
  return (
    <div className="screen">
      <h1 className="screen-title lose-title">YOU LOSE</h1>
      <button className="home-button" onClick={onHome}>HOME</button>
    </div>
  );
}
