/* eslint-disable react/prop-types */
import cardBack from "./card-back.jpg";
import "../../styles/TestCard2.css";
// import TestCardRotatingOne from "./TestCardRotatingOne";
import CardFront from "./CardFront";


export default function TestCard2({onClick, flipped, characterObj }) {
  return (
    <>
      <div className="container" onClick={onClick}>
        <div className="card-flippable">
          <div
            id={"back"}
            className={`cardBack ${flipped ? "flipped" : ""}`}
          >
            <img className="card-back-image" src={cardBack} alt="" />
          </div>
          <CardFront
            flipped={flipped}
            characterObj={characterObj}
          ></CardFront>
        </div>
      </div>
    </>
  );
}
