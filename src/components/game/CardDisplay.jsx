/* eslint-disable react/prop-types */


export default function CardDisplay({ children, level }) {
  return <div className={"card-container" + ` card-container-level-${level + 1}`}>{children}</div>;
}
