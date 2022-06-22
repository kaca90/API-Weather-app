import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.scss";

const Home = () => {
  const weatherCities = [
    {
      // Belgrade
      lat: 44.787197,
      lon: 20.457273,
      cityName: "Belgrade",
    },
    {
      // Nis
      lat: 43.3247,
      lon: 21.9033,
      cityName: "Nis",
    },
    {
      // Novi Sad
      lat: 45.267136,
      lon: 19.833549,
      cityName: "Novi Sad",
    },
  ];

  return (
    <div className="home">
      <div className="home-content">
        Weather in:
        {weatherCities?.map((weatherCity) => (
          <Link
            to={"/weather?lat=" + weatherCity.lat + "&lon=" + weatherCity.lon}
            className="home-content-city-name"
          >
            {weatherCity.cityName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
