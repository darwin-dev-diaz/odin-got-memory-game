import { useState } from "react";
import "./styles/reset.css

";
import "./styles/App.css";

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

  const [currentScreen, setCurrentScreen] = useState("home");

  return <></>;
}

export default App;
