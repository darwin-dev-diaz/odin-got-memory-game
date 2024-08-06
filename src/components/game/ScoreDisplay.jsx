/* eslint-disable react/prop-types */
export default function ScoreDisplay({ currentScore, bestScore }) {
  return (
    <div className="score-container">
      <div className="best-score">
        Best Score: 
        <span className="best-score-num"> {bestScore}</span>
      </div>
      <div className="current-score">
        Current Score: <span className="current-score-num">{currentScore}</span>
      </div>
    </div>
  );
}
