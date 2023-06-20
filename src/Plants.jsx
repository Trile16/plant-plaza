import React from "react";
import SinglePlant from "./SinglePlant";

const Plants = ({ plants }) => {
  const mappedPlants = plants.map((plant, idx) => {
    return <SinglePlant plant={plant} key={idx} />;
  });
  return <div>{mappedPlants}</div>;
};

export default Plants;
