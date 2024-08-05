/* eslint-disable react/prop-types */
import "../../styles/GameScreen.css";
import ScoreDisplay from "./ScoreDisplay";
import CardDisplay from "./CardDisplay";
import DifficultyDisplay from "./DifficultyDisplay";
import GameUI from "./GameUI";
import Card from "./Card";
import { useState } from "react";

export default function GameScreen({ onHome, onLose }) {
//   const [level, setLevel] = useState(1);
    const [level, setLevel] = useState(0);
  const levelDetails = [
    { previousCards: 2, totalCards: 4, maxScore: 5 },
    { previousCards: 5, totalCards: 7, maxScore: 13 },
    { previousCards: 11, totalCards: 12, maxScore: 22 },
  ];
    const [clickedCards, setClickedCards] = useState([]);
//   const [clickedCards, setClickedCards] = useState([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
//   ]);
//   const [currentScore, setCurrentScore] = useState(11);
  const [currentScore, setCurrentScore] = useState(0);
  const [cardsOnDisplay, setCardsOnDisplay] = useState(
    returnRandomIntArray(4, [])
  );
  //   const [cardsOnDisplay, setCardsOnDisplay] = useState(
  //     returnRandomIntArray(4, [])
  //   );

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

  function returnRandomIntArray(quantity, newClickedCards) {
    // returns an specified number of random ints from 0-21
    // makes sure that the int isnt in clickedCards
    // makes sure the ints dont repeat
    const arr = [];
    while (arr.length < quantity) {
      var candidateInt = Math.floor(Math.random() * 22);
      if (
        arr.indexOf(candidateInt) === -1 &&
        newClickedCards.indexOf(candidateInt) === -1
      )
        arr.push(candidateInt);
    }
    return arr;
  }

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
      onLose();
    } else {
      // add the clicked card to the clickedCards array
      const newClickedCards = [...clickedCards, clickedValue];
      setClickedCards(newClickedCards);
      const newCurrentScore = currentScore + 1;
      setCurrentScore(newCurrentScore);
      let newLevel = level;
      if (newCurrentScore === levelDetails[level].maxScore) {
        newLevel = newLevel + 1;
        setLevel(newLevel);
      }
      // shuffle the deck with appropriate number of clicked cards. This depends on level and current number of clicked cards
      if (newClickedCards.length === 1) {
        setCardsOnDisplay(
          returnShuffledArray([
            newClickedCards[0],
            ...returnRandomIntArray(3, newClickedCards),
          ])
        );
      } else {
        console.log(newClickedCards);
        const previouslyClickedCards = returnShuffledArray(
          newClickedCards
        ).slice(0, levelDetails[newLevel].previousCards);

        const nonClickedCards = returnRandomIntArray(
          levelDetails[newLevel].totalCards -
            levelDetails[newLevel].previousCards,
          newClickedCards
        );

        setCardsOnDisplay(
          returnShuffledArray([...previouslyClickedCards, ...nonClickedCards])
        );
      }
    }
  }

  return (
    <div className="screen">
      <ScoreDisplay currentScore={currentScore}></ScoreDisplay>
      <CardDisplay level={level}>
        {cardsOnDisplay.map((int) => {
          return deck[int];
        })}
      </CardDisplay>
      <DifficultyDisplay></DifficultyDisplay>
      <GameUI onHome={onHome}></GameUI>
      <button
        onClick={() => {
          console.log({ level, clickedCards, currentScore, cardsOnDisplay });
        }}
      >
        TEST
      </button>
    </div>
  );
}
