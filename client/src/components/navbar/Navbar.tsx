import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
// import Contact from "../../routes/contact/Contact";
// import Movies from "../../routes/homepage/homePage";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="https://img.icons8.com/?size=100&id=MePa4FpWig6Z&format=png&color=000000" />
          <span>Buy Movies</span>
        </a>
        <Link to="/homepage">Movies</Link>
        <Link to="/contact">Contact</Link>{" "}
      </div>
      <div className="right">
        {/* <div className="user">
          <span>username</span>
        </div> */}

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <a href="/cart" className="cart">
          <img
            src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000"
            alt=""
          />
        </a>

        <div className="menuIcon">
          <img
            src="https://img.icons8.com/?size=100&id=w3-HRY0z8wQY&format=png&color=1A1A1A"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/homepage">Movies</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
