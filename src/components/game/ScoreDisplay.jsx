/* eslint-disable react/prop-types */
export default function ScoreDisplay({currentScore}) {
  return (
    <div className="score-container">
      <div className="best-score">Best Score: 0</div>
      <div className="current-score">Current Score: {currentScore}</div>
    </div>
  );
}
