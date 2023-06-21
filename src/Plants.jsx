import React from "react";
import SinglePlant from "./SinglePlant";
import "./Plants.css";

const Plants = ({ plants }) => {
  const mappedPlants = plants.map((plant, idx) => {
    return <SinglePlant plant={plant} key={idx} />;
  });
  return <div className="content">{mappedPlants}</div>;
};

export default Plants;
