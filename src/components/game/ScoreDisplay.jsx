/* eslint-disable react/prop-types */
export default function ScoreDisplay({currentScore, bestScore}) {
  return (
    <div className="score-container">
      <div className="best-score">Best Score: {bestScore}</div>
      <div className="current-score">Current Score: {currentScore}</div>
    </div>
  );
}
