/* eslint-disable react/prop-types */
import "../../styles/GameScreen.css";
import ScoreDisplay from "./ScoreDisplay";
import CardDisplay from "./CardDisplay";
import DifficultyDisplay from "./DifficultyDisplay";
import Card from "./Card";

import { useState, useEffect } from "react";

let flippedO = true;

export default function GameScreen({
  onLose,
  onWin,
  bestScore,
  setBestScore,
  characterInfoList,
}) {
  const [level, setLevel] = useState(0);
  const levelDetails = [
    { previousCards: 2, totalCards: 4, maxScore: 5 },
    { previousCards: 5, totalCards: 7, maxScore: 13 },
    { previousCards: 11, totalCards: 12, maxScore: 22 },
  ];
  const [clickedCards, setClickedCards] = useState([]);

  const [currentScore, setCurrentScore] = useState(0);
  const [cardsOnDisplay, setCardsOnDisplay] = useState(
    returnRandomIntArray(4, [])
  );

  const deck = [
    ...Array(22)
      .keys()
      .map((item) => {
        return (
          <Card
            key={item}
            characterObj={characterInfoList[item]}
            onClick={() => {
              onCardClick(item);
            }}
            flipped={flippedO}
          ></Card>
        );
      }),
  ];

  // get cards to flip on load
  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    async function flipCards() {
      await delay(1000);
      const cards = document.querySelectorAll(".cardFront, .cardBack");
      cards.forEach((card) => card.classList.remove("flipped"));
      flippedO = false;
    }

    flipCards();
  }, [currentScore]);

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
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      onLose();
    } else {
      flippedO = true;
      const cards = document.querySelectorAll(".cardFront, .cardBack");
      cards.forEach((card) => card.classList.add("flipped"));
      cards[0].addEventListener(
        "transitionend",
        () => {
          // add the clicked card to the clickedCards array
          const newClickedCards = [...clickedCards, clickedValue];
          setClickedCards(newClickedCards);
          const newCurrentScore = currentScore + 1;
          if (newCurrentScore === 22) {
            setBestScore(22);
            onWin();
          }
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
            const previouslyClickedCards = returnShuffledArray(
              newClickedCards
            ).slice(0, levelDetails[newLevel].previousCards);

            const nonClickedCards = returnRandomIntArray(
              levelDetails[newLevel].totalCards -
                levelDetails[newLevel].previousCards,
              newClickedCards
            );

            setCardsOnDisplay(
              returnShuffledArray([
                ...previouslyClickedCards,
                ...nonClickedCards,
              ])
            );
          }
        },
        { once: true }
      );
    }
  }

  return (
    <div className="screen">
      <ScoreDisplay
        currentScore={currentScore}
        bestScore={bestScore}
      ></ScoreDisplay>
      <CardDisplay level={level}>
        {cardsOnDisplay.map((int) => {
          return deck[int];
        })}
      </CardDisplay>
      <DifficultyDisplay level={level}></DifficultyDisplay>
    </div>
  );
}
