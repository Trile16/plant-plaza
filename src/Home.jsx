import React from "react";
import "./Home.css";
import homeimg from "./assets/home-image.jpg";

const Home = () => {
  return (
    <div id="home-area">
      <h3 id="home-header">Welcome to Plant Plaza</h3>
      <div id="home-separator">
        <h2 id="home-content">The Plant Site for Plant Lovers</h2>
        <img src={homeimg} alt="Plant Images" id="home-img" />
      </div>
    </div>
  );
};

export default Home;
