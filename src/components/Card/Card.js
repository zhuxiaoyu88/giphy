import "./Card.css";

export default function Card(props) {
  return (
    <div className="giphy-card">
      <h3>Another test</h3>
      <p>Hello {props.name}</p>
    </div>
  );
}
