import React from "react";
import { Link } from "react-router-dom";

const SinglePlant = ({ plant }) => {
  return (
    <div>
      <h2>Name: {plant.name}</h2>
      <h2>Description: {plant.description}</h2>
      <h2>Category: {plant.category}</h2>
      <img src={plant.imageURL}></img>
      <Link to={`/plants/${plant.id}`}>See More Details</Link>
    </div>
  );
};

export default SinglePlant;
