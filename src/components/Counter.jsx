import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //decrement
  const decrement = () => {
    setCount(count - 1);
  };

  //increment
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>01. Soal Counter</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
export default Counter;
