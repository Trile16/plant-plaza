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
  const [plantCategory, setPlantCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [userPlants, setUserPlants] = useState([]);

  useEffect(() => {
    async function getPlants() {
      console.log("USE EEFFECT");
      const result = await fetchAllPlants();
      setPlants(result.data.plants);
    }
    getPlants();
  }, []);

  useEffect(() => {
    async function getUser() {
      const result = await fetchUserPlants();
      delete result.data.plants;
      setUser(result.data);
    }
    if (isLoggedIn) {
      getUser();
    } else {
      setUser({});
    }
  }, [isLoggedIn]);

  useEffect(() => {
    async function getUserPlants() {
      const result = await fetchUserPlants();
      setUserPlants(result.data.plants);
      console.log(userPlants, "USERPLANTS");
    }
    if (isLoggedIn) {
      getUserPlants();
    } else {
      setUserPlants([]);
    }
  }, [isLoggedIn]);

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        user={user}
        plantCategory={plantCategory}
        setPlantCategory={setPlantCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              plants={plants}
              user={user}
              setUser={setUser}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          }
        />
        <Route
          path="/plants"
          element={
            <Plants
              plants={plants}
              user={user}
              setUser={setUser}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
              plantCategory={plantCategory}
            />
          }
        />
        <Route
          path="/plants/:id"
          element={
            <SinglePlantDisplay
              user={user}
              setUser={setUser}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          }
        />
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
          element={
            <Profile
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
