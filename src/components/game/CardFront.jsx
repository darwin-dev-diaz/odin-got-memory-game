/* eslint-disable react/prop-types */
export default function Card({ flipped, characterObj }) {

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