import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginNew = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (username === "admin" && password === "password") {
      navigate("/");
    } else {
      setPasswordError("Invalid username or password");
    }
  };

  return (
    <div className="mainContainer">
      <div className="loginForm">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{passwordError}</p>
        <button onClick={onButtonClick}>Login</button>
      </div>
    </div>
  );
};

export default LoginNew;