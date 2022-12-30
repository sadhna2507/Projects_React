import React from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";

function Home({ handleChangeUrl, data, error, loader }) {
  return (
    <div>
      <Header changeUrl={handleChangeUrl} />
      {loader && <div>Loading.....</div>}
      {error && (
        <div>{`There is some error while fetching the news - ${error}`}</div>
      )}
      {data &&
        data?.map(({ title, urlToImage, publishedAt, url, description }) => (
          <Article
            key={url}
            desc={description}
            title={title}
            img={urlToImage}
            id={publishedAt}
            url={url}
          />
        ))}
      <Footer />
    </div>
  );
}

export default Home;
