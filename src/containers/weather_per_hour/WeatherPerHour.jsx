// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// dayjs
import dayjs from "dayjs";

// comp
import { useWeather } from "containers/weather/useWeather";
import "./WeatherPerHour.scss";

// icons
import { WiDegrees } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

const WeatherPerHour = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  // weather
  const { weather } = useWeather({
    lat,
    lon,
    units: "metric",
  });

  return (
    <div className="weather-per-hour">
      <div className="container">
        <Swiper slidesPerView="auto" spaceBetween={10} className="mySwiper">
          {weather?.hourly.slice(0, 24).map((hour) => (
            <SwiperSlide key={hour.dt} className="weather-per-hour__content">
              {/* hour */}
              <div key={hour.dt}>
                <span>{dayjs.unix(hour?.dt).$H}:00</span>
              </div>

              {/* weather icon */}
              <div key={weather.id} className="weather-per-hour__content-icon">
                {hour?.weather.map((weather) => (
                  <img
                    key={weather.id}
                    className="weather-per-hour__content-weather-icon-img"
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt="weather-icon"
                  ></img>
                ))}
              </div>

              {/* temp */}
              <div key={hour.temp} className="weather-per-hour__content-temp">
                <span>{Math.round(hour.temp)}</span>
                <WiDegrees className="weather-per-hour__content-temp-icon" />
              </div>

              {/* humidity */}
              <div
                key={hour.humidity}
                className="weather-per-hour__content-humidity"
              >
                <WiHumidity className="weather-per-hour__content-humidity-icon" />
                <span className="weather-per-hour__content-humidity-text">
                  {hour.humidity}%
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WeatherPerHour;
