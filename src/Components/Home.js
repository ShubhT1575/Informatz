import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [lastLoading, setLastLoading] = useState(false);
  let count = 0;

  const apiCall = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c201af4b504474d9566faf0cb9d0ce6&page=${page}&pageSize=10`;

      const response = await fetch(url);
      const data = await response.json();
      if (!data.articles) {
        setLastLoading(true);
        return;
      } else {
        setLastLoading(false)
        setNews((prev) => [...prev, ...data.articles]);
        console.log(news);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
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
