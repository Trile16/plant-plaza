import React from "react";
import { Link } from "react-router-dom";
import "./SinglePlant.css";

const SinglePlant = ({ plant }) => {
  return (
    <div>
      {plant && plant.id ? (
        <Link to={`/plants/${plant.id}`} className="card">
          <img className="plant-img" src={plant.imageURL}></img>
          <h2 className="card-name">{plant.name}</h2>
        </Link>
      ) : null}
    </div>
  );
};

export default SinglePlant;
