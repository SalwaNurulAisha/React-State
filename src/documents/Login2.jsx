import React from "react";
import { useState } from "react";

const Login2 = () => {
  // state berbentuk objek
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //function dari atribut onChange username dan password
  const handleChangeInput = (event) => {
    setUser({
      // ambil isi object yg sekarang
      ...user,

      // ubah properti pada user berdasarkan text input yg aktif
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>02.2 Login2</h1>
      <input type="text" placeholder="username" name="username" onChange={handleChangeInput} value={user.username} />

      <input type="password" placeholder="password" name="password" onChange={handleChangeInput} value={user.password} />

      <button onClick={() => console.log(user.username, user.password)}>Login2</button>
    </div>
  );
};

export default Login2;
