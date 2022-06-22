import "./WeatherPerDay.scss";
import { useWeather } from "containers/weather/useWeather";
import dayjs from "dayjs";
import { WiDegrees } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

const WeatherPerDay = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  // weather
  const { weather } = useWeather({
    lat,
    lon,
    units: "metric",
  });

  //   week days
  const WeekDays = ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="weather_per_day">
      {weather?.daily.map((day) => (
        <div className="weather_per_day-content">
          {/* Day name */}
          <div className="weather_per_day-content-day-name">
            {WeekDays[dayjs.unix(day?.dt).$W]}
          </div>

          {/* humidity */}
          <div className="weather_per_day-content-humidity">
            <WiHumidity />
            <span>{day.humidity}%</span>
          </div>

          {/* weather icon */}
          <div className="weather_per_day-content-weather-icon">
            {day?.weather.map((weather) => (
              <img
                className="weather_per_day-content-weather-icon-img"
                src={
                  "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"
                }
                alt="weather-icon"
              ></img>
            ))}
          </div>

          {/* max and min temp */}
          <div className="weather_per_day-content-temp">
            {/* max */}
            <span>{Math.round(day.temp.max)}</span>
            <WiDegrees className="weather_per_day-content-temp-degrees-icon" />

            <span className="weather_per_day-content-temp-slash">/</span>

            {/* min */}
            <span>{Math.round(day.temp.min)}</span>
            <WiDegrees className="weather_per_day-content-temp-degrees-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherPerDay;
