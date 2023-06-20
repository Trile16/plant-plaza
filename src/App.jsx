import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllPlants } from "./api/plants";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Plants from "./Plants";
import SinglePlantDisplay from "./SinglePlantDisplay";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function getPlants() {
      const result = await fetchAllPlants();
      setPlants(result.data.plants);
    }
    getPlants();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants plants={plants} />} />
        <Route path="/plants/:id" element={<SinglePlantDisplay />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
