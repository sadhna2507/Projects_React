import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchFeature.css";

function AxiosApp() {
  const [myData, setMyData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609b90f8244b43e5b3a6a2781c7c8a42"
      )
      .then((res) => setMyData(res.data.articles));
  }, []);

  useEffect(() => {
    const afterFilterData = myData.filter((post) => {
      if (post.title) {
        return post.title.includes(search.toLowerCase());
      }
    });
    // console.log(afterFilterData);
    setFilteredData(afterFilterData);
  }, [search]);
  //   search=search.

  return (
    <>
      <div className="grid">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <h1>Axios</h1> */}
        {filteredData.map((post) => {
          const { title, url } = post;
          return (
            <div className="Card">
              <h2>{title}</h2>
              <a href={url}>click here</a>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AxiosApp;
