import { useState, useEffect } from "react";
import { fetchSinglePlant } from "./api/plants";
import { useParams, Link } from "react-router-dom";

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
    <div>
      <h2>Name: {plant.name}</h2>
      <h2>Description: {plant.description}</h2>
      <h2>Category: {plant.category}</h2>
      <img src={plant.imageURL}></img>
      <Link to="/plants">Back to All Plants</Link>
    </div>
  );
};

export default SinglePlantDisplay;
