/* eslint-disable react/prop-types */
import cardBack from "./card-back.jpg";
import "../../styles/TestCard2.css";
// import TestCardRotatingOne from "./TestCardRotatingOne";
import Card from "./Card";


export default function TestCard2({ value, onClick, flipped, characterObj }) {
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
          <Card
            flipped={flipped}
            value={value}
            characterObj={characterObj}
          ></Card>
        </div>
      </div>
    </>
  );
}
