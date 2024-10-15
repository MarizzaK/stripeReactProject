import { useState } from "react";
import "./navbar.scss";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="https://img.icons8.com/?size=100&id=MePa4FpWig6Z&format=png&color=000000" />
          <span>Buy Movies</span>
        </a>
        <a href="/">Movies</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        {/* <div className="user">
          <span>username</span>
        </div> */}

        <a href="/login">Login</a>
        <a href="/register" className="register">
          Register
        </a>
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
          <a href="/homePage">Movies</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
