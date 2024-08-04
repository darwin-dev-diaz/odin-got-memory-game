import { useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import HomeScreen from "./components/HomeScreen";
import LoseScreen from "./components/LoseScreen";
import WinScreen from "./components/WinScreen";
import GameScreen from "./components/game/GameScreen";

function App() {
  // const [characterId, setCharacterId] = useState(0);
  // const [imageUrl, setImageUrl] = useState(null);

  // useEffect(() => {
  //   (async function setNewCharacterImage() {
  //     const response = await fetch(
  //       `https://thronesapi.com/api/v2/Characters/${characterId}`
  //     );
  //     const json = await response.json();
  //     setImageUrl(json.imageUrl);
  //   })();
  // }, [characterId]);

  const [currentScreen, setCurrentScreen] = useState(3);
  const screenArray = [
    <HomeScreen key={0} onPlay={() => setCurrentScreen(3)} />,
    <LoseScreen key={1} onHome={() => setCurrentScreen(0)} />,
    <WinScreen key={2} onHome={() => setCurrentScreen(0)} />,
    <GameScreen key={3} onHome={() => setCurrentScreen(0)} />,
  ];

  return (
    <>
      <div className="app">{screenArray[currentScreen]}</div>
    </>
  );
}

export default App;
