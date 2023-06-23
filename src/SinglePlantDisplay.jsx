import { useState, useEffect } from "react";
import { fetchSinglePlant } from "./api/plants";
import { addPlantToUser, removePlantFromUser } from "./api/user_plants";
import { useParams, Link } from "react-router-dom";
import "./SinglePlantDisplay.css";

const SinglePlantDisplay = ({ user, setUser, userPlants, setUserPlants }) => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getSinglePlant() {
      const result = await fetchSinglePlant(id);
      setPlant(result.data.plant);
    }

    getSinglePlant();
  }, []);

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
    <div id="plant-box">
      <h2 id="plant-name-title">{plant.name}</h2>
      <div id="content-separator">
        <img id="image-box" className="plant-img" src={plant.imageURL} />
        <div id="text-box">
          <p id="plant-description">{plant.description}</p>
          {user && user.id ? (
            <div>
              {userPlants &&
              userPlants.length &&
              userPlants.some((e) => e.id == plant.id) ? (
                <button className="add-remove-button" onClick={removePlant}>
                  Remove from WishList
                </button>
              ) : (
                <button className="add-remove-button" onClick={addPlant}>
                  Add to WishList
                </button>
              )}
            </div>
          ) : null}
          <Link to="/plants" className="back-to-plants">
            Back to Plants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePlantDisplay;
