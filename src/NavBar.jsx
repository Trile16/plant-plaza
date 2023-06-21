import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import plantplazalogo from "./assets/plant-plaza-logo.png";
import usericon from "./assets/user-icon.png";

const NavBar = () => {
  return (
    <>
      <h3 id="top-bar">P L A N T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P L A Z A</h3>
      <div id="title-login">
        <Link to="/" id="logo-title">
          <img src={plantplazalogo} alt="Plant Plaza Logo" id="logo" />
          <h1 id="title">Plant Plaza</h1>
        </Link>
        <Link to="/login" className="link-login">
          Login
          <img src={usericon} alt="User Icon" id="user-icon" />
        </Link>
      </div>
      <hr />
      <div id="nav-links">
        <Link to="/plants" className="link">
          Plants
        </Link>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
