import { useEffect, useState } from "react";

function App() {
  const [characterId, setCharacterId] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => setImageUrl(json.imageUrl));
  }, [characterId]);

  return (
    <>
      <select
        name="characters"
        id="characterNumber"
        onChange={(e) => setCharacterId(Number(e.target.value))}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <img src={imageUrl} alt="" />
    </>
  );
}

export default App;
