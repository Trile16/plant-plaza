import React from "react";
import SinglePlant from "./SinglePlant";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, setIsLoggedIn }) => {
  const navigate = useNavigate();

  function logoutEvent() {
    alert("You have been successfully logged out");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  console.log(user);
  return (
    <div>
      {user.plants ? (
        <div id="profile-page">
          <h1>Hey there, {user.firstName}!</h1>
          <h2>Come check out your plant wishlist!</h2>
          <div className="content-profile">
            {user.plants.map((plant, idx) => {
              return <SinglePlant plant={plant} key={idx} />;
            })}
          </div>
          <a onClick={logoutEvent} className="link-login">
            Logout
          </a>
        </div>
      ) : (
        <div id="profile-page">
          <h1>Hey there, {user.firstName}!</h1>
          <h2>You don't have any plants in your wishlist...</h2>
        </div>
      )}
    </div>
  );
};

export default Profile;
