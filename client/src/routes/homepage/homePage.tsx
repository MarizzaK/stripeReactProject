import { useContext } from "react";
import Card from "../../components/card/Card";
import { listData } from "../../lib/dummydata";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const data = listData;
  console.log(data);

  const authContext = useContext(AuthContext);
  const currentUser = authContext?.currentUser;
  console.log(currentUser);

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
