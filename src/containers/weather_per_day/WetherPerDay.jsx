// comp
import "./WeatherPerDay.scss";
import { useWeather } from "containers/weather/useWeather";
// dayjs
import dayjs from "dayjs";
// icons
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
    <div className="weather-per-day">
      <div className="container">
        {weather?.daily.map((day) => (
          <div key={day.dt} className="weather-per-day__content">

            {/* Day name */}
            <div className="weather-per-day__content-day">
              {WeekDays[dayjs.unix(day?.dt).$W]}
            </div>

            {/* humidity */}
            <div className="weather-per-day__content-humidity">
              <WiHumidity />
              <span>{day.humidity}%</span>
            </div>

            {/* weather icon */}
            <div className="weather-per-day__content-icon">
              {day?.weather.map((weather) => (
                <img
                  key={weather.id}
                  className="weather-per-day__content-weather-icon-img"
                  src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt="weather-icon"
                ></img>
              ))}
            </div>

            {/* max and min temp */}
            <div className="weather-per-day__content-temp">
              {/* max */}
              <span>{Math.round(day.temp.max)}</span>
              <WiDegrees className="weather-per-day__content-temp-icon" />

              <span className="weather-per-day__content-temp-slash">/</span>

              {/* min */}
              <span>{Math.round(day.temp.min)}</span>
              <WiDegrees className="weather-per-day__content-temp-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherPerDay;
