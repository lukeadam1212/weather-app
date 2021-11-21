import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Tables/Article";

//loader
import loader from "../assets/images/svg-loaders/tail-spin.svg";

const HomeScreen = () => {
  // Hooks
  // const [news, setNews] = useState([]);
  const [displayNews, setDisplayNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Side effects
  useEffect(() => {
    axios.get("https://weather-app-tst.herokuapp.com/api/news").then((res) => {
      // setNews(res.data.data);
      setDisplayNews(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <h1>Home</h1>

      <>
        <section>
          {loading ? (
            <img src={loader} alt="loader icon" />
          ) : (
            <Article news={displayNews} />
          )}
        </section>
      </>
    </main>
  );
};

export default HomeScreen;
