import React from "react";
import { useState } from "react";

export function Todo() {
  const [item, setItem] = useState(["apple", "mango"]);
  

  const handleChange=()=>{
    set
  }
  return (
    <>
      <input type="text" value={de} placeholder="Add Your Task" />
      <button onChange={handleChange}>Submit</button>
    </>
  );
}
