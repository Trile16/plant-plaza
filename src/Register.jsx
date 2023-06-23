import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserRegistration } from "./api/users";
import "./Register.css";

const Register = ({ setIsLoggedIn, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetchUserRegistration({
      firstName,
      lastName,
      username,
      password,
    });

    if (result.data) {
      alert(result.data.message);
      setIsLoggedIn(true);
      setToken(response.data.token);
      navigate("/");
    } else {
      alert(result.error.message);
    }
  };

  return (
    <div id="register-container">
      <div id="register-area">
        <h2 id="register-title">Register</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <p>First Name</p>
            <input
              className="input-fields"
              type="text"
              name="first-name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <p>Last Name</p>
            <input
              className="input-fields"
              type="text"
              name="last-name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            <p>Username</p>
            <input
              className="input-fields"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              className="input-fields"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input
            type="submit"
            value="Sign Up"
            id="submit-login"
            className="button"
          />
        </form>

        <p id="login-link">
          Already have an account? Log in{" "}
          <Link to="/login" className="login">
            HERE
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
