/* eslint-disable react/prop-types */
export default function DifficultyDisplay({ level }) {
  let difficulty = "easy";
  if (level === 1) {
    difficulty = "medium";
  } else if (level === 2) {
    difficulty = "hard";
  }
  return <div className={"difficulty-display " + difficulty}>{difficulty}</div>;
}
