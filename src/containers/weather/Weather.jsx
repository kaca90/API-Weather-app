import { AiOutlineCloud } from "react-icons/ai";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { RiCelsiusFill } from "react-icons/ri";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { WiDegrees } from "react-icons/wi";
import { useWeather } from "./useWeather";
import "./Weather.scss";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

dayjs.extend(isToday);
// http://localhost:3000/?lat={lat}&lon={lon}
// http://localhost:3000/?lat=43.3247&lon=21.9033

const Weather = () => {
  const history = useHistory();
  const queryParams = new URLSearchParams(window.location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  const { weather } = useWeather({
    lat,
    lon,
    units: "metric",
  });

  const todaysWeather = weather?.daily.find((day) =>
    dayjs.unix(day.dt).isToday()
  );

  if (!lat || !lon) {
    return history.push("/");
  }

  return (
    <div className="weather">
      {/* Header */}
      <div className="weather-content">
        {/* cloud */}
        <div className="weather-content-info">
          <AiOutlineCloud className="weather-content-info-icon" />
          <span className="weather-content-info-text">
            {weather?.current.clouds}%{/* {weather.lat} */}
          </span>
        </div>
        {/* wind */}
        <div className="weather-content-info">
          <WiStrongWind className="weather-content-info-icon" />
          <span className="weather-content-info-text">
            {weather?.current.wind_speed}m/s
          </span>
        </div>
        {/* humidity */}
        <div className="weather-content-info">
          <WiHumidity className="weather-content-info-icon" />
          <span className="weather-content-info-text">
            {weather?.current.humidity}%
          </span>
        </div>
      </div>

      {/* Main temp*/}
      <div className="weather-main-temp-content">
        <div className="weather-main-temp-content-celsius">
          <span className="weather-main-temp-content-celsius-text">
            {Math.round(weather?.current.temp)}
          </span>
          <RiCelsiusFill className="weather-main-temp-content-celsius-icon" />
        </div>

        {/* arrows-degreeses */}
        <div className="weather-main-temp-content-arrows-degreeses">
          {/* max */}
          <div className="weather-main-temp-content-arrows-degreeses-max">
            <BsArrowUp className="weather-main-temp-content-arrowUp-icon" />
            <span className="weather-main-temp-content-arrowUp-text">
              {Math.round(todaysWeather?.temp.max)}
            </span>
            <WiDegrees className="weather-main-temp-content-degrees-for-icon-arrowUp" />
          </div>

          {/* min */}
          <div className="weather-main-temp-content-arrows-degreeses-min">
            <BsArrowDown className="weather-main-temp-content-arrowDown-icon" />
            <span className="weather-main-temp-content-arrowDown-text">
              {Math.round(todaysWeather?.temp.min)}
            </span>
            <WiDegrees className="weather-main-temp-content-degrees-for-icon-arrowDown" />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="weather-location-content">
        <p className="weather-location-content-text">
          NIS, <span>RS</span>
        </p>

        {/* location description */}
        <div className="weather-location-content-desc">
          {weather?.current.weather.map((weather) => (
            <p>{weather.description}</p>
          ))}
        </div>

        {/* location icon */}
        <div>
          {weather?.current.weather.map((weather) => (
            <img
              src={
                "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"
              }
              alt="weather-icon"
            ></img>
          ))}
        </div>

        {/* Alert list */}
        <div className="weather-alert-list">
          {weather?.alerts.map((alert) => (
            <ul>
              <li>{alert.sender_name}</li>
              <li className="weather-alert-list-alert">{alert.event}</li>
              <li>{alert.description}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
