import React, { useState } from "react";
import "./Reaction.css";

export function Reaction() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const likeFeature = () => {
    setLike(like + 1);
  };

  const disLikeFeature = () => {
    setDislike(dislike + 1);
  };

  return (
    <>
      <div className="reactionBtn">
        <button id="Ld" onClick={likeFeature}>
          <i class="fa-solid fa-heart"></i>
          {like}{" "}
        </button>

        <button id="Ld" onClick={disLikeFeature}>
          <i class="fa-solid fa-thumbs-down"></i>
          {dislike}{" "}
        </button>
      </div>
    </>
  );
}
