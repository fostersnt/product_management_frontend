import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const history = useHistory();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Fetch user data from the server
      const response = await fetch("your_api_endpoint/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();

        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(userData));

        // Set authentication state
        login();

        // Redirect to the home page or a protected route
        history.push("/");
      } else {
        console.error("Login failed");
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle unexpected errors during login
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
