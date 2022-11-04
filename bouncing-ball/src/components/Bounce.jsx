import React from "react";
import { useState, useEffect } from "react";
import "./Bounce.css";

export function Bounce() {
  const positionArray = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"];
  const [index, setIndex] = useState(0);

  

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index) => index + 1);
      console.log(index);
      if (index === 3) {
        setIndex(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <div className={`ball ${positionArray[index]}`}></div>
    </div>
  );
}
