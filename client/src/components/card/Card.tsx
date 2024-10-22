import { Link } from "react-router-dom";
import "./card.scss";
import { Movie } from "../../lib/dummydata";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

interface CardProps {
  item: Movie;
}

function Card({ item }: CardProps) {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false); // Track if item is added to cart

  const handleAddToCart = () => {
    addToCart(item);
    setAddedToCart(true);

    //dölj meddelande efter 2sec
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

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
          <button onClick={handleAddToCart}>Add to cart</button>

          {addedToCart && <span className="addedMessage">Added to cart</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;
