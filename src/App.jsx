import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllPlants } from "./api/plants";
import { fetchUserPlants } from "./api/user_plants";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Plants from "./Plants";
import SinglePlantDisplay from "./SinglePlantDisplay";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [plants, setPlants] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getPlants() {
      const result = await fetchAllPlants();
      setPlants(result.data.plants);
    }
    getPlants();
  }, []);

  useEffect(() => {
    async function getUserPlants() {
      const result = await fetchUserPlants();
      setUser(result.data);
    }
    if (isLoggedIn) {
      getUserPlants();
    } else {
      setUser({});
    }
  }, [isLoggedIn]);

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
      />
      <Routes>
        <Route path="/" element={<Home plants={plants} />} />
        <Route path="/plants" element={<Plants plants={plants} />} />
        <Route path="/plants/:id" element={<SinglePlantDisplay />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/profile"
          element={<Profile setIsLoggedIn={setIsLoggedIn} user={user} />}
        />
      </Routes>
    </>
  );
}

export default App;
