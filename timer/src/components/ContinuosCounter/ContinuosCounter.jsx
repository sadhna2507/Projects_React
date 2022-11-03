import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function ContinuosCounter() {
  const [count, setCount] = useState(0);

//   const handleStart = () => {
//     // setCount(count + 1);
//     setCount(count + 1);
//     setCount((prev) => prev+1)
//   };
  const handleRestart=()=>{
    setCount(0)
  }

  useEffect(()=>{
    setCount(count+1)
  })

  return (
    <>
      <div className="mainDiv">
        <div className="timeDiv">{count}</div>
        <div className="btnDiv">
          {/* <button onClick={handleStart}>Start</button> */}
          {/* <button onclick={handleStop}>Stop</button> */}
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </>
  );
}
