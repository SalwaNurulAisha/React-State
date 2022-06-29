import React from "react";
import { useState } from "react";

const Todo = () => {
  //state Todo berbentuk array
  const [todos, setTodos] = useState(["Belajar react", "Belajar state"]);

  //state inputTodo berbentuk string
  const [inputTodo, setInputTodo] = useState("");

  const handleTodos = () => {
    setTodos([...todos, inputTodo]);
    setInputTodo("");
  };

  return (
    <div>
      <h1>03.1 Todo</h1>
      <input type="text" placeholder="todos" onChange={(event) => setInputTodo(event.target.value)} />

      <button onClick={handleTodos}>add</button>

      {todos.map((item, index) => (
        <p key={index} todos={item} />
      ))}
    </div>
  );
};

export default Todo;
