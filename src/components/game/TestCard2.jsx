/* eslint-disable react/prop-types */
import cardBack from "./card-back.jpg"
import "../../styles/TestCard2.css";
import TestCardRotatingOne from "./TestCardRotatingOne";

export default function TestCard() {
  function onClick() {
    const front = document.getElementById("front");
    const back = document.getElementById("back");
    front.classList.toggle("flipped");
    back.classList.toggle("flipped");
  }

  return (
    <>
      <div className="container" onClick={onClick}>
        <div className="card-flippable">
          <div id="back" className="cardBack">
            <img  className="card-back-image" src={cardBack} alt="" />
          </div>
          <TestCardRotatingOne front={true} value={10}></TestCardRotatingOne>
        </div>
      </div>
    </>
  );
}
