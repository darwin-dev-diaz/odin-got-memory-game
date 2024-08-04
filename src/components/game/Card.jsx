/* eslint-disable react/prop-types */
export default function Card({ value, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {value}
    </div>
  );
}
