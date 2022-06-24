// icons
import { AiOutlineCloud } from "react-icons/ai";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { RiCelsiusFill } from "react-icons/ri";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { WiDegrees } from "react-icons/wi";
import { useWeather } from "./useWeather";
import { useCity } from "./useCity";
// dayjs
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
// comp
import "./Weather.scss";
import Error from "containers/error/Error";
import WeatherPerDay from "containers/weather_per_day/WetherPerDay";
import WeatherPerHour from "containers/weather_per_hour/WeatherPerHour";

dayjs.extend(isToday);

const Weather = (props) => {
  const queryParams = new URLSearchParams(window.location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  // city
  const { cities } = useCity({
    lat,
    lon,
    units: "metric",
  });

  // weather
  const { weather } = useWeather({
    lat,
    lon,
    units: "metric",
  });

  // todays weather
  const todaysWeather = weather?.daily.find((day) =>
    dayjs.unix(day.dt).isToday()
  );

  // redirection
  if (!lat && !lon) {
    return <div>{props.history.push("/home")}</div>;
  } else if (!lat || !lon) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="weather">
      <div className="container">
        {/* HEADER*/}
        <div className="weather__info">
          {/* cloud */}
          <div className="weather__info-content">
            <AiOutlineCloud className="weather__info-content-icon" />
            <span>{weather?.current.clouds}%</span>
          </div>

          {/* wind */}
          <div className="weather__info-content">
            <WiStrongWind className="weather__info-content-icon" />
            <span>{weather?.current.wind_speed}m/s</span>
          </div>

          {/* humidity */}
          <div className="weather__info-content">
            <WiHumidity className="weather__info-content-icon" />
            <span>{weather?.current.humidity}%</span>
          </div>
        </div>

        {/* TEMP*/}
        <div className="weather__temp">
          {/* main */}
          <div className="weather__temp-main">
            <span className="weather__temp-main-text">
              {Math.round(weather?.current.temp ?? 0)}
            </span>
            <RiCelsiusFill className="weather__temp-main-icon" />
          </div>

          {/* arrows-degreeses */}
          <div className="weather__temp-arrows-degreeses">
            {/* max */}
            <div className="weather__temp-arrows-degreeses-max">
              <BsArrowUp />
              <span>{Math.round(todaysWeather?.temp.max ?? 0)}</span>
              <WiDegrees className="weather__temp-arrows-degreeses-max-degrees" />
            </div>

            {/* min */}
            <div className="weather__temp-arrows-degreeses-min">
              <BsArrowDown />
              <span>{Math.round(todaysWeather?.temp.min ?? 0)}</span>
              <WiDegrees className="weather__temp-arrows-degreeses-min-degrees" />
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div className="weather__location">
          {/* text */}
          <div className="weather__location-text">
            {cities?.map((city) => (
              <div key={city.name}>
                <span>{city.name}, </span>
                <span>{city.country}</span>
              </div>
            ))}
          </div>

          {/* description */}
          <div className="weather__location-desc">
            {weather?.current.weather.map((weather) => (
              <p key={weather.id}>{weather.description}</p>
            ))}
          </div>

          {/* icon */}
          <div>
            {weather?.current.weather.map((weather) => (
              <img
                key={weather.id}
                src={
                  "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"
                }
                alt="weather-icon"
              ></img>
            ))}
          </div>

          {/* WEATHER PER HOUR*/}
          <div>
            <WeatherPerHour />
          </div>

          {/* WEATHER PER DAY*/}
          <div>
            <WeatherPerDay />
          </div>

          {/* ALERT LIST */}
          <div className="weather__alert">
            {weather?.alerts.map((alert, index) => (
              <div key={`alert-${index}`} className="weather__alert-content">
                {/* sender_name */}
                <div>
                  <div>{alert.sender_name}</div>
                </div>

                {/* event */}
                <div className="weather__alert-content-event">
                  <div>{alert.event}</div>
                </div>

                {/* desc */}
                <div>
                  <div>{alert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
