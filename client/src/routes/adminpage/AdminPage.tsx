import "./adminPage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AdminPage() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const { currentUser, updateUser } = authContext || {
    currentUser: null,
    updateUser: () => {},
  };

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AdminPage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            <>
              <span>
                Username: <b>{currentUser?.username}</b>
              </span>
              <span>
                ID: <b>{currentUser?.id}</b>
              </span>
              <span>
                E-mail: <b>{currentUser?.email}</b>
              </span>
              <span>
                Account created at: <b>{currentUser?.createdAt}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
