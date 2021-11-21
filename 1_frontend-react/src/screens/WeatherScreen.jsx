import React, { useState, useContext } from "react";
import WeatherCard from "../components/Tables/WeatherCard";
import { TimeValues } from "../App";

//loader
import loader from "../assets/images/svg-loaders/tail-spin.svg";

const WeatherScreen = () => {
  const context = useContext(TimeValues);
  const {
    timeNowDecimal,
    sunriseDecimal,
    sunsetDecimal,
    displayWeather,
    sunriseData,
    sunsetData,
  } = context;

  // // Hooks
  // // const [weather, setWeather] = useState([]);
  // const [displayWeather, setDisplayWeather] = useState([]);
  const [loading] = useState(true);

  // // Side effects
  // useEffect(() => {
  //   axios
  //     .get("https://weather-app-tst.herokuapp.com/api/weather")
  //     .then((res) => {
  //       // setWeather(res.data);
  //       setDisplayWeather(res.data);
  //       setLoading(false);
  //     });
  // }, []);
  // console.log(displayWeather);
  // console.log(sunriseDecimal);
  // console.log(sunsetDecimal);
  // console.log(sunriseData);
  // console.log(sunsetData);

  return (
    <main>
      <h1>Weather</h1>

      <>
        <section>
          {loading ? (
            <img src={loader} alt="loader icon" />
          ) : (
            <WeatherCard
              weather={displayWeather}
              timeNowDecimal={timeNowDecimal}
              sunriseDecimal={sunriseDecimal}
              sunsetDecimal={sunsetDecimal}
              sunriseData={sunriseData}
              sunsetData={sunsetData}
            />
          )}
        </section>
      </>
    </main>
  );
};

export default WeatherScreen;
