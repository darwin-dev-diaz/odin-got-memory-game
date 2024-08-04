/* eslint-disable react/prop-types */
import "../../styles/GameScreen.css";
import ScoreDisplay from "./ScoreDisplay";
import CardDisplay from "./CardDisplay";
import DifficultyDisplay from "./DifficultyDisplay";
import GameUI from "./GameUI";

export default function GameScreen({ onHome }) {
  return (
    <div className="screen">
      <ScoreDisplay></ScoreDisplay>
      <CardDisplay></CardDisplay>
      <DifficultyDisplay></DifficultyDisplay>
      <GameUI onHome={onHome}></GameUI>
    </div>
  );
}
