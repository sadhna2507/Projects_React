import React from "react";
import "./Main.css";
import axios from "axios";
import { useState, useEffect } from "react";

export function Main() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2022-10-19&to=2022-10-19&sortBy=popularity&apiKey=c8e89d00815849119ba4eddbb071fcfd`
      )
      .then((response) => {
        setPost([...response.data.articles]);
        console.log(post);
      });
  }, []);

  return (
    <div className="newsContainer">
      <div className="search">
        <input
          className="searchInput"
          type="text"
          // value={searchValue}
          // onChange={(e)=>{searchChange(e)}}
        />
        <button className="searchBtn">
          <i
            className="fa-solid fa-magnifying-glass"
            // onClick={handleSearch}
          ></i>
        </button>
      </div>

      {post.map((post) => (
        <>
          <div className="newsPage">
            <div className="newsTitle">
              <h2>{post.title}</h2>
            </div>

            <div className="newsImg">
              <img className="newsImage" src={post.urlToImage} alt="img"></img>
            </div>

            <p className="authorName">
              <span>~</span> {post.author}
              <span>{post.publishedAt}</span>
            </p>
            <p className="newsContent"> {post.content}</p>
            <p className="newsDescription">{post.description}</p>
            <p className="newsSource">Source: {post.source.name}</p>
            <div className="readLink">
              <a className="ReadMore" href={post.url}>
                Read more
              </a>
            </div>
            <div className="reactionBtn">
              <button>
                <i class="fa-solid fa-heart"></i>
              </button>
              <button>
                <i class="fa-solid fa-thumbs-down"></i>
              </button>
              <div className="commentBox">
                <input type="text" name="" id="" placeholder="write" />
                <button className="commentBtn">comment</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
