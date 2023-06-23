import { useEffect, useState } from "react";
import SinglePlant from "./SinglePlant";
import "./Plants.css";

const Plants = ({
  plants,
  user,
  setUser,
  userPlants,
  setUserPlants,
  plantCategory,
}) => {
  const mappedPlants = plants.map((plant, idx) => {
    return (
      <SinglePlant
        plant={plant}
        user={user}
        setUser={setUser}
        userPlants={userPlants}
        setUserPlants={setUserPlants}
        key={idx}
      />
    );
  });

  const filteredPlants = plants.filter(
    (plant) => plant.category == plantCategory
  );
  const mappedFilteredPlants = filteredPlants.map((plant, idx) => {
    return (
      <SinglePlant
        plant={plant}
        user={user}
        setUser={setUser}
        userPlants={userPlants}
        setUserPlants={setUserPlants}
        key={idx}
      />
    );
  });
  return plantCategory && plantCategory.length ? (
    <div className="plants-container">
      <h2 className="plants-title">{plantCategory}</h2>
      <div className="content">{mappedFilteredPlants}</div>
    </div>
  ) : (
    <div className="plants-container">
      <h2 className="plants-title">All Plants</h2>
      <div className="content">{mappedPlants}</div>
    </div>
  );
};

export default Plants;
