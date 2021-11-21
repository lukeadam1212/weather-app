import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Tables/Article";

//loader
import loader from "../assets/images/svg-loaders/tail-spin.svg"

const SportScreen = () => {
  // Hooks
  // const [sportNews, setSportNews] = useState([]);
  const [displaySportNews, setDisplaySportNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Side effects
  useEffect(() => {
    axios.get("https://weather-app-tst.herokuapp.com/api/sport").then((res) => {
      // setSportNews(res.data.data);
      setDisplaySportNews(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <h1>Sport</h1>

      <>
        <section>
          {loading ? <img src={loader} alt="loader icon" /> : <Article news={displaySportNews} />}
        </section>
      </>
    </main>
  );
};

export default SportScreen;
