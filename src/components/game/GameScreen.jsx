/* eslint-disable react/prop-types */
import "../../styles/GameScreen.css";
import ScoreDisplay from "./ScoreDisplay";
import CardDisplay from "./CardDisplay";
import DifficultyDisplay from "./DifficultyDisplay";
import GameUI from "./GameUI";
import Card from "./Card";
import { useState } from "react";

export default function GameScreen({ onHome, onLose }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [cardsOnDisplay, setCardsOnDisplay] = useState(
    returnShuffledArray([...Array(4).keys()])
  );

  function returnRandomIntArray(quantity) {
    const arr = [];
    while (arr.length < quantity) {
      var candidateInt = Math.floor(Math.random() * 22);
      if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
    }
    return arr;
  }

  const deck = [
    ...Array(22)
      .keys()
      .map((item) => {
        return (
          <Card
            value={item}
            key={item}
            onClick={() => onCardClick(item)}
          ></Card>
        );
      }),
  ];

  function returnShuffledArray(array) {
    array = typeof array === "undefined" ? cardsOnDisplay : array;
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function onCardClick(clickedValue) {
    if (clickedCards.includes(clickedValue)) {
      // if the card has already been clicked
      console.log("The card is already in the array");
      // reset the clickedCards array
      setClickedCards([]);
      // reset the currentScore (maybe already does this on unmount)
      setCurrentScore(0);
      // display the you lose screen
      onLose();
    } else {
      // if the card has not been cliked yet
      console.log("The card is not in the array");
      // add the clicked card to the clickedCards array
      setClickedCards([...clickedCards, clickedValue]);
      // update the current score
      setCurrentScore(currentScore + 1);
      //////// LATER if the current score is higher than the best score, update the best score as well
      // shuffle the deck
      setCardsOnDisplay(returnShuffledArray());
      console.log({ cardsOnDisplay });
      // show the new deck
    }
  }

  return (
    <div className="screen">
      <ScoreDisplay currentScore={currentScore}></ScoreDisplay>
      <CardDisplay>
        {returnRandomIntArray(4).map((int) => {
          return deck[int];
        })}
      </CardDisplay>
      <DifficultyDisplay></DifficultyDisplay>
      <GameUI onHome={onHome}></GameUI>
    </div>
  );
}
