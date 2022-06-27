import Card from "../Card/Card";
import "./CardList.css";

export default function CardList(props) {
  return (
    <div className="giphy-container">
      {props.dataGiphy.map((giphy) => (
        <Card
          key={giphy.id}
          title={giphy.title}
          image={giphy.images.downsized_still}
        ></Card>
      ))}
    </div>
  );
}
