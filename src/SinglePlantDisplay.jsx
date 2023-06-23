import { useState, useEffect } from "react";
import { fetchSinglePlant } from "./api/plants";
import { useParams, Link } from "react-router-dom";
import "./SinglePlantDisplay.css";

const SinglePlantDisplay = () => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getSinglePlant() {
      const result = await fetchSinglePlant(id);
      setPlant(result.data.plant);
    }

    getSinglePlant();
  }, []);

  return (
    <div id="content-separator">
      <img id="image-box" src={plant.imageURL} />
      <div id="text-box">
        <p>Name: {plant.name}</p>
        <p>Description: {plant.description}</p>
        <Link to="/plants">Back to Plants</Link>
      </div>
    </div>
  );
};

export default SinglePlantDisplay;
