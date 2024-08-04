import Card from "./Card";

export default function CardDisplay() {

    const test = [...Array(4).keys()];
  return (
    <div className="card-container">
      {test.map((item, i) => {
        return <Card key={i}></Card>;
      })}
    </div>
  );
}
