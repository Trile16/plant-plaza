import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <div id="login-container">
      <div id="login-area">
        <h2 id="login-title">Register</h2>

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

        <p id="register-link">
          Already have an account? Log in{" "}
          <Link to="/login" className="register">
            HERE
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
