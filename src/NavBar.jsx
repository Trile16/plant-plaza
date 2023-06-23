import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./NavBar.css";
import plantplazalogo from "./assets/plant-plaza-logo.png";
import usericon from "./assets/user-icon.png";

const NavBar = ({ isLoggedIn, user, plantCategory, setPlantCategory }) => {
  const navigate = useNavigate();
  return (
    <div id="nav-bar">
      {user && user.id ? (
        <h3 id="top-bar">Welcome Back, {user.firstName}</h3>
      ) : (
        <h3 id="top-bar">P L A N T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P L A Z A</h3>
      )}
      <div id="title-login">
        <Link to="/" id="logo-title">
          <img src={plantplazalogo} alt="Plant Plaza Logo" id="logo" />
          <h1 id="title">Plant Plaza</h1>
        </Link>
        {isLoggedIn ? (
          <Link to="/profile" className="link-login">
            Profile
            <img src={usericon} alt="User Icon" id="user-icon" />
          </Link>
        ) : (
          <Link to="/login" className="link-login">
            Login
            <img src={usericon} alt="User Icon" id="user-icon" />
          </Link>
        )}
      </div>
      <hr />
      <div id="nav-links">
        <Link
          to="/plants"
          className="link"
          onClick={() => {
            setPlantCategory("");
          }}
        >
          All Plants
        </Link>
        <a
          className="link"
          onClick={() => {
            setPlantCategory("Succulent");
            navigate("/plants");
          }}
        >
          Succulent
        </a>
        <a
          className="link"
          onClick={() => {
            setPlantCategory("Tropical");
            navigate("/plants");
          }}
        >
          Tropical
        </a>
        <a
          className="link"
          onClick={() => {
            setPlantCategory("Vine");
            navigate("/plants");
          }}
        >
          Vine
        </a>
        <a
          className="link"
          onClick={() => {
            setPlantCategory("Flowering");
            navigate("/plants");
          }}
        >
          Flowering
        </a>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
