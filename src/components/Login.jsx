import React from "react";
import { useState } from "react";

const Login = () => {
  //state login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //handleLogin button untuk menampilkan data
  const handleLogin = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <div>
      <h1>02.1 Form Login</h1>
      <input type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)} />

      <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
