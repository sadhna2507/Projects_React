import React from "react";
import { useState, useEffect } from "react";

export function OneButtonCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Increase");

  const handleCounter = () => {
    if (text === "Increase") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count === 10) {
      setText("Decrease");
    }
    if (count === 0) {
      setText("Increase");
    }
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCounter}>{text}</button>
    </>
  );
}
