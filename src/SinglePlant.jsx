import React from "react";
import { Link } from "react-router-dom";
import "./SinglePlant.css";

const SinglePlant = ({ plant }) => {
  return (
    <div className="card">
      <h2 className="card-name">{plant.name}</h2>
      <img className="plant-img" src={plant.imageURL}></img>
      <Link to={`/plants/${plant.id}`}>See More Details</Link>
    </div>
  );
};

export default SinglePlant;
