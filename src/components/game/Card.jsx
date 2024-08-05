/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export default function Card({ value, onClick }) {
  const [characterInfo, setCharacterInfo] = useState({
    characterName: "",
    characterImageUrl: "",
  });

  console.log(characterInfo.characterName);
  useEffect(() => {
    async function getCharacterInfo(id) {
      const response = await fetch(
        `https://thronesapi.com/api/v2/Characters/${id}`,
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      const name = json.firstName + " " + json.lastName;
      const imageUrl = json.imageUrl;
      setCharacterInfo({ characterName: name, characterImageUrl: imageUrl });
    }
    getCharacterInfo(value);
  }, []);

  return (
    <div className="card" onClick={onClick}>
      <div className="character-image-container">
        <img className="character-image"
          src={characterInfo.characterImageUrl}
          alt={`Image of ${characterInfo.characterName} from the show Game of Thrones`}
        />
      </div>
      <div className="character-name">{characterInfo.characterName}</div>
    </div>
  );
}
