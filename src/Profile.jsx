import React from "react";
import SinglePlant from "./SinglePlant";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({
  user,
  userPlants,
  setUser,
  setUserPlants,
  setIsLoggedIn,
}) => {
  const navigate = useNavigate();

  function logoutEvent() {
    alert("You have been successfully logged out");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <div>
      {user && user.id && userPlants && userPlants.length ? (
        <div id="profile-page">
          <h3 id="profile-header">Hey there, {user.firstName}!</h3>
          <div className="logout-container">
            <a onClick={logoutEvent} className="link-logout">
              Logout
            </a>
          </div>
          <h2 className="wishlist-title">
            Come check out your plant wishlist!
          </h2>
          <div className="content-profile">
            {userPlants.map((plant, idx) => {
              return (
                <SinglePlant
                  plant={plant}
                  user={user}
                  setUser={setUser}
                  userPlants={userPlants}
                  setUserPlants={setUserPlants}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div id="profile-page">
          <h3 id="profile-header">Hey there, {user.firstName}!</h3>
          <div className="logout-container">
            <a onClick={logoutEvent} className="link-logout">
              Logout
            </a>
          </div>
          <h2 className="wishlist-title">
            You don't have any plants in your wishlist...
          </h2>
        </div>
      )}
    </div>
  );
};

export default Profile;
