import "./Weather.scss";
import { AiOutlineCloud } from "react-icons/ai";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { RiCelsiusFill } from "react-icons/ri";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { WiDegrees } from "react-icons/wi";
import { useWeather } from "./useWeather";

const Weather = () => {
  const { weather } = useWeather({
    lat: "43",
    lon: "21",
  });
  // console.log(weather.current.temp);

  // const { weather } = useWeather();
  // console.log(weather);
  // console.log(weather.current.temp);

  return (
    <div className="home">
      {/* header */}
      
      <div className="home-content">
        <div className="home-content-info">
          <AiOutlineCloud className="home-content-info-icon" />
          <span className="home-content-info-text">75%</span>
        </div>

        <div className="home-content-info">
          <WiStrongWind className="home-content-info-icon" />
          <span className="home-content-info-text">3.1m/s</span>
        </div>

        <div className="home-content-info">
          <WiHumidity className="home-content-info-icon" />
          <span className="home-content-info-text">86%</span>
        </div>
      </div>

      {/* main temp*/}
      <div className="home-main-temp-content">
        <div className="home-main-temp-content-celsius">
          <span>4</span>
          <RiCelsiusFill className="home-main-temp-content-celsius-icon" />
        </div>

        <div className="home-main-temp-content-arrows-degreeses">
          <div>
            <BsArrowUp className="home-main-temp-content-arrowUp-icon" />
            <span lassName="home-main-temp-content-arrowUp-text">5</span>
            <WiDegrees className="home-main-temp-content-degrees-icon-arrowUp" />
          </div>

          <div>
            <BsArrowDown className="home-main-temp-content-arrowDown-icon" />
            <span className="home-main-temp-content-arrowDown-text">4</span>
            <WiDegrees className="home-main-temp-content-degrees-icon-arrowDown" />
          </div>
        </div>
      </div>

      {/* location */}
      <div className="home-location-content">
        <p>
          SERBIA, <span>RS</span>
        </p>
        <p>Nis</p>
      </div>
    </div>
  );
};

export default Weather;
