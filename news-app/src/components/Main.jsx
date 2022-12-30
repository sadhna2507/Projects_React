import React from "react";
import "./Main.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import { Reaction } from "./Reaction";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Main() {
  const [post, setPost] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8e89d00815849119ba4eddbb071fcfd`
      )
      .then((response) => {
        setPost([...response.data.articles]);
        console.log(post);
      });
  }, []);

  return (
    <>
      <Header />
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
                <img
                  className="newsImage"
                  src={post.urlToImage}
                  alt="img"
                ></img>
              </div>

              <div className="written">
              <p className="authorName">
                <span>~</span> {post.author}
                <span>{post.publishedAt}</span>
              </p>
              <p className="newsContent"> {post.content}</p>
              <p className="newsDescription">Description: {post.description}</p>
              <p className="newsSource">Source: {post.source.name}</p>
              </div>
              <div className="readLink">
                <a className="ReadMore" href={post.url}>
                  Read more
                </a>
              </div>

              <Reaction />

              
              <Comment />
            </div>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
}
