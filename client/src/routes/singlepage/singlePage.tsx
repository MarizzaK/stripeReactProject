import { useParams } from "react-router-dom";
import { listData } from "../../lib/dummydata"; // Import your movie data
import "./singlePage.scss";

const SinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);

  const item = listData.find((movie) => movie.id === movieId);

  if (!item) {
    return <div>Movie not found</div>;
  }
  return (
    <div className="singlePage">
      <div className="imageContainer">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="textContainer">
        <h2 className="title">{item.title}</h2>
        <p className="category">{item.category}</p>
        <p className="description">{item.description}</p>
        <p className="price">{item.price}:-</p>
        {/* <button>Add to cart</button>
        <span>Added to cart</span> */}
      </div>
    </div>
  );
};

export default SinglePage;
