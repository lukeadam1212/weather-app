import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Tables/Article";

//loader
import loader from "../assets/images/svg-loaders/tail-spin.svg"

const HealthScreen = () => {
  // Hooks
  // const [healthNews, setHealthNews] = useState([]);
  const [displayHealthNews, setDisplayHealthNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Side effects
  useEffect(() => {
    axios
      .get("https://weather-app-tst.herokuapp.com/api/health")
      .then((res) => {
        // setHealthNews(res.data.data);
        setDisplayHealthNews(res.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Health</h1>

      <>
        <section>
          {loading ? <img src={loader} alt="loader icon" /> : <Article news={displayHealthNews} />}
        </section>
      </>
    </main>
  );
};

export default HealthScreen;
