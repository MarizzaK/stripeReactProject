import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const authContext = useContext(AuthContext);
  const currentUser = authContext?.currentUser;

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img
            src="https://img.icons8.com/?size=100&id=MePa4FpWig6Z&format=png&color=000000"
            alt="Logo"
          />
          <span>Buy Movies</span>
        </a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <span>{currentUser.username}</span>
            <Link to="/admin" className="admin">
              <span className="profile-btn">Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        <Link to="/cart">
          {/* <img
            src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000"
            alt="Cart"
          /> */}
          <button className="cartIcon">Cart {totalItems} Items</button>
        </Link>

        <div className="menuIcon">
          <img
            src="https://img.icons8.com/?size=100&id=w3-HRY0z8wQY&format=png&color=1A1A1A"
            alt="Menu Icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/homepage">Movies</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
