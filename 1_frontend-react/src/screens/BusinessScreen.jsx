import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Tables/Article";

//loader
import loader from "../assets/images/svg-loaders/tail-spin.svg"

const BusinessScreen = () => {
  // Hooks
  // const [businessNews, setBusinessNews] = useState([]);
  const [displayBusinessNews, setDisplayBusinessNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Side effects
  useEffect(() => {
    axios
      .get("https://weather-app-tst.herokuapp.com/api/business")
      .then((res) => {
        // setBusinessNews(res.data.data);
        setDisplayBusinessNews(res.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Business</h1>

      <>
        <section>
          {loading ?<img src={loader} alt="loader icon" />: <Article news={displayBusinessNews} />}
        </section>
      </>
    </main>
  );
};

export default BusinessScreen;
