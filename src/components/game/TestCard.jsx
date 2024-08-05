import { useEffect, useRef, useState } from "react";
import "../../styles/TestCard.css";

export default function TestCard({ value, onClick }) {
  const [characterInfo, setCharacterInfo] = useState({
    characterName: "",
    characterImageUrl: "",
  });

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
  }, [value]);

  // FOR ROTATION
  let bounds;
  const inputRef = useRef();
  const glowRef = useRef();
  const rotateToMouse = (e) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance) * 2}deg
            )
            `;
    // console.log(center.y / 100);
    glowRef.current.style.backgroundImage = `
            radial-gradient(
                circle at
                ${center.x * 2 + bounds.width / 2}px
                ${center.y * 2 + bounds.height / 2}px,
                #ffffff55,
                #0000000f
                )
                `;
  };
  const removeListener = () => {
    inputRef.current.style.transform = "";
    inputRef.current.style.background = "";
  };
  useEffect(() => {});
  // FOR ROTATION
  return (
    <div
      className="card-app"
      onClick={() => {
        removeListener();
        onClick();
      }}
    >
      <div
        ref={inputRef}
        className="card"
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
      >
        <img
          className="card-image"
          src={characterInfo.characterImageUrl}
          alt={`Image of ${characterInfo.characterName} from the show Game of Thrones`}
        />
        <div className="character-name">{characterInfo.characterName}</div>
        <div ref={glowRef} className="glow" />
      </div>
    </div>
  );
}
