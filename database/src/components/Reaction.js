import React from "react";

function Reaction() {
  return (
    <div className="reaction-container">
      <a className="like" href="/">
        {<i className="fas fa-heart fa-2x"></i>}
      </a>
      <span className="like-counter">0</span>
      <a className="comment" href="/">
        <i className="fas fa-comment fa-2x"></i>
      </a>
      <span className="comment-counter">0</span>
    </div>
  );
}

export default Reaction;
