import { useState } from "react";
import { fetchUserLogin } from "./api/users";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    const response = fetchUserLogin({ username, password });
  };

  return (
    <div id="login-container">
      <div id="login-area">
        <h2 id="login-title">Welcome Back Planter!</h2>
        <br />
        <form onSubmit={handleSubmit}>
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
          <br />

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
          <br />
          <input type="submit" value="Sign In" id="submit-login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
