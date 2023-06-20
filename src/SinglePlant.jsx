import React from "react";

const SinglePlant = ({ plant }) => {
  return (
    <div>
      <h2>Name: {plant.name}</h2>
      <h2>Description: {plant.description}</h2>
      <h2>Category: {plant.category}</h2>
      <img src={plant.imageURL}></img>
    </div>
  );
};

export default SinglePlant;
