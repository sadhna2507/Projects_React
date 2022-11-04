import React from "react";
import { useState, useEffect } from "react";

export function Timer() {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);

  let interval;
  const handleStart = () => {
    interval = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      }
      if (min === 0 && sec === 0) {
        setStart(false);
        return () => {
          clearInterval(interval);
        };
      }
      if (sec === 0 && min > 0) {
        setMin(min - 1);
        setSec(59);
      }
    }, 100);
  };

  useEffect(() => {
    if (start === true) {
      handleStart();
    }
    return () => {
      clearInterval(interval);
    };
  });

  const handleReset = () => {
    setMin(5);
    setSec(0);
    setStart(false);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="timeDiv">
          <h2>{`${min} : ${sec}`}</h2>
        </div>
        <div className="btnDiv">
          <button
            onClick={() => {
              setStart(!start);
            }}
          >
            {start ? "stop" : "start"}
          </button>
          <button onClick={handleReset}>Restart</button>
        </div>
      </div>
    </>
  );
}
