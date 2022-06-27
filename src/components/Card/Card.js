import "./Card.css";

export default function Card(props) {
  return (
    <article data-title={props.title} className="giphy-card">
      <img
        src={props.image.url}
        height={props.image.height}
        width={props.image.width}
        className="giphy-card__img img-reset"
      />
    </article>
  );
}
