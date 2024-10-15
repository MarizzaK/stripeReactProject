import { Link } from "react-router-dom";
import "./card.scss";
import { Movie } from "../../lib/dummydata"; // Import the Movie interface

interface CardProps {
  item: Movie;
}

function Card({ item }: CardProps) {
  return (
    <div className="cardContainer">
      <div className="card">
        <Link to={`/${item.id}`} className="imageContainer">
          <img src={item.img} alt={item.title} />
        </Link>
        <div className="textContainer">
          <h2 className="title">{item.title}</h2>
          <p className="category">{item.category}</p>

          <p className="price">{item.price}:-</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
