import React from "react";
import { useState, useEffect } from "react";

export function Timer() {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    let interval = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      }
      if (sec === 0) {
        setMin(min - 1);
      }
      if (min === 0 && sec === 0) {
        setStart(false);
      }

      if(min===0 && sec>0){
        setMin(min)
        setSec(sec)
      }
     return () => {
       clearInterval(interval);
     };
    }, 100);
  };

  useEffect(()=>{
    if(start === true){
      handleStart()
    }
  })

  const handleStop=()=>{
    setStart(false)
  }

  const handleReset =()=>{
    setMin(min)
    setSec(sec)
  }

  return (
    <>
      <div className="mainDiv">
        <div className="timeDiv">
          <p>{`${min} : `}</p>
          <p>{sec}</p>
        </div>
        <div className="btnDiv">
          <button onClick={handleStart}>Start</button>
          <button onclick={handleStop}>Stop</button>
          <button onClick={handleReset}>Restart</button>
        </div>
      </div>
    </>
  );
}
