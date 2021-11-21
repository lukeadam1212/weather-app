import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Tables/Article";

//loader
import loader from "../assets/images/svg-loaders/tail-spin.svg"

const TechnologyScreen = () => {
  // Hooks
  // const [technologyNews, setTechnologyNews] = useState([]);
  const [displayTechnologyNews, setDisplayTechnologyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Side effects
  useEffect(() => {
    axios
      .get("https://weather-app-tst.herokuapp.com/api/technology")
      .then((res) => {
        // setTechnologyNews(res.data.data);
        setDisplayTechnologyNews(res.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Technology</h1>

      <>
        <section>
          {loading ? (
            <img src={loader} alt="loader icon" />
          ) : (
            <Article news={displayTechnologyNews} />
          )}
        </section>
      </>
    </main>
  );
};

export default TechnologyScreen;
