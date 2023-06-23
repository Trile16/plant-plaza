import React from "react";
import SinglePlant from "./SinglePlant";
import "./Plants.css";

const Plants = ({ plants, user, setUser, userPlants, setUserPlants }) => {
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
  return <div className="content">{mappedPlants}</div>;
};

export default Plants;
