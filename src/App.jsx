import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Plants from "./Plants";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function getPlants() {
      const response = await fetch(
        "https://plant-plaza-api.fly.dev/api/plants"
      );
      const result = await response.json();
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
      </Routes>
    </>
  );
}

export default App;
