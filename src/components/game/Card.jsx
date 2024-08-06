/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export default function Card({ value, flipped, characterObj }) {
console.log(characterObj)

//   const [characterInfo, setCharacterInfo] = useState({
//     characterName: "",
//     characterImageUrl: "",
//   });

//   useEffect(() => {
//     async function getCharacterInfo(id) {

//       const response = await fetch(
//         `https://thronesapi.com/api/v2/Characters/${id}`,
//         {
//           mode: "cors",
//         }
//       );
//       const json = await response.json();
//       const name = json.firstName + " " + json.lastName;
//       const imageUrl = json.imageUrl;
//       setCharacterInfo({ characterName: name, characterImageUrl: imageUrl });
//     }

//     getCharacterInfo(value);
//   }, [value]);

  return (
    <>
      <div className={`cardFront ${flipped ? "flipped" : ""}`} id="front">
        <div className="character-image-container">
          <img
            className="character-image"
            src={characterObj ? characterObj.imageUrl : "ERROR"}
            alt={`Image of ${characterObj ? characterObj.name : "ERROR"} from the show Game of Thrones`}
          />
        </div>
        <div className="character-name">{characterObj ? characterObj.name : "ERROR"}</div>
      </div>
    </>
  );
}