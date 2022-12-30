import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Headlines from "./components/Headlines";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [url, setUrl] = useState(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=7689a33b160242fe868be519e87f7035"
  );

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeUrl = (e, value) => {
    e.preventDefault();
    setUrl(
      `https://newsapi.org/v2/everything?q=${value}&apiKey=7689a33b160242fe868be519e87f7035`
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data.articles);
        console.log("data", response.data.articles);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleChangeUrl={handleChangeUrl}
              data={data}
              error={error}
              loader={isLoading}
            />
          }
        />
        <Route path="/headlines" element={<Headlines />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
