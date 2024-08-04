/* eslint-disable react/prop-types */
import "../styles/NonGameScreen.css"

export default function WinScreen({onHome}) {
  return (
    <div className="screen">
      <h1 className="screen-title win-title">WIN SCREEN: YOU WIN</h1>
      <button className="home-button" onClick={onHome}>HOME</button> 
    </div>
  );
}
