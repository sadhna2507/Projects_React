import React, { useState, useContext } from "react";
import Reaction from "./Reaction";
import CommentForm from "./CommentForm";

function Article({ url, desc, title, img, id }) {
  return (
    <div className={"container-article container-article-light"}>
      <img src={img} className="article-img" alt="" />
      <h2 className="article-title">{title}</h2>
      <p className="article-para">
        {desc.length > 200 ? `${desc.substring(0, 200)}...` : desc}
      </p>
      <button className="article-btn">
        <a href={url} target="_blank" rel="noreferrer">
          Read More
        </a>
      </button>
      <button className="remove-btn">Remove</button>
      <Reaction />

      <CommentForm />
    </div>
  );
}

export default Article;
