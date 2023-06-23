import React from "react";
import { Link } from "react-router-dom";
import "./SinglePlant.css";
import {
  fetchUserPlants,
  addPlantToUser,
  removePlantFromUser,
} from "./api/user_plants";
import { fetchSinglePlant } from "./api/plants";
import Plants from "./Plants";

const SinglePlant = ({ plant, user, setUser, userPlants, setUserPlants }) => {
  async function addPlant() {
    const result = await addPlantToUser(plant.id);

    if (result.success) {
      const _result = await fetchSinglePlant(plant.id);
      setUserPlants([...userPlants, _result.data.plant]);
    }
  }

  async function removePlant() {
    const result = await removePlantFromUser(plant.id);

    if (result.success) {
      const _result = await fetchSinglePlant(plant.id);
      const newUserPlants = userPlants.filter(
        (plant) => plant.id != _result.data.plant.id
      );
      setUserPlants([...newUserPlants]);
    }
  }

  return (
    <div>
      {plant && plant.id ? (
        <div className="card">
          <Link to={`/plants/${plant.id}`} className="card-link">
            <img className="plant-img" src={plant.imageURL}></img>
            <h2 className="card-name">{plant.name}</h2>
          </Link>
          {user && user.id ? (
            <div>
              {userPlants &&
              userPlants.length &&
              userPlants.some((e) => e.id == plant.id) ? (
                <button className="add-remove-button" onClick={removePlant}>
                  Remove from Wishlist
                </button>
              ) : (
                <button className="add-remove-button" onClick={addPlant}>
                  Add to Wishlist
                </button>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default SinglePlant;
