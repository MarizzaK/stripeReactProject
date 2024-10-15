import Card from "../../components/card/Card";
import { listData } from "../../lib/dummydata";

function HomePage() {
  const data = listData;
  console.log(data);

  return (
    <div className="homePage">
      <div className="listContainer">
        <div className="wrapper">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;