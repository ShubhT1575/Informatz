import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [array,setArray] = useState(["business","entertainment","general","health","science","sports","technology"])
  const [randomIndex,setRandomIndex] = useState(null)
  const [lastLoading, setLastLoading] = useState(false);
  let count = 0;


  const apiCall = async () => {
    setLastLoading(false)
    const index = Math.floor(Math.random() * array.length);
    setRandomIndex(index);
    try {
      const url = `https://saurav.tech/NewsAPI/top-headlines/category/${array[randomIndex]}/in.json`;

      const response = await fetch(url);
      const data = await response.json();
      if (!data.articles) {
        setLastLoading(true);
        return;
      } else {
        setNews((prev) => [...prev, ...data.articles]);
        // console.log(news);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, [randomIndex]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // setPage((prev) => prev + 1);
        apiCall();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="home">
      <Navbar />
      {lastLoading ? (
        <div className="loader-parent">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="text">Loading....</div>
        </div>
        </div>
      ) : (
        <div className="card-parent">
          {news.map((news) => (
            <NewsCard
              key={count++}
              title={news.title}
              urlToImage={news.urlToImage}
              description={news.description}
              url={news.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
