import React from "react";
import "./Home.css";
import homeimg from "./assets/home-image.jpg";
import SinglePlant from "./SinglePlant";

const Home = ({ plants, user, setUser, userPlants, setUserPlants }) => {
  console.log(plants[5]);
  return (
    <div id="home-area">
      <h3 id="home-header">Welcome to Plant Plaza</h3>
      <div id="home-separator">
        <div id="home-content">
          <h2>The Plant Site for Plant Lovers</h2>
          <p>Thinking about getting more plants? Create your wishlist here!</p>
        </div>
        <img src={homeimg} alt="Plant Images" id="home-img" />
      </div>
      <h3 id="featured-title">Featured Plants</h3>
      <div></div>
      {plants ? (
        <div id="featured-plants">
          <SinglePlant
            plant={plants[5]}
            user={user}
            setUser={setUser}
            userPlants={userPlants}
            setUserPlants={setUserPlants}
          />
          <SinglePlant
            plant={plants[23]}
            user={user}
            setUser={setUser}
            userPlants={userPlants}
            setUserPlants={setUserPlants}
          />
          <SinglePlant
            plant={plants[14]}
            user={user}
            setUser={setUser}
            userPlants={userPlants}
            setUserPlants={setUserPlants}
          />
          <SinglePlant
            plant={plants[32]}
            user={user}
            setUser={setUser}
            userPlants={userPlants}
            setUserPlants={setUserPlants}
          />
          <SinglePlant
            plant={plants[8]}
            user={user}
            setUser={setUser}
            userPlants={userPlants}
            setUserPlants={setUserPlants}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
