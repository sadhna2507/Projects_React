import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Headline() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8e89d00815849119ba4eddbb071fcfd`
      )
      .then((response) => {
        console.log(response.data["articles"]);
        setData([...response.data["articles"]]);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="headline_div">
        <h1>Headlines</h1>
      </div>
      <div className="main_container">
        {data.map((post) => (
          <div className="headline_container">
            <h2>
              {post.title}
              <a href={post.url}>Read More...</a>
            </h2>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
