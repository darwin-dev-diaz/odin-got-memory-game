/* eslint-disable react/prop-types */
import cardBack from "./card-back.jpg";
import "../../styles/TestCard2.css";
import TestCardRotatingOne from "./TestCardRotatingOne";

export default function TestCard2({ value, onClick }) {
  const containerName = "card-conatiner " + value;
  function onFlip() {
    const front = document.getElementById("front"+value);
    const back = document.getElementById("back"+value);
    front.classList.toggle("flipped");
    back.classList.toggle("flipped");
  }
  // issue is that its selecting

  return (
    <>
      <div className="container" onClick={onFlip}>
        <div className="card-flippable">
          <div id={"back"+value} className="cardBack">
            <img className="card-back-image" src={cardBack} alt="" />
          </div>
          <TestCardRotatingOne value={value}></TestCardRotatingOne>
        </div>
      </div>
    </>
  );
}
