import styled from "styled-components";

// weather images
//  -- day
import ClearDay from "../../assets/images/animation-ready/clear-day.svg";
import CloudyDay from "../../assets/images/animation-ready/partly-cloudy-day.svg";
import RainDay from "../../assets/images/animation-ready/partly-cloudy-day-rain.svg";

// -- night
import ClearNight from "../../assets/images/animation-ready/clear-night.svg";
import CloudyNight from "../../assets/images/animation-ready/partly-cloudy-night.svg";
import RainNight from "../../assets/images/animation-ready/partly-cloudy-night-rain.svg";

// sunrise / sunset logos
import sunriseLogo from "../../assets/images/animation-ready/sunrise.svg";
import sunsetLogo from "../../assets/images/animation-ready/sunset.svg";

// humidity thermometer logos
import humidityLogo from "../../assets/images/animation-ready/humidity.svg";
import thermometer from "../../assets/images/animation-ready/thermometer-celsius.svg";

const StyledWeatherCard = styled.div`
  .sunset_sunrise {
    display: flex;
    width: 18rem;
    margin: 0 auto;
    margin-top: 3rem;
    .weather {
      h2 {
        color: orange;
      }
    }
  }
  .humidity {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      padding: 0;
      margin: 0;
    }
    img {
      height: 3rem;
      padding: 0;
      margin: 0;
    }
  }
  .thermometer {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 4rem;
    }
  }
  .sunset {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    img {
      height: 3rem;
    }
  }
`;

const StyledImage = styled.img`
  transform: scale(2);
`;

const StyledCircle = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-left: 0.7rem;
  margin-top: 3rem;
  box-shadow: rgba(46, 201, 240, 0.4) 5px 5px, rgba(46, 130, 240, 0.3) 10px 10px,
    rgba(75, 46, 240, 0.2) 15px 15px, rgba(98, 46, 240, 0.1) 20px 20px,
    rgba(46, 146, 240, 0.05) 25px 25px;
`;

const WeatherCard = ({
  weather,
  timeNowDecimal,
  sunriseDecimal,
  sunsetDecimal,
  sunriseData,
  sunsetData,
}) => {
  // let s = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  // let t = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  // custom functions

  const weatherConditionDay = [
    { name: "Clear", svg: ClearDay },
    { name: "Clouds", svg: CloudyDay },
    { name: "Rain", svg: RainDay },
  ];

  const weatherConditionNight = [
    { name: "Clear", svg: ClearNight },
    { name: "Clouds", svg: CloudyNight },
    { name: "Rain", svg: RainNight },
  ];

  // let hours = new Date().getHours();
  // let minutes = new Date().getMinutes();

  // let sunrise = s.slice(0, 5);
  // let sunset = t.slice(0, 5);
  // let timeNow = hours + ":" + minutes;

  // let timeNowDecimal =
  //   +timeNow.slice(0, 2) + +(+timeNow.slice(3, 5) / 60).toFixed(3);

  // let sunriseDecimal =
  //   +sunrise.slice(0, 2) + +(+sunrise.slice(3, 5) / 60).toFixed(3);
  // let sunsetDecimal =
  //   +sunset.slice(0, 2) + +(+sunset.slice(3, 5) / 60).toFixed(3);

  let found;

  if (timeNowDecimal > sunriseDecimal && timeNowDecimal < sunsetDecimal) {
    found = weatherConditionDay.filter(
      (condition) => condition.name === weather.weather[0].main
    );
  } else {
    found = weatherConditionNight.filter(
      (condition) => condition.name === weather.weather[0].main
    );
  }

  // useEffect(() => {
  //   if (timeNowDecimal > sunriseDecimal && timeNowDecimal < sunsetDecimal) {
  //     document.body.classList.remove("night-mode");
  //     document.body.classList.add("day-mode");
  //   } else {
  //     document.body.classList.remove("day-mode");
  //     document.body.classList.add("night-mode");
  //   }
  // });

  // change body background according to daytime

  console.log("test");

  //! needed sunriseData, sunsetData, weather = displayWeather,  timeNowDecimal, sunsetDecimal, sunriseDecimal

  return (
    <StyledWeatherCard>
      <div className="weather">
        <h2>{weather.name}</h2>
        <div className="thermometer">
          <img src={thermometer} alt="thermometer icon" />
          <h4>+ {(weather.main.temp - 273).toFixed(0)}</h4>
        </div>

        <StyledCircle>
          <StyledImage style={{ height: "5rem" }} src={found[0].svg} alt="" />
        </StyledCircle>

        <div className="sunset_sunrise">
          <div className="sunset">
            <img src={sunriseLogo} alt="" />
            <p>{sunriseData.slice(0, 2) + " : " + sunriseData.slice(3, 5)}</p>
          </div>
          <div className="sunset">
            <img src={sunsetLogo} alt="" />
            <p>{sunsetData.slice(0, 2) + " : " + sunsetData.slice(3, 5)}</p>
          </div>
        </div>
        <div className="humidity">
          <p>{weather.main.humidity}</p>
          <img src={humidityLogo} alt="" />
        </div>
      </div>
    </StyledWeatherCard>
  );
};

export default WeatherCard;
