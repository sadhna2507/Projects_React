import React from "react";

const CommentForm = () => {
  return (
    <div>
      <div>Hello</div>
      <form className="form-container">
        <input
          type="text"
          placeholder="Enter Comment"
          className="comment-box"
        />
        <button className="comment-btn">
          <i className="fas fa-arrow-right fa-2x"></i>
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
