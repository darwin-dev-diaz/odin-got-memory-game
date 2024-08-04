import "../styles/NonGameScreen.css"

export default function HomeScreen() {
  return (
    <div className="screen">
      <h1 className="screen-title">HOME SCREEN: Game Of Memory</h1>
      <button className="play-button">Play</button>
      <div className="home-screen-info">
        For the best experience, please enable game music using the melody
        button below !
      </div>
      <div className="ui"></div>
    </div>
  );
}
