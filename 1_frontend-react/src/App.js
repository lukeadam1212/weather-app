import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
// Styles
import { GlobalStyle } from "./GlobalStyles";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// images
import loader from "./assets/images/svg-loaders/oval.svg";

// Screens
import HomeScreen from "./screens/HomeScreen";
import BusinessScreen from "./screens/BusinessScreen";
import TechnologyScreen from "./screens/TechnologyScreen";
import HealthScreen from "./screens/HealthScreen";
import SportScreen from "./screens/SportScreen";
import WeatherScreen from "./screens/WeatherScreen";
import ContactScreen from "./screens/ContactScreen";

// context
export const TimeValues = createContext();

const App = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  // hooks
  const [timeNowDecimal, setTimeNowDecimal] = useState("");
  const [sunriseDecimal, setSunriseDecimal] = useState("");
  const [sunsetDecimal, setSunsetDecimal] = useState("");

  // Side effects
  useEffect(() => {
    axios
      .get("https://weather-app-tst.herokuapp.com/api/weather")
      .then((res) => {
        setLoading(false);
        console.log(res.data);

        console.log(weather?.clouds?.all);

        setWeather(res.data);
        console.log(weather);
      })
      .catch((error) => console.log(error));

    let sunriseValue = new Date(
      weather.sys.sunrise * 1000
    ).toLocaleTimeString();
    let sunsetValue = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();

    let sunrise = sunriseValue.slice(0, 5);
    let sunset = sunsetValue.slice(0, 5);
    let timeNow = hours + ":" + minutes;

    setTimeNowDecimal(
      +timeNow.slice(0, 2) + +(+timeNow.slice(3, 5) / 60).toFixed(3)
    );

    let test = +timeNow.slice(0, 2) + +(+timeNow.slice(3, 5) / 60).toFixed(3);
    console.log(test);
    setTimeNowDecimal(test);
    console.log(timeNowDecimal);
    setSunriseDecimal(
      +sunrise.slice(0, 2) + +(+sunrise.slice(3, 5) / 60).toFixed(3)
    );
    setSunsetDecimal(
      +sunset.slice(0, 2) + +(+sunset.slice(3, 5) / 60).toFixed(3)
    );
  }, []);

  if (timeNowDecimal > sunriseDecimal && timeNowDecimal < sunsetDecimal) {
    document.body.classList.remove("night-mode");
    document.body.classList.add("day-mode");
  } else {
    document.body.classList.remove("day-mode");
    document.body.classList.add("night-mode");
  }

  //! needed sunriseData, sunsetData, weather = displayWeather,  timeNowDecimal, sunsetDecimal, sunriseDecimal

  return (
    <div className="App">
      {loading ? (
        <img src={loader} alt="loader" />
      ) : (
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <TimeValues.Provider
              value={{
                timeNowDecimal,
                sunriseDecimal,
                sunsetDecimal,
                weather,
              }}
            >
              <Route exact path="/" component={HomeScreen} />
              <Route path="/business" component={BusinessScreen} />
              <Route path="/technology" component={TechnologyScreen} />
              <Route path="/health" component={HealthScreen} />
              <Route path="/sport" component={SportScreen} />
              <Route path="/weather" component={WeatherScreen} />
              <Route path="/contact-us" component={ContactScreen} />
            </TimeValues.Provider>
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
