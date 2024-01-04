import React from "react";
import "./styles.css";
import { useState } from "react";
import { getDrinks } from "./components/drinks";
import { useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("the count is:" + count);
  }, [count]);

  const handleWaterButtonClick = () => {
    // Handle logic for water button click
    // For now, let's just increment the count
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="redButton" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="blueButton" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <ul>
        {getDrinks().map(({ id, name, color }) =>
          name === "water" ? (
            <button key={id} style={{ color }} onClick={handleWaterButtonClick}>
              {name}
            </button>
          ) : (
            <li key={id} style={{ color }}>
              {name}
            </li>
          )
        )}
      </ul>
    </>
  );
}
