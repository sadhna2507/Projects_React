import React from "react";
import "./Footer.css";
import { useState, useEffect } from "react";

export function Footer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const currentTime = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(currentTime);
    };
  });
  return (
    <>
      <div className="footer">
        <div className="sub_footer">
          <div className="left_flex">
            <i class="fa fa-facebook"></i>

            <i class="fa fa-instagram"></i>

            <i class="fa fa-twitter"></i>
          </div>

          <div className="right_flex">
            <p>{date.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
